import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps: true})
export class User{
  @Prop()
  username: string;

  @Prop()
  birthDate: Date;

  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);