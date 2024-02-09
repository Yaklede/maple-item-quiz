import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./quiz/component/Main";
import QuizPage from "./quiz/component/QuizPage";
import QuizComplete from "./quiz/component/QuizComplete";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="min-h-screen">
                <div
                    className="bg-gradient-to-br from-orange-400 to-orange-600 h-screen flex items-center justify-center">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/quiz" element={<QuizPage/>}/>
                        <Route path="/result" element={<QuizComplete/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
