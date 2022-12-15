import { makeNotification } from "../../../test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";

describe("cancel notification", () => {
    it("should be able to cancel a notification", async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(
            notificationsRepository,
        );

        const notification = makeNotification();

        await notificationsRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].cancelAt).toEqual(
            expect.any(Date),
        );
    });

    it("should not be able to cancel a notification that does not exist", async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(
            notificationsRepository,
        );

        await expect(
            cancelNotification.execute({
                notificationId: "invalid-notification-id",
            }),
        ).rejects.toThrowError(NotificationNotFound);
    });
});
