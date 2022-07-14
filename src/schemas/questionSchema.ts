import Joi from "joi";
import { CreateQuestionData } from "../services/questionService.js";

export const questionSchema = Joi.object<CreateQuestionData>({
  statement: Joi.string().required()
});
