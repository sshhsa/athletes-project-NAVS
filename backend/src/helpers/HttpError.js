import createError from "http-errors";

const errorMessages = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

export const HttpError = (status, message = errorMessages[status]) => {
  return createError(status, message);
};
