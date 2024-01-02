import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";
import apiRouter from "./routes/api";
import ResponseBuilder from "./utils/ResponseBuilder";
import cors from "cors";

dotenv.config();

const { PORT } = process.env;
const PUBLIC_DIR = path.join(__dirname, "../public");

const app: Express = express();

const notFoundHandler = (req: Request, res: Response) => {
  return ResponseBuilder.response(
    res,
    404,
    "Resource, data, or page not found",
    "not found"
  );
};
const errorHandler = (err: any, req: Request, res: Response) => {
  return ResponseBuilder.response(
    res,
    err?.statusCode ?? 500,
    err.message,
    err.name
  );
};

app.use(express.static(PUBLIC_DIR));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/v1/api", apiRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  process.stdout.write(
    `🚀 Server ready (environment: ${process.env.NODE_ENV}) at http://localhost:${PORT}/`
  );
});
