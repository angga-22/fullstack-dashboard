import OrderModel from "../models/Order";
import { IOrder } from "../interfaces";

class RepoOrder {
  async list(): Promise<Array<IOrder> | Array<[]>> {
    return OrderModel.findMany();
  }
}

export default RepoOrder;
