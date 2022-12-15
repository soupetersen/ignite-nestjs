import { Notification } from "../entities/notification";

export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract findById(notificationId: string): Promise<Notification>;
    abstract update(notification: Notification): Promise<void>;
    abstract countManyRecipientId(recipientId: string): Promise<number>;
    abstract findManyByRecipientId(
        recipientId: string,
    ): Promise<Notification[]>;
}
