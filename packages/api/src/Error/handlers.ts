import * as express from "express";
import { IResponseError, ResponseError } from "./index";

export const RequestNotFound: express.RequestHandler = (
  _request,
  _response,
  next
) => {
  const error: IResponseError = new ResponseError(404, "Not found");
  next(error);
};

export const ErrorRequestHandler: express.ErrorRequestHandler = (
  error: IResponseError,
  _request,
  response,
  _next
) => {
  return response.status(error.status || 500).json({
    error: {
      message: error.message || "Internal server error"
    }
  });
};
