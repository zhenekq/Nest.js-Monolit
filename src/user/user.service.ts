import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { User } from "./user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NotFoundError } from "rxjs";
import { CreateNewUserRequest } from "./createNewUserRequest.entity";

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private readonly userModel: Model<User>){}

  async getAllUsers(){
    try{
      return await this.userModel.find({});
    }catch (error){
      throw new NotFoundError(error);
    }
  }

  async getById(id: string){
    try{
      return await this.userModel.findById(id);
    }catch (error){
    throw new NotFoundError(error)
    }
  }


  async createUser(createNewUserRequest: CreateNewUserRequest){
    try {
      const {username, age} = createNewUserRequest;
      const user = new this.userModel({
        username,
        age,
      });

      user.birthDate = new Date();
      await user.save();
      return user;
    }catch (error){
      throw new InternalServerErrorException();
    }
  }

}
