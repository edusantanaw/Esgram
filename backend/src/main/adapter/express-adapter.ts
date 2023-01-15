import { Request, Response } from "express";
import { Controller } from "../../protocols/adapter/controller";

const adapter = (method: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await method.handle({
      ...req.body,
      ...req.params,
      ...req.query,
      image: req?.file,
    });
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export default adapter;
