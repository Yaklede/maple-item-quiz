import React from "react";
import {useNavigate} from "react-router-dom";

const QuizDonePage = () => {
    const history = useNavigate()

    return (
        <div className="bg-maple h-screen flex items-center justify-center">
            <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-lg">
                <h1 className="text-5xl font-bold mb-8 text-orange-600">모든 퀴즈를 완료했습니다.</h1>
                <button
                    onClick={() => {
                        history('/result')
                    }
                }
                    className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange"
                >
                    결과
                </button>
            </div>
        </div>
    );

}

export default QuizDonePage;
