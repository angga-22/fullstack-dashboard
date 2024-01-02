import { ICar, IUser } from "../interfaces";
import RepoCar from "../repositories/RepoCar";

class ServiceCar {
  private _repoCar: RepoCar;
  private _user: IUser | undefined;

  constructor(repoCar: RepoCar) {
    this._repoCar = repoCar;
  }
  set setUser(userData: IUser) {
    this._user = userData;
  }

  get getUser() {
    return this._user;
  }

  async insertCar(carData: ICar) {
    const car = await this._repoCar.insertCar(carData);
    return car;
  }

  async list() {
    const cars = await this._repoCar.list();
    return cars;
  }

  async findCarByName(carName: string) {
    const car = await this._repoCar.findByCarName(carName);
    return car;
  }

  async updateCar(user: IUser, carId: number, updatedCarData: ICar) {
    const car = await this._repoCar.updateCar(user, carId, updatedCarData);
    return car;
  }

  async deleteCar(carId: number) {
    const car = await this._repoCar.deleteCar(carId);
    return car;
  }
}

export default ServiceCar;
