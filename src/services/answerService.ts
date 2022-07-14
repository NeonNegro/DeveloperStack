import { Answer } from "@prisma/client";
import * as answerRepository from '../repositories/answerRepository.js'


export type CreateAnswerData = Omit <Answer, "id">;

async function insert(createAnswerData: CreateAnswerData){
    await answerRepository.insert(createAnswerData);
}


const answerService = {
    insert,
};

export default answerService;