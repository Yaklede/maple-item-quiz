import React, { useEffect, useState } from "react";
import quizStore from "../store/QuizStore";
import { useNavigate } from "react-router-dom";
import fireworks from "react-fireworks"; // fireworks 모듈을 가져옴

const Grade = ({ totalQuiz, correctAnswers }) => {
    const gradeMessage = quizStore.finishedMessageSelector(totalQuiz, correctAnswers);

    return (
        <div className="bg-white p-6 rounded-md shadow-md text-center mb-6">
            <p className="text-xl text-gray-700 mb-4">{gradeMessage}</p>
            <p className="text-sm text-gray-500">(총 문제: {totalQuiz}, 정답: {correctAnswers})</p>
        </div>
    );
};

export default function QuizComplete() {
    const history = useNavigate();
    const totalQuiz = quizStore.getQuizList().length;
    const correctAnswers = quizStore.getCorrectCount();
    const [showFireworks, setShowFireworks] = useState(true);

    useEffect(() => {
        if (showFireworks) {
            // Fireworks 초기화 및 시작
            fireworks.init("fireworks-target", {
                frequency: 200,
                launch_speed: 12,
                launch_particles_size: 0,
                explode_particles_resistance: 5,
                explode_particles_size: 5,
                width: window.innerWidth + "px",
                height: window.innerHeight + "px"
            });
            fireworks.start();

            // 10초 후에 불꽃놀이 멈춤
            setTimeout(() => {
                setShowFireworks(false);
            }, 10000);
        }

        // Cleanup function
        return () => fireworks.stop();
    }, [showFireworks]);

    return (
        <div className="bg-maple h-screen flex items-center justify-center">
            <div className="bg-white p-12 rounded-md shadow-md text-center relative">
                <h1 className="text-5xl font-bold mb-8">당신의 메창 등급은... </h1>
                <Grade totalQuiz={totalQuiz} correctAnswers={correctAnswers}/>
                <button
                    onClick={() => {
                        quizStore.resetCount();
                        history("/");
                    }}
                    className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange"
                >
                    Play Again
                </button>
                {showFireworks && (
                    <div id="fireworks-target" className="absolute top-0 pointer-events-none"></div>
                )}
            </div>
        </div>
    );
}
