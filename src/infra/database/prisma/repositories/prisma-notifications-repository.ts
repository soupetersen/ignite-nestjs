import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../app/entities/notification";
import { NotificationsRepository } from "../../../../app/repositories/notifications-repository";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prisma: PrismaService) {}

    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prisma.notification.findMany({
            where: {
                recipientId: recipientId,
            },
        });

        return notifications.map(PrismaNotificationMapper.toDomain);
    }

    async countManyRecipientId(recipientId: string): Promise<number> {
        const count = await this.prisma.notification.count({
            where: {
                recipientId: recipientId,
            },
        });

        return count;
    }

    async update(notification: Notification): Promise<void> {
        const rawNotification = PrismaNotificationMapper.toPrisma(notification);

        await this.prisma.notification.update({
            where: {
                id: notification.id,
            },
            data: rawNotification,
        });
    }

    async findById(notificationId: string): Promise<Notification> {
        const notification = await this.prisma.notification.findUnique({
            where: {
                id: notificationId,
            },
        });

        return PrismaNotificationMapper.toDomain(notification);
    }

    async create(notification: Notification): Promise<void> {
        const rawNotification = PrismaNotificationMapper.toPrisma(notification);

        await this.prisma.notification.create({
            data: rawNotification,
        });
    }
}
