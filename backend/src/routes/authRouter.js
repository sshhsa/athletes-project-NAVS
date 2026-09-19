import { Router } from "express";

import { authControllers } from "../controllers/authControllers.js";
import { validateBody } from "../middlewares/validateBody.js";
import { authenticate } from "../middlewares/authenticate.js";
import { registerSchema, loginSchema } from "../schemas/authSchemas.js";

export const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(registerSchema),
  authControllers.register,
);
authRouter.post("/login", validateBody(loginSchema), authControllers.login);
authRouter.get("/verify/:verificationToken", authControllers.verifyEmail);

authRouter.get("/current", authenticate, authControllers.getCurrent);
authRouter.post("/logout", authenticate, authControllers.logout);
