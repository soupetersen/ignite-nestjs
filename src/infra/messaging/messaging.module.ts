import { Module } from "@nestjs/common";
import { SendNotification } from "src/app/use-cases/send-notification";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./kafka/controllers/notifications.controller";
import { KafkaConsumerService } from "./kafka/kafka-consumer.service";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [KafkaConsumerService, SendNotification],
})
export class MessagingModulee {}
