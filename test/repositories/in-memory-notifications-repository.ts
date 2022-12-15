import { Notification } from "../../src/app/entities/notification";
import { NotificationsRepository } from "../../src/app/repositories/notifications-repository";

export class InMemoryNotificationsRepository
    implements NotificationsRepository
{
    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        return this.notifications.filter(
            (item) => item.recipientId === recipientId,
        );
    }

    async countManyRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter(
            (item) => item.recipientId === recipientId,
        ).length;
    }

    async findById(notificationId: string): Promise<Notification> {
        const notification = this.notifications.find(
            (item) => item.id === notificationId,
        );

        if (!notification) {
            return null;
        }

        return notification;
    }

    async update(notification: Notification): Promise<void> {
        const index = this.notifications.findIndex(
            (item) => item.id === notification.id,
        );

        if (index >= 0) {
            this.notifications[index] = notification;
        }
    }

    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}
