import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { authRouter } from "./routes/authRouter.js";
import { athleteRouter } from "./routes/athletesRouter.js";

export const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/athletes", athleteRouter);

app.use(notFoundHandler);
app.use(errorHandler);
