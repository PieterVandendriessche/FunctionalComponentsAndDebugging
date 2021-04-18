import { TriviaCategory } from "../enums/TriviaCategory";
import axios from "axios";

export class TriviaService {

    public async getQuestions(category: TriviaCategory): Promise<any> {
        const result = await axios.get(`https://opentdb.com/api.php?amount=5&category=${category}`);
        if (result.status === 200) {
            const data = result.data;
            return data.results;
        }
    }
}