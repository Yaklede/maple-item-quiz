import React, {useState} from "react";
import quizStore from "../store/QuizStore";
import QuizComponent from "./QuizComponent";
import QuizDonePage from "./QuizDonePage";


const quizList = quizStore.getQuizList()

export default function QuizPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        // 다음 요소로 이동
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div>
            {
                currentIndex < quizList.length ? (
                    <QuizComponent key={currentIndex} quiz={quizList[currentIndex]} onNext={handleNext} index={currentIndex + 1}/>
                ) : (<QuizDonePage/>)
            }
        </div>
    );
}
