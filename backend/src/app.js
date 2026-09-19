import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { authRouter } from "./routes/authRouter.js";

export const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

// TODO (feature/backend-athletes-api):
// app.use('/api/athletes', athletesRouter);

app.use(notFoundHandler);
app.use(errorHandler);
