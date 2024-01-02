import {
  IUser,
  IRegisterUser,
  IServiceAuth,
  TLoginPayload
} from "../interfaces";
import bcrypt, { genSaltSync } from "bcrypt";
import jwt from "jsonwebtoken";
import RepoUser from "../repositories/RepoUser";
import ClientError from "../utils/ClientError";

export const JWT_KEY = "RENTAL_CAR_JWT_KEY";

class ServiceAuth implements IServiceAuth {
  private _repoUser: RepoUser;

  constructor(repoUser: RepoUser) {
    this._repoUser = repoUser;
  }

  async login(payload: TLoginPayload): Promise<IUser | string> {
    const user = await this._repoUser.findByUsername(payload.username);
    if (!user) {
      throw new ClientError("User not found!", 404);
    }
    const validatePassword = bcrypt.compareSync(
      payload.password,
      user.password
    );

    if (!validatePassword) {
      throw new ClientError("Username and Password is not match", 404);
    }

    return this.generateToken(user);
  }

  async register(payload: IRegisterUser): Promise<IUser> {
    const password = this.encryptPassword(payload.password);
    const passwordV3 = this.encryptPassword(payload.password);
    const create = await this._repoUser.create({
      ...payload,
      password,
      passwordV3
    });

    return create;
  }

  async getUserById(id: number): Promise<IUser | null> {
    const user = await this._repoUser.findById(id);
    return user;
  }

  generateToken(user: IUser): string {
    const token = jwt.sign({ ...user }, JWT_KEY);
    return token;
  }

  validateToken(token: string): IUser {
    const decoded = jwt.verify(token, JWT_KEY);
    return decoded as IUser;
  }

  validateRole(user: IUser, role: string): boolean {
    return user.role === role;
  }

  encryptPassword(password: string): string {
    return bcrypt.hashSync(password, genSaltSync(5));
  }
}

export default ServiceAuth;
