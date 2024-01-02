import { NextFunction, Request, Response } from "express";
import ServiceAuth from "../services/ServiceAuth";
import ResponseBuilder from "../utils/ResponseBuilder";
class ControllerAuth {
  private _serviceAuth: ServiceAuth;

  constructor(serviceAuth: ServiceAuth) {
    this._serviceAuth = serviceAuth;
  }

  getUserById() {
    const auth = this._serviceAuth;
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const response = await auth.getUserById(req.body.id);
        return ResponseBuilder.response(
          res,
          200,
          response,
          "Success Get UserBy Id!"
        );
      } catch (error) {
        next(error);
      }
    };
  }

  login() {
    const auth = this._serviceAuth;
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const response = await auth.login({
          username: req.body.username,
          password: req.body.password
        });
        return ResponseBuilder.response(res, 200, response, "Login Success!");
      } catch (error) {
        next(error);
      }
    };
  }

  register() {
    const auth = this._serviceAuth;
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const response = await auth.register({
          id: req.body.id,
          email: req.body.email,
          birthDate: new Date(req.body.birthDate),
          password: req.body.password,
          passwordV3: req.body.passwordV3,
          role: req.body.role,
          username: req.body.username,
          firstName: req.body.firstName,
          image: req.body.image,
          lastName: req.body.lastName,
          gender: req.body.gender,
          address: req.body.address,
          mobile: req.body.mobile,
          createdAt: new Date(req.body.createdAt),
          updatedAt: new Date(req.body.updatedAt)
        });
        return ResponseBuilder.response(
          res,
          201,
          response,
          "Register User Success !"
        );
      } catch (error) {
        next(error);
      }
    };
  }

  update() {
    const auth = this._serviceAuth;
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const response = await auth.register({
          id: req.body.id,
          email: req.body.email,
          birthDate: new Date(req.body.birthDate),
          password: req.body.password,
          passwordV3: req.body.passwordV3,
          role: req.body.role,
          username: req.body.username,
          firstName: req.body.firstName,
          image: req.body.image,
          lastName: req.body.lastName,
          gender: req.body.gender,
          address: req.body.address,
          mobile: req.body.mobile,
          createdAt: new Date(req.body.createdAt),
          updatedAt: new Date(req.body.updatedAt)
        });
        return ResponseBuilder.response(
          res,
          201,
          response,
          "Update User Success !"
        );
      } catch (error) {
        next(error);
      }
    };
  }
}

export default ControllerAuth;
