import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces";
import { JWT_KEY } from "../services/ServiceAuth";

export interface IRequestWithAuth extends Request {
  user?: IUser;
}

class Auth {
  constructor() {}

  authorize(req: IRequestWithAuth, res: Response, next: NextFunction) {
    const headers = req.headers;
    if (!headers.authorization) {
      return res.status(403).json({
        data: "User not authorized!"
      });
    }
    const token = req.headers.authorization;
    const userData = jwt.verify(`${token}`, JWT_KEY) as IUser | undefined;
    if (!userData) {
      return res.status(403).json({
        data: "User not authorized!"
      });
    }

    req.user = userData;
    next();
  }

  async authorizeSuperAdmin(
    req: IRequestWithAuth,
    res: Response,
    next: NextFunction
  ) {
    const headers = req.headers;
    if (!headers.authorization) {
      return res.status(403).json({
        data: "User not authorized!"
      });
    }
    const token = req.headers.authorization;
    const userData = jwt.verify(`${token}`, JWT_KEY) as IUser;
    if (!(userData.role === "SUPER_USER")) {
      return res.status(403).json({
        data: "not authorized, only superadmin can create"
      });
    }
    req.user = userData;
    next();
  }
}

export default Auth;
