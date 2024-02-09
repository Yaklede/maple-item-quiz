import {useNavigate} from "react-router-dom";
import React from "react";

function MainPage() {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="bg-maple h-screen flex items-center justify-center">
            <div className="bg-white p-12 rounded-md shadow-md text-center">
                <img src={require('../image/mapleLogo.png')} alt="MapleStory Logo" className="mx-auto mb-8" />
                <h1 className="text-5xl font-bold mb-8 text-orange-600">메이플 아이템 이름 맞추기 퀴즈</h1>
                <p className="text-lg text-gray-700 mb-6">당신의 메창 인생을 테스트 해보세요!</p>
                <button
                    onClick={handleStartQuiz}
                    className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-orange"
                >
                    퀴즈 시작하기
                </button>
            </div>
        </div>
    );

}

export default MainPage;