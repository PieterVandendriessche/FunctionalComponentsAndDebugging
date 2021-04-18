import * as React from "react";
import { TriviaCategory } from "../../enums/TriviaCategory";
import { TriviaService } from "../../services/TriviaService";

import "./EffectHook.css";

export const EffectHookFunction: React.FC = () => {

    const [category, setCategory] = React.useState<TriviaCategory>(TriviaCategory.ANIMALS);
    const [questions, setQuestions] = React.useState<any[]>([]);
    const [demoText, setDemoText] = React.useState<string>("Initial");
    const triviaService: TriviaService = new TriviaService();

    const handleResize = () => {
        console.log(window.innerWidth);
    }

    const changeCategory = (category: TriviaCategory) => {
        setCategory(category);
    }

    /* 
    // Use effect with async function call
    React.useEffect(() => {
        async function getData() {
            const data = await triviaService.getQuestions(category);
            setQuestions(data);
        }
        getData();
    }, [category]);
    */

    /*
    // OnMount equivalent, but only on mount
    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);
    */

    /*
    // OnComponentDidUpdate equivalent
    React.useEffect(() => {
        alert("On every update this will get called");
    });
    */

    /*
    // OnComponentDidUpdate equivalent
    React.useEffect(() => {
        alert("On every update of category this is called");
    }, [category]);
    */


    /*
    // OnComponentDidUpdate equivalent with 2 variables to listen to
    React.useEffect(() => {
        alert("On every update of category or testText this is called");
    }, [category, demoText]);
    */


    /*
    // OnMount with cleanup
    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            // Will be removed when component unmounts
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    */

    /*
    // Value 'unmounts' for a different value
    React.useEffect(() => {
        console.log("Category changed, new category is: ", category);

        return () => {
            console.log("Return for category method, old category was: ", category);
        }
    }, [category]);
    */

    return (
        <div className="quiz">
            <h1>Functional component - quiz</h1>
            <div>
                <button onClick={() => changeCategory(TriviaCategory.ANIMALS)}>Animals 🐔</button>
                <button onClick={() => changeCategory(TriviaCategory.ART)}>Art 🖼️</button>
                <button onClick={() => changeCategory(TriviaCategory.HISTORY)}>History 📜</button>
            </div>
            <div className="questions">
                {questions.map((item, index) => {
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