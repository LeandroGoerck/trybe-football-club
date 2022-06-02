import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import checkStatus from './checkStatus';




const validateLoginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  
  const { email, password } = req.body;

  console.log('error=', error);
  const errorType = error?.details[0].type;
  if (checkStatus.code400(errorType)) return res.status(400).json({ message: error?.message });
  if (checkStatus.code422(errorType)) return res.status(422).json({ message: error?.message });

  next();
};

export default validateLoginMiddleware;
