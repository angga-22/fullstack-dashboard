import CarModel from "../models/Car";
import { ICar, IUser } from "../interfaces/index";

class RepoCar {
  async list(): Promise<ICar[] | Array<[]>> {
    return CarModel.findMany();
  }

  async findByCarName(carName: string): Promise<ICar | null> {
    return CarModel.findOneByCarName(carName);
  }

  async findCarById(carId: number): Promise<ICar | null> {
    return CarModel.findCarById(carId);
  }

  async insertCar(carData: ICar): Promise<ICar> {
    return CarModel.insertCar(carData);
  }

  async updateCar(
    user: IUser,
    carId: number,
    updatedCarData: Partial<ICar>
  ): Promise<ICar | null> {
    return CarModel.updateCar(user, carId, updatedCarData);
  }

  async deleteCar(carId: number): Promise<ICar | null> {
    return CarModel.deleteCar(carId);
  }
}

export default RepoCar;
