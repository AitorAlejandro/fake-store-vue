import { Url } from "../../types";

export function createRequest(url: Url): Request {
  const request = new Request(url);
  return request;
}
