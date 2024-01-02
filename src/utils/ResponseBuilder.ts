import { Response } from "express";
import { STATUS_CODE, StatusCode } from "../constants";

class ResponseBuilder {
  constructor() {}
  static response<T>(res: Response, code: number, data: T, message?: string) {
    const status: string = STATUS_CODE[code as StatusCode] || "Unknown";
    return res.status(code).json({
      status,
      message,
      data
    });
  }
}

export default ResponseBuilder;
