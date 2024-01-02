import { Request, Response } from "express";
type Gender = "MALE" | "FEMALE" | "RANDOM";
type Role = "SUPER_USER" | "ADMIN_USER" | "USER";
type Brand = "TOYOTA" | "HONDA" | "SUZUKI" | "MITSUBISHI";
type OrderStatus = "STILL_RENTING" | "FINISH_RENTING";

export type TParams = {
  search?: string;
  page?: number;
  size?: number;
};

export interface IRestModel<T> {
  show: (id: string) => void;
  list: (params?: TParams) => void;
  create: (payload: T) => void;
  update: (id: string, payload: T) => void;
  remove: (id: string) => void;
}

export interface IRestController {
  show: (req: Request, res: Response) => void;
  list: (req: Request, res: Response) => void;
  create: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
  remove: (req: Request, res: Response) => void;
}

export interface IRegisterUser {
  id: number;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  password: string;
  passwordV3: string | null;
  gender: Gender;
  birthDate: Date | null;
  address: string | null;
  mobile: string | null;
  image: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
}

export interface IUser {
  id: number;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  password: string;
  passwordV3: string | null;
  gender: string | null;
  birthDate: Date | null;
  address: string | null;
  mobile: string | null;
  image: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role: string | null;
}

export type TLoginPayload = {
  username: string;
  password: string;
};

export interface IOrder {
  orderId: number;
  status: OrderStatus;
  dayRent: number;
  priceRent: number;
}

export interface ICar {
  carId: number;
  name: string;
  brand: Brand;
  image: string;
  rentPrice: number;
  yearReleased: Date;
  createdAt: Date;
  updatedAt: Date;
  updatedBy?: string | null;
  isRent: boolean;
}

export interface IServiceAuth {
  // eslint-disable-next-line no-unused-vars
  login(payload: TLoginPayload): Promise<IUser | string>;
  // eslint-disable-next-line no-unused-vars
  register(payload: IRegisterUser): Promise<IUser>;
}
