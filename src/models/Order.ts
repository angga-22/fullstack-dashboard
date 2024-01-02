import { prisma } from "../config";
import { IOrder } from "../interfaces";

class OrderModel {
  async findMany(): Promise<IOrder[]> {
    return prisma.orders.findMany();
  }
}

export default new OrderModel();
