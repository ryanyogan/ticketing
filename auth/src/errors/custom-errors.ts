export abstract class CusttomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CusttomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
