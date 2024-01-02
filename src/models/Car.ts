import { prisma } from "../config";
import { ICar, IUser } from "../interfaces";

class CarModel {
  async findMany(): Promise<ICar[]> {
    return prisma.cars.findMany();
  }

  async findOneByCarName(name: string): Promise<ICar | null> {
    return prisma.cars.findFirst({
      where: { name }
    });
  }

  async findCarById(carId: number): Promise<ICar | null> {
    return prisma.cars.findUnique({
      where: { carId }
    });
  }

  async insertCar(carData: ICar): Promise<ICar> {
    return prisma.cars.create({
      data: carData
    });
  }

  async updateCar(
    user: IUser,
    carId: number,
    updatedCarData: Partial<ICar>
  ): Promise<ICar | null> {
    const existingCar = await prisma.cars.findUnique({
      where: { carId }
    });
    if (!existingCar) {
      return null;
    }
    const updatedCar = await prisma.cars.update({
      where: { carId },
      data: {
        ...updatedCarData,
        updatedBy: user.username
      }
    });

    return updatedCar;
  }

  async deleteCar(carId: number): Promise<ICar | null> {
    const existingCar = await prisma.cars.findUnique({
      where: { carId }
    });

    if (!existingCar) {
      return null;
    }

    const deletedCar = await prisma.cars.delete({
      where: { carId }
    });

    return deletedCar;
  }
}

export default new CarModel();
