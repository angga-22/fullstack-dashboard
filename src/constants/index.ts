export type StatusCode = 200 | 201 | 400 | 403 | 404 | 500 | 501 | 503 | 504;

export const STATUS_CODE: Record<StatusCode, string> = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error",
  501: "Not Implemented",
  503: "Service Unavailable",
  504: "Gateway Timeout"
};
