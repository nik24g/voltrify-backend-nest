import {Module} from '@nestjs/common';
import {OtpService} from './otp.service';
import {OtpController} from './otp.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Otp, OtpSchema} from '../models/otp.model';
import {NotificationModule} from "../notification/notification.module";
import {User, UserSchema} from "../models/user.model";
import {Admin, AdminSchema} from "../models/admin.model";

@Module({
    imports: [
        NotificationModule,
        MongooseModule.forFeature([{name: Otp.name, schema: OtpSchema}]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
    ],
    controllers: [OtpController],
    providers: [OtpService],
    exports: [OtpService],
})
export class OtpModule {
}
