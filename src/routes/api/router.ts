import { Router } from "express";

// controllers
import ControllerAuth from "../../controllers/ControllerAuth";
import ControllerCar from "../../controllers/ControllerCar";

// services
import ServiceAuth from "../../services/ServiceAuth";
import ServiceCar from "../../services/ServiceCar";
// middlewares
import MiddlewareAuth from "../../middlewares/Auth";

// repositories
import RepoUser from "../../repositories/RepoUser";
import RepoCar from "../../repositories/RepoCar";
import RepoOrder from "../../repositories/RepoOrder";
import ServiceOrder from "../../services/ServiceOrder";
import ControllerOrder from "../../controllers/ControllerOrder";

const router = Router();

const middlewareAuth = new MiddlewareAuth();

// Auth
const repoUser = new RepoUser();
const serviceAuth = new ServiceAuth(repoUser);
const controllerAuth = new ControllerAuth(serviceAuth);

// Car
const repoCar = new RepoCar();
const serviceCar = new ServiceCar(repoCar);
const controllerCar = new ControllerCar(serviceCar);

// ORder
const repoOrder = new RepoOrder();
const serviceOrder = new ServiceOrder(repoOrder);
const controllerOrder = new ControllerOrder(serviceOrder);

// router auth
router.post("/auth/login", controllerAuth.login());
router.post(
  "/auth/register",
  middlewareAuth.authorizeSuperAdmin,
  controllerAuth.register()
);

// router order
router.get("/orders", middlewareAuth.authorize, controllerOrder.list());
// router car
router.post(
  "/cars",
  middlewareAuth.authorizeSuperAdmin,
  controllerCar.insertCar()
);

router.delete(
  "/cars",
  middlewareAuth.authorizeSuperAdmin,
  controllerCar.deleteCar()
);

router.get("/cars", middlewareAuth.authorize, controllerCar.list());

export default router;
