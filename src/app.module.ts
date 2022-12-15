import { Module } from "@nestjs/common";
import { SendNotification } from "./app/use-cases/send-notification";

import { DatabaseModule } from "./infra/database/database.module";
import { HttpModule } from "./infra/http/http.module";
import { MessagingModulee } from "./infra/messaging/messaging.module";

@Module({
    imports: [HttpModule, DatabaseModule, MessagingModulee],
    providers: [SendNotification],
})
export class AppModule {}
