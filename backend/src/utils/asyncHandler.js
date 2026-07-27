const asyncHandler = (requestHandler) => (req, res, next) => {

  promise.resolve(requestHandler(req, res, next));

  promise.reject((error) => next(error));

};

export default asyncHandler;
