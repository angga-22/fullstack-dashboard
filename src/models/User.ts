import { prisma } from "../config";
import { IRegisterUser, IUser } from "../interfaces";

class UserModel {
  async findMany(): Promise<IUser[]> {
    return prisma.users.findMany();
  }

  async findOneByUsername(username: string): Promise<IUser | null> {
    return prisma.users.findUnique({
      where: { username }
    });
  }

  async findById(id: number): Promise<IUser | null> {
    return prisma.users.findUnique({
      where: { id }
    });
  }

  async create(userData: IRegisterUser): Promise<IUser> {
    return prisma.users.create({
      data: userData
    });
  }
}

export default new UserModel();
