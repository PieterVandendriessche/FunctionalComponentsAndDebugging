import * as React from "react";
import { TriviaCategory } from "../../enums/TriviaCategory";
import { TriviaService } from "../../services/TriviaService";

import "./EffectHook.css";

export interface IEffectHookClassState {
    category: TriviaCategory;
    questions: any[];
}

export class EffectHookClass extends React.Component<{}, IEffectHookClassState> {
    private triviaService: TriviaService;

    constructor(props: any) {
        super(props);

        this.state = {
            category: TriviaCategory.ANIMALS,
            questions: []
        };

        this.triviaService = new TriviaService();
        this.setCategory = this.setCategory.bind(this);
    }

    public async componentDidUpdate(prevProps: any, prevState: IEffectHookClassState) {
        if (prevState.category !== this.state.category) {
            const results = await this.triviaService.getQuestions(this.state.category);
            this.setState({ questions: results });
        }

    }

    public setCategory(category: TriviaCategory) {
        this.setState({ category: category });
    }

    public render() {
        return (
            <div className="quiz">
                <h1>Class component - quiz</h1>
                <div>
                    <button onClick={() => this.setCategory(TriviaCategory.ANIMALS)}>Animals 🐔</button>
                    <button onClick={() => this.setCategory(TriviaCategory.ART)}>Art 🖼️</button>
                    <button onClick={() => this.setCategory(TriviaCategory.HISTORY)}>History 📜</button>
                </div>
                <div className="questions">
                    {this.state.questions.map((item, index) => {
                        const answers = [item.correct_answer, ...item.incorrect_answers];
                        return <div key={index}>
                            <p>{item.question}</p>
                            <ul>
                                {answers.map((answer, keyAnswer) => {
                                    return <li key={keyAnswer}>{answer}</li>;
                                })}
                            </ul>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}