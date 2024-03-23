class ApiError extends Error {
  constructor(
    statusCode,
    message = "Opps something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.message = message;
    this.data = {};
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      this.stack = Error.captureStackTrace(this, this.stack);
    }
  }
}

export { ApiError };
