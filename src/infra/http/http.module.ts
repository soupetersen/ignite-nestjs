import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../infra/database/database.module";

import { SendNotification } from "../../app/use-cases/send-notification";
import { NotificationsController } from "./controllers/notifications.controller";
import { CancelNotification } from "../../app/use-cases/cancel-notification";
import { CountRecipientNotifications } from "../../app/use-cases/count-recipient-notifications";
import { ReadNotification } from "../../app/use-cases/read-notification";
import { UnreadNotification } from "../../app/use-cases/unread-notification";
import { GetRecipientNotifications } from "src/app/use-cases/get-recipient-notifications";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification,
    ],
})
export class HttpModule {}
