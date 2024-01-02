import UserModel from "../models/User";
import { IUser, IRegisterUser } from "../interfaces/index";

class RepoUser {
  async findByUsername(username: string): Promise<IUser | null> {
    return UserModel.findOneByUsername(username);
  }

  async findById(id: number): Promise<IUser | null> {
    return UserModel.findById(id);
  }

  async create(userData: IRegisterUser): Promise<IUser> {
    return UserModel.create(userData);
  }
}

export default RepoUser;
