import { Router } from "express";

import { athleteControllers } from "../controllers/athletesControllers.js";
import { validateBody } from "../middlewares/validateBody.js";
import { authenticate } from "../middlewares/authenticate.js";
import {
  createAthleteSchema,
  updateAthleteSchema,
} from "../schemas/athleteSchemas.js";

export const athleteRouter = Router();

athleteRouter.use(authenticate);

athleteRouter.get("/", athleteControllers.getAll);
athleteRouter.get("/:id", athleteControllers.getById);
athleteRouter.post(
  "/",
  validateBody(createAthleteSchema),
  athleteControllers.create,
);
athleteRouter.patch(
  "/:id",
  validateBody(updateAthleteSchema),
  athleteControllers.update,
);
athleteRouter.delete("/:id", athleteControllers.remove);
