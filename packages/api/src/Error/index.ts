export * from "./handlers";

export interface IResponseError extends Error {
  status: number;
  message: string;
}

export class ResponseError extends Error {
  public status: number;
  public message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
