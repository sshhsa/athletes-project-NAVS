import Joi from "joi";

export const createAthleteSchema = Joi.object({
  name: Joi.string().min(2).max(64).required().messages({
    "string.empty": "Name is required",
  }),
  sport: Joi.string().min(2).max(64).required().messages({
    "string.empty": "Sport is required",
  }),
  country: Joi.string().min(2).max(64).required().messages({
    "string.empty": "Country is required",
  }),
  dateOfBirth: Joi.date().less("now").required().messages({
    "date.base": "Date of birth must be a valid date",
    "date.less": "Date of birth must be in the past",
    "any.required": "Date of birth is required",
  }),
});

export const updateAthleteSchema = Joi.object({
  name: Joi.string().min(2).max(64),
  sport: Joi.string().min(2).max(64),
  country: Joi.string().min(2).max(64),
  dateOfBirth: Joi.date().less("now"),
}).min(1);
