import { NextFunction, Response } from "express";
import { IRequestWithAuth } from "../middlewares/Auth";
import ServiceCar from "../services/ServiceCar";
import { ICar, IUser } from "../interfaces";
import ResponseBuilder from "../utils/ResponseBuilder";

class ControllerCar {
  private _serviceCar: ServiceCar;

  constructor(serviceCar: ServiceCar) {
    this._serviceCar = serviceCar;
  }

  list() {
    const serviceCar = this._serviceCar;
    return async (req: IRequestWithAuth, res: Response, next: NextFunction) => {
      try {
        const response = await serviceCar.list();
        return ResponseBuilder.response(
          res,
          200,
          response,
          "Success Get Cars List!"
        );
      } catch (error) {
        next(error);
      }
    };
  }

  insertCar() {
    const serviceCar = this._serviceCar;
    return async (req: IRequestWithAuth, res: Response, next: NextFunction) => {
      try {
        serviceCar.setUser = req.user as IUser;

        const reqBody = {
          ...req.body,
          createdAt: new Date(req.body.createdAt),
          yearReleased: new Date(req.body.yearReleased),
          updatedAt: new Date(req.body.updatedAt)
        };
        const response = await serviceCar.insertCar(reqBody as ICar);
        return ResponseBuilder.response(
          res,
          201,
          response,
          "Success Insert New Car!"
        );
      } catch (error) {
        next(error);
      }
    };
  }

  deleteCar() {
    const serviceCar = this._serviceCar;
    return async (req: IRequestWithAuth, res: Response, next: NextFunction) => {
      try {
        const response = await serviceCar.deleteCar(req.body.carId);
        return ResponseBuilder.response(
          res,
          200,
          response,
          "Success Delete a Car!"
        );
      } catch (error) {
        next(error);
      }
    };
  }
}

export default ControllerCar;
