import { Question } from "@prisma/client";
import * as questionRepository from "../repositories/questionRepository.js";


export type CreateQuestionData = Omit <Question, "id">;

async function insert(createQuestionData: CreateQuestionData){
    await questionRepository.insert(createQuestionData);
}

async function findAll(){
    return questionRepository.findAll();
}

async function findById(id: number){
    //TODO
}

const questionService = {
    insert,
    findAll,
    findById,
};

export default questionService;