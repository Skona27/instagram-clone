import { IResponseError } from "../Error";

export interface IDatabaseResponse<T> {
  error: IResponseError | null;
  data: T | null;
}
