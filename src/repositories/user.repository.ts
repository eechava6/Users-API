import { UserModel } from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

export default class UserRepository extends UserModel {
  async createNewUser(newUser: IUser): Promise<object> {
    const user = await UserModel.create(newUser);
    const { name, email } = user;
    return { name, email };
  }
}
