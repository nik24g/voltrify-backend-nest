import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {User, UserSchema} from "../models/user.model";
import {MongooseModule} from "@nestjs/mongoose";
import { AddressModule } from './address/address.module';

@Module({
  imports: [
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      AddressModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])]
})
export class UserModule {
  constructor() {
    console.log("User module attached")
  }
}
