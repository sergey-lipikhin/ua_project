import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../../../Base/ModalContainer";

const LesyaUa = () => {
    const questions = [
        {
            questionText: "Яким було справжнє ім’я Лесі Українки:",
            answerOptions: [
                { answerText: "Леся Українка", isCorrect: false },
                { answerText: "Лариса Косач", isCorrect: true },
                { answerText: "Ліна Костенко", isCorrect: false },
                { answerText: "Олена Пчілка", isCorrect: false },
            ],
        },
        {
            questionText: "Скількома мовами вільно володіла Леся Українка:",
            answerOptions: [
                { answerText: "3", isCorrect: false },
                { answerText: "6", isCorrect: false },
                { answerText: "9", isCorrect: true },
                { answerText: "12", isCorrect: false },
            ],
        },
        {
            questionText:
                "На якому музичному інструменті досконало грала Леся Українка і навіть планувала стати професійним музикантом:",
            answerOptions: [
                { answerText: "Фортепіано", isCorrect: true },
                { answerText: "Скрипка", isCorrect: false },
                { answerText: "Сопілка", isCorrect: false },
                { answerText: "Кобза", isCorrect: false },
            ],
        },
        {
            questionText: "Скільки країн за життя відвідала Леся Українка:",
            answerOptions: [
                { answerText: "7", isCorrect: true },
                { answerText: "8", isCorrect: false },
                { answerText: "9", isCorrect: false },
                { answerText: "10", isCorrect: false },
            ],
        },
        {
            questionText: "Які нові слова в нашу мову ввела Леся Українка:",
            answerOptions: [
                { answerText: "Напровесні", isCorrect: false },
                { answerText: "Промінь", isCorrect: true },
                { answerText: "Натхнення", isCorrect: false },
                { answerText: "Мистецтво", isCorrect: false },
            ],
        },
        {
            questionText:
                "Який астрономічний об’єкт названий на честь Лесі Українки:",
            answerOptions: [
                { answerText: "Планета", isCorrect: false },
                { answerText: "Зірка", isCorrect: false },
                { answerText: "Астероїд", isCorrect: true },
                { answerText: "Комета", isCorrect: false },
            ],
        },
        {
            questionText:
                "Який спеціальний заклад для підготовки в написанні свого першого драматичного твору «Голуба троянда» Леся Українка відвідувала і вивчала:",
            answerOptions: [
                { answerText: "Психіатрична клініка", isCorrect: true },
                { answerText: "Суд", isCorrect: false },
                { answerText: "Театр", isCorrect: false },
                { answerText: "Військовий штаб", isCorrect: false },
            ],
        },
        {
            questionText:
                "Про кого Леся Українка сказала такі слова: «Він завзятий дід – лазив і на піраміди, і в піраміди, і де його тільки не носило! Це в шістдесят літ і з ревматизмом»:",
            answerOptions: [
                { answerText: "Іван Франко", isCorrect: false },
                { answerText: "Дмитро Яворницький", isCorrect: true },
                { answerText: "Михайло Коцюбинський", isCorrect: false },
                { answerText: "Василь Стефаник", isCorrect: false },
            ],
        },
        {
            questionText:
                "Де відбулась зустріч Лесі Українки і Дмитра Яворницького:",
            answerOptions: [
                { answerText: "Німеччина", isCorrect: false },
                { answerText: "Дніпро", isCorrect: false },
                { answerText: "Єгипет", isCorrect: true },
                { answerText: "Відень", isCorrect: false },
            ],
        },
        {
            questionText:
                "Який подарунок Леся Україка зробила Д. Яворницькому, який і досі зберігається в Музеї Л. Українки у Києві:",
            answerOptions: [
                { answerText: "Чоботи", isCorrect: false },
                { answerText: "Тростину", isCorrect: true },
                { answerText: "Капелюх", isCorrect: false },
                { answerText: "Рушницю", isCorrect: false },
            ],
        },

        {
            questionText:
                "У якому віці організувала гурток молоді, який займався перекладом кращих творів світової літератури українською мовою:",
            answerOptions: [
                { answerText: "18 років", isCorrect: true },
                { answerText: "16 років", isCorrect: false },
                { answerText: "14 років", isCorrect: false },
                { answerText: "15 років", isCorrect: false },
            ],
        },
        {
            questionText:
                "Де разом із чоловіком записувала на фонограф спів кобзарів:",
            answerOptions: [
                { answerText: "у Криму", isCorrect: true },
                { answerText: "у Дніпрі", isCorrect: false },
                { answerText: "у Полтаві", isCorrect: false },
                { answerText: "у Львові", isCorrect: false },
            ],
        },
        {
            questionText:
                "У якому віці написала для молодшої сестри книжку 'Стародавня історія східних народів', котру в 1918 році було видано як підручник для національної школи:",
            answerOptions: [
                { answerText: "21 рік", isCorrect: false },
                { answerText: "18 років", isCorrect: false },
                { answerText: "20 років", isCorrect: false },
                { answerText: "19 років", isCorrect: true },
            ],
        },
        {
            questionText:
                "У 1903 році брала участь у відкритті в Полтаві пам’ятника:",
            answerOptions: [
                { answerText: "Т.Шевченку", isCorrect: false },
                { answerText: "І. Котляревському", isCorrect: true },
                { answerText: "М.Чурай", isCorrect: false },
            ],
        },
        {
            questionText:
                "Кого із дітей родини Косачів називали спільним ім’ям Мишелосіє, бо їх упродовж життя єднала дружба:",
            answerOptions: [
                { answerText: "брата Миколу  й Лесю", isCorrect: false },
                { answerText: "сестру Ольгу й Лесю", isCorrect: false },
                { answerText: "брата Михайла й Лесю", isCorrect: true },
                { answerText: "сестру Ізидору й Лесю", isCorrect: false },
            ],
        },
    ];

    const navigate = useNavigate();
    const { closeModal } = useModal();

    /* It's working a piece code */
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOption = (isCorrect) => {
        const end = (score) => {
            localStorage.setItem("score-quiz", JSON.stringify(score));
            if (score > 69) {
                navigate("/lesyaJackpot");
                // console.log(setScore)
            } else {
                navigate("/successLesya");
            }
        };

        if (currentQuestion <= 9 && isCorrect) {
            setScore((prev) => prev + 5);
        } else if (currentQuestion >= 10 && isCorrect) {
            setScore((prev) => prev + 10);
        }

        const nextQustion = currentQuestion + 1;

        if (nextQustion < questions.length) {
            setCurrentQuestion(nextQustion);
        } else {
            setShowScore(true);
            closeModal();
            end(score);
        }
        // console.log(score);
    };

    return (
        <div className="tests tests__lesya container-fluid">
            <div className="tests__container container-fluid">
                {showScore ? (
                    <div className="tests__score col-lg-12 col-md-12 col-12">
                        <h2>
                            Вірних відповідей {score} з {questions.length}
                        </h2>
                    </div>
                ) : (
                    <div className="tests__content col-lg-12 col-md-12 col-12">
                        <div className="tests__progress_bar">
                            <p className="quest__progress_number">
                                Питання {currentQuestion + 1} з{" "}
                                {questions.length}
                            </p>
                            <div className="progress__bar"></div>
                        </div>

                        <div className="test__questions">
                            <div className="question__block">
                                <h2>
                                    {questions[currentQuestion].questionText}
                                </h2>

                                <div className="answers__block container-fluid row">
                                    {questions[
                                        currentQuestion
                                    ].answerOptions.map((item) => (
                                        <div
                                            className="answer__block col-lg-4 col-12"
                                            key={item}
                                        >
                                            <div className="answer w-100">
                                                <a
                                                    className="answers"
                                                    onClick={() =>
                                                        handleAnswerOption(
                                                            item.isCorrect
                                                        )
                                                    }
                                                >
                                                    {item.answerText}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LesyaUa;
