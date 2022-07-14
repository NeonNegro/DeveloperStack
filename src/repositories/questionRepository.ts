// TODO

import prisma from "../database.js";
import { CreateQuestionData } from "../services/questionService.js";

export async function insert(createQuestionData: CreateQuestionData){
    await prisma.question.create({data: createQuestionData});
}

export async function findAll(){
    return await prisma.question.findMany();
}
