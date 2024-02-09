import React, { useState } from 'react';
import Swal from 'sweetalert2';
import quizStore from "../store/QuizStore";

function QuizComponent({index, quiz, onNext}) {
    const [answer, setAnswer] = useState('');

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value);
    };

    const handleSubmit = async () => {
        // answer를 사용하여 정답 검사 또는 다른 로직 수행
        if (answer === quiz.answer) {
            console.log('Correct!');
            await Swal.fire({
                title: '정답입니다!',
                icon: 'success',
                showCancelButton: false,
                confirmButtonText: '확인'
            });
            quizStore.increaseCount();
        } else {
            console.log('Incorrect!');
            await Swal.fire({
                title: '틀렸습니다.',
                text: '정답은 ' + quiz.answer + '입니다.',
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: '확인'
            });
        }
        console.log(`Answer: ${answer}`);
        onNext();
    };

    return (
        <div className="bg-maple h-screen flex items-center justify-center">
            <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-lg">
                <h1 className="text-5xl font-bold mb-8 text-orange-600">Quiz {index}</h1>
                <img src={quiz.imagePath} alt="이미지_설명" className="mx-auto mb-8 max-w-full h-auto"/>
                <div className="mb-6">
                    <label htmlFor="quizAnswer" className="text-lg font-semibold text-gray-700 mb-2 block">
                        정답을 적어주세요 (띄어쓰기 없이)
                    </label>
                    <input
                        type="text"
                        id="quizAnswer"
                        value={answer}
                        onChange={handleAnswerChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default QuizComponent;
