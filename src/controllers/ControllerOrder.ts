import ServiceOrder from "../services/ServiceOrder";
import { NextFunction, Response } from "express";
import { IRequestWithAuth } from "../middlewares/Auth";
import ResponseBuilder from "../utils/ResponseBuilder";

class ControllerOrder {
  private _serviceOrder: ServiceOrder;

  constructor(serviceOrder: ServiceOrder) {
    this._serviceOrder = serviceOrder;
  }

  list() {
    const serviceOrder = this._serviceOrder;
    return async (req: IRequestWithAuth, res: Response, next: NextFunction) => {
      try {
        const response = await serviceOrder.list();
        return ResponseBuilder.response(
          res,
          200,
          response,
          "Success Get Order List!"
        );
      } catch (error) {
        next(error);
      }
    };
  }
}

export default ControllerOrder;
