// import { Request } from "express";

import ServiceCar from "../../services/ServiceCar";
import RepoCar from "../../repositories/RepoCar";

const repoCar = new RepoCar();
const serviceCar = new ServiceCar(repoCar);

describe("Service Cars", () => {
  describe("get list cars", () => {
    it("should show list all cars", async () => {
      // arrange

      // act

      const result = await serviceCar.list();

      // assert
      expect(result).toBeDefined();
      // Add more specific assertions based on the expected behavior of the list method
      expect(result.length).toBeGreaterThan(0);
    });
  });
  describe("insert a car", () => {
    it("should success adding a car", async () => {
      // arrange
      // act
      // const result = await serviceCar.insertCar();
      // assert
    });
  });
});
