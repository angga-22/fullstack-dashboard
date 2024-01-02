// __tests__/unit/userService.spec.ts

import { Request } from "express";
import ServiceAuth from "../../services/ServiceAuth";
import RepoUser from "../../repositories/RepoUser";

const repoUser = new RepoUser();
const serviceAuth = new ServiceAuth(repoUser);

describe("ServiceAuth", () => {
  describe("getUserById", () => {
    it("should return a user by ID", async () => {
      // Arrange
      const userId = 1;
      const mockedRequest: Partial<Request> = {
        body: { id: userId }
      };

      // Act
      const result = await serviceAuth.getUserById(mockedRequest.body.id);

      // Assert
      expect(result).toBeDefined();
      expect(result!.id).toEqual(userId);
      expect(result!.username).toEqual("angga-22");
    });
  });
  describe("login", () => {
    it("should successfully login by username and password", async () => {
      // Arrange
      const username = "angga-22";
      const password = "Angga-22";
      const mockedRequest: Partial<Request> = {
        body: {
          username,
          password
        }
      };

      // Act
      const result = await serviceAuth.login(mockedRequest.body);
      // Assert
      expect(result).toBeDefined();
    });
  });
});
