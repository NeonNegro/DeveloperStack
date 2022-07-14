// TODO

import prisma from "../database.js";
import { CreateAnswerData } from "../services/answerService.js";

export async function insert(createAnswerData: CreateAnswerData){
    await prisma.answer.create({data: createAnswerData});
}
