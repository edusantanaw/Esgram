export function badRequest(msg: string) {
  return {
    statusCode: 400,
    body: msg,
  };
}

export function Unauthorized(msg: string) {
  return {
    statusCode: 401,
    body: msg,
  };
}

export function catchError(error: unknown) {
  return {
    statusCode: 400,
    body: error,
  };
}
