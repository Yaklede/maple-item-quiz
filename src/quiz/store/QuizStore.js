import {makeAutoObservable} from "mobx";

class QuizStore {
    quizList
    correctCount

    constructor() {
        this.quizList = []
        this.correctCount = 0;
        this.init()
        makeAutoObservable(this)
    }

    getQuizList() {
        return this.quizList;
    }

    increaseCount = () => {
        this.correctCount++;
    }
    getCorrectCount = () => {
        return this.correctCount;
    }

    resetCount = () => {
        this.correctCount = 0;
    }

    init() {
        const quiz1 = new Quiz('노란색우산', require('../image/노란색우산.png'))
        const quiz2 = new Quiz('베이지우산', require('../image/베이지우산.png'))
        const quiz3 = new Quiz('막대사탕', require('../image/막대사탕.png'))
        const quiz4 = new Quiz('붉은채찍', require('../image/붉은채찍.png'))
        const quiz5 = new Quiz('화염의카타나', require('../image/화염의카타나.png'))
        const quiz6 = new Quiz('트럼펫', require('../image/트럼펫.png'))
        const quiz7 = new Quiz('붓', require('../image/붓.png'))
        const quiz8 = new Quiz('광선채찍', require('../image/광선채찍.png'))
        const quiz9 = new Quiz('칠성검', require('../image/칠성검.png'))
        const quiz10 = new Quiz('도깨비방망이', require('../image/도깨비방망이.png'))

        const quiz11 = new Quiz('우드완드', require('../image/우드완드.png'))
        const quiz12 = new Quiz('아이스완드', require('../image/아이스완드.png'))
        const quiz13 = new Quiz('워보우', require('../image/워보우.png'))
        const quiz14 = new Quiz('사냥꾼의활', require('../image/사냥꾼의활.png'))
        const quiz15 = new Quiz('메이플보우', require('../image/메이플보우.png'))
        const quiz16 = new Quiz('발터2000', require('../image/발터2000.png'))
        const quiz17 = new Quiz('메이플헌터스', require('../image/메이플헌터스.png'))
        const quiz18 = new Quiz('마법파괴활', require('../image/마법파괴활.png'))
        const quiz19 = new Quiz('다크니스록', require('../image/다크니스록.png'))
        const quiz20 = new Quiz('드래곤샤인보우', require('../image/드래곤샤인보우.png'))

        const quiz21 = new Quiz('도루코대거', require('../image/도루코대거.png'))
        const quiz22 = new Quiz('크리스마스트리', require('../image/크리스마스트리.png'))
        const quiz23 = new Quiz('태극부채', require('../image/태극부채.png'))
        const quiz24 = new Quiz('페트병', require('../image/페트병.png'))
        const quiz25 = new Quiz('스네이크', require('../image/스네이크.png'))
        const quiz26 = new Quiz('게파트', require('../image/게파트.png'))
        const quiz27 = new Quiz('스틸가즈', require('../image/스틸가즈.png'))
        const quiz28 = new Quiz('미스릴가즈', require('../image/미스릴가즈.png'))
        const quiz29 = new Quiz('드래곤퍼플슬레브', require('../image/드래곤퍼플슬레브.png'))
        const quiz30 = new Quiz('브론즈기간틱', require('../image/브론즈기간틱.png'))


        this.quizList.push(quiz1)
        this.quizList.push(quiz2)
        this.quizList.push(quiz3)
        this.quizList.push(quiz4)
        this.quizList.push(quiz5)
        this.quizList.push(quiz6)
        this.quizList.push(quiz7)
        this.quizList.push(quiz8)
        this.quizList.push(quiz9)
        this.quizList.push(quiz10)
        this.quizList.push(quiz11)
        this.quizList.push(quiz12)
        this.quizList.push(quiz13)
        this.quizList.push(quiz14)
        this.quizList.push(quiz15)
        this.quizList.push(quiz16)
        this.quizList.push(quiz17)
        this.quizList.push(quiz18)
        this.quizList.push(quiz19)
        this.quizList.push(quiz20)
        this.quizList.push(quiz21)
        this.quizList.push(quiz22)
        this.quizList.push(quiz23)
        this.quizList.push(quiz24)
        this.quizList.push(quiz25)
        this.quizList.push(quiz26)
        this.quizList.push(quiz27)
        this.quizList.push(quiz28)
        this.quizList.push(quiz29)
        this.quizList.push(quiz30)

        this.quizList = this.quizList.sort(() => Math.random() - 0.5)
    }

    finishedMessageSelector = (totalCount, correctCount) => {
        const percentage = (correctCount / totalCount) * 100;

        if (percentage >= 80) {
            return "1등급: 이제부터 현생을 사는건 어떨까요?";
        } else if (percentage >= 60) {
            return "2등급: 아직까지 현생이랑 메생이 구분이 되시는군요!";
        } else if (percentage >= 40) {
            return "3등급: 메이플을 찍먹 해보셨군요";
        } else if (percentage >= 20) {
            return "4등급: 게임을 하긴 했네요..";
        } else {
            return "5등급: 메이플이란 게임을 아시나요?";
        }
    }
}

class Quiz {
    answer
    imagePath

    constructor(answer, imagePath) {
        this.answer = answer
        this.imagePath = imagePath
    }
}

const quizStore = new QuizStore();
export default quizStore;