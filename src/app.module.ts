import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/employee'),
    UserModule
  ],
})
export class AppModule {}
