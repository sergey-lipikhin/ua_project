import React, { useState } from 'react';
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useModal } from '../../../../../Base/ModalContainer';

const Tests = () => {

    const questions = [
        {
            questionText: 'Редагування потребує речення', 
            answerOptions: [
                {answerText: 'Вивчивши вірш, Оля пішла гуляти.', isCorrect: false},
                {answerText: 'Залишивши всі справи, мені захотілося спати.', isCorrect: true},
                {answerText: 'Підійшовши до дверей, я постукала.', isCorrect: false},
                {answerText: 'Не знаючи лісу, не варто ходити туди гуляти. ', isCorrect: false},
            ]
        },
        {
            questionText: 'Оберіть фразу, яку НЕ МОЖНА вживати в українській мові', 
            answerOptions: [
                {answerText: 'прийняти участь', isCorrect: true},
                {answerText: 'залізничний вокзал', isCorrect: false},
                {answerText: 'у різних галузях науки', isCorrect: false},
                {answerText: 'дійти висновку', isCorrect: false},
            ]
        },   
        {
            questionText: 'У реченні «_______ мама ____________ і повідомила дітям, що __________ вона вільна для перегляду мультфільму.» Замість пропусків потрібно вставити слова', 
            answerOptions: [
                {answerText: 'Опівдні, справилась із завданням, у даний час', isCorrect: false},
                {answerText: 'У полудень, впоралася із завданням, у даний час', isCorrect: false},
                {answerText: 'Опівдні, впоралася із завданням, тепер', isCorrect: true},
                {answerText: 'Опівдні, впоралася із завданням, у даний час', isCorrect: false},
            ]
        },
        {
            questionText: 'Помилку у вживанні слова допущено в рядку', 
            answerOptions: [
                {answerText: 'заказати букет квітів', isCorrect: true},
                {answerText: 'найсмачніша страва меню', isCorrect: false},
                {answerText: 'розмовляти українською', isCorrect: false},
                {answerText: 'брати участь у змаганнях', isCorrect: false},
            ]
        },
        {
            questionText: 'Правильно українською написано вираз', 
            answerOptions: [
                {answerText: 'меморіальний пам’ятник', isCorrect: false},
                {answerText: 'вільна вакансія', isCorrect: false},
                {answerText: 'місяць грудень', isCorrect: false},
                {answerText: 'чинний закон', isCorrect: true},
            ]
        },
        {
            questionText: 'Помилкою буде вжити у мовленні вираз', 
            answerOptions: [
                {answerText: 'наступного разу', isCorrect: false},
                {answerText: 'несподіваний сюрприз', isCorrect: true},
                {answerText: 'завдати шкоди', isCorrect: false},
                {answerText: 'здобути освіту', isCorrect: false},
            ]
        },   
        {
            questionText: 'Другий склад буде наголошеним у кожному слові рядка', 
            answerOptions: [
                {answerText: 'подруга, курятина, спина', isCorrect: false},
                {answerText: 'злегка, літопис, русло', isCorrect: false},
                {answerText: 'ознака, помовчати, гуртожиток', isCorrect: true},
                {answerText: 'горошина, новина, порядковий', isCorrect: false},
            ]
        },
        {
            questionText: 'Перший склад буде наголошеним у кожному слові рядка', 
            answerOptions: [
                {answerText: 'щипці, зозла, фольга', isCorrect: true},
                {answerText: 'живопис, ознака, цінник', isCorrect: false},
                {answerText: 'жалюзі, хутровий, віршовий', isCorrect: false},
                {answerText: 'адже, ненависть, ясний', isCorrect: false},
            ]
        },
        {
            questionText: 'На третій склад потрібно ставити наголос у кожному слові рядка', 
            answerOptions: [
                {answerText: 'камбала, здвоїти, приповідка', isCorrect: false},
                {answerText: 'кулінарія, пересидіти, кропива', isCorrect: true},
                {answerText: 'чорнозем, чорнослив, ненавидіти', isCorrect: false},
                {answerText: 'посидіти, добовий, міліметр', isCorrect: false},
            ]
        },
        {
            questionText: 'Помилку допущено у виразі', 
            answerOptions: [
                {answerText: 'ефективні ліки', isCorrect: false},
                {answerText: 'людяний майдан', isCorrect: true},
                {answerText: 'ефектне шоу', isCorrect: false},
                {answerText: 'корисна страва', isCorrect: false},
            ]
        },

        {
            questionText: 'Не властивий для української мови вираз', 
            answerOptions: [
                {answerText: 'шкідлива навичка', isCorrect: true},
                {answerText: 'рухова навичка', isCorrect: false},
                {answerText: 'практична навичка', isCorrect: false},
                {answerText: 'граматична навичка', isCorrect: false},
            ]
        },   
        {
            questionText: 'Підсумки в українській мові можна', 
            answerOptions: [
                {answerText: 'підводити', isCorrect: false},
                {answerText: 'підбивати', isCorrect: true},
                {answerText: 'підсумовувати', isCorrect: false},
            ]
        },
        {
            questionText: 'В українській мові із правил бувають', 
            answerOptions: [
                {answerText: 'винятки', isCorrect: true},
                {answerText: 'виключення', isCorrect: false},
                {answerText: 'вийнятки', isCorrect: false},
            ]
        },
        {
            questionText: 'На різноманітні шкільні виставки діти приносять', 
            answerOptions: [
                {answerText: 'підробки', isCorrect: false},
                {answerText: 'поробки', isCorrect: true},
                {answerText: 'виробки', isCorrect: false},
            ]
        },
        {
            questionText: 'В будь-яку науку або справу можна зробити', 
            answerOptions: [
                {answerText: 'вклад', isCorrect: false},
                {answerText: 'внесок', isCorrect: true},
                {answerText: 'вкладення', isCorrect: false},
            ]
        },   
        {
            questionText: 'В українській мові буде правильним двері ______, книгу _______,науковий закон _______, злочин ________. Правильний варіант заповнення пропусків наведено у рядку', 
            answerOptions: [
                {answerText: 'відчинити, відкрити, відкрити, розкрити', isCorrect: false},
                {answerText: 'відчинити, розгорнути, розкрити, викрити', isCorrect: false},
                {answerText: 'відчинити, розгорнути, відкрити, розкрити', isCorrect: true},
                {answerText: 'відкрити, розкрити, відкрити, розкрити', isCorrect: false},
            ]
        },
        {
            questionText: 'Щоб робота була бездоганною, її треба виконати', 
            answerOptions: [
                {answerText: 'по всім правилам', isCorrect: false},
                {answerText: 'за всіма правилами', isCorrect: true},
            ]
        },
        {
            questionText: 'У реченні «________ нам повідомили, що __________ наша компанія _________.»  Правильним буде варіант заповнення пропусків:', 
            answerOptions: [
                {answerText: 'Під кінець дня, через непорозуміння, понесла втрати', isCorrect: false},
                {answerText: 'Наприкінці дня, через непорозуміння, зазнала збитків', isCorrect: true},
                {answerText: 'Під кінець дня, по непорозумінню, понесла втрати', isCorrect: false},
                {answerText: 'Наприкінці дня, по непорозумінню, зазнала збитків', isCorrect: false},
                {answerText: 'Наприкінці дня, через непорозуміння, понесла втрати', isCorrect: false},
            ]
        },
        {
            questionText: 'На питання «Котра година?» правильною буде відповідь', 
            answerOptions: [
                {answerText: 'Сім годин сорок п’ять хвилин', isCorrect: false},
                {answerText: 'Сьома година сорок п’ята хвилина', isCorrect: false},
                {answerText: 'Без п’ятнадцяти вісім', isCorrect: false},
                {answerText: 'Сьома година сорок п’ять хвилин', isCorrect: true},
            ]
        },

        {
            questionText: 'В магазині гучномовець оголошує про акції. Знайдіть правильний варіант повідомлення', 
            answerOptions: [
                {answerText: 'Знижки до п’ятидесяти відсотків', isCorrect: false},
                {answerText: 'Скидки до п’ятдесяти відсотків', isCorrect: false},
                {answerText: 'Скидки до п’ятидесяти відсотків', isCorrect: false},
                {answerText: 'Знижки до п’ятдесяти відсотків', isCorrect: true},
                {answerText: 'Знижки до п’ятдесяти процентів', isCorrect: false},
            ]
        },   
        {
            questionText: 'На запитання в задачі можна дати відповідь', 
            answerOptions: [
                {answerText: 'вірну', isCorrect: false},
                {answerText: 'правильну', isCorrect: true},
            ]
        },
        {
            questionText: 'За правилами української мови, можна застосувати', 
            answerOptions: [
                {answerText: 'слідуюча зупинка', isCorrect: false},
                {answerText: 'розповсюджена помилка', isCorrect: true},
                {answerText: 'діюча особа', isCorrect: false},
                {answerText: 'бажаюча взяти участь у змаганнях спортсменка', isCorrect: false},
            ]
        },
        {
            questionText: 'Відповідно до правил української мови, ви можете', 
            answerOptions: [
                {answerText: 'називати по імені', isCorrect: false},
                {answerText: 'отримати освіту', isCorrect: false},
                {answerText: 'ліквідувати недоліки', isCorrect: false},
                {answerText: 'припуститися помилки', isCorrect: true},
                {answerText: 'переписуватися із друзями', isCorrect: false},
            ]
        },
        {
            questionText: 'Допущено помилку у рядку', 
            answerOptions: [
                {answerText: 'звертатися по допомогу', isCorrect: false},
                {answerText: 'на зборах постановили', isCorrect: true},
                {answerText: 'нічого не вдієш', isCorrect: false},
                {answerText: 'досягти мети', isCorrect: false},
            ]
        },
        {
            questionText: 'Яке речення неприпустимо вживати в українській мові без редагування', 
            answerOptions: [
                {answerText: 'Повернувшись додому, я зробила собі чай.', isCorrect: false},
                {answerText: 'Відмовившись від кави, Олена попросила води.', isCorrect: false},
                {answerText: 'Перетнувши кордон, ми зрозуміли, що відпочинок закінчився.', isCorrect: false},
                {answerText: 'Побачивши сніг, нам по-справжньому запахло зимою.', isCorrect: true},
            ]
        },   
        {
            questionText: 'Ви не помилитеся, якщо скажете', 
            answerOptions: [
                {answerText: 'Дізнайся, будь ласка, цю інформацію по своїм каналам.', isCorrect: false},
                {answerText: 'На прохання батьків, діти організували концерт.', isCorrect: true},
                {answerText: 'Потрібно берегти навколишнє середовище. ', isCorrect: false},
                {answerText: 'До останнього часу ми не могли виконувати такі замовлення.', isCorrect: false},
            ]
        },
        {
            questionText: 'Директор попросив вас повідомити співробітникам, щоб вони написали заяви на відпустки. Ваше повідомлення має виглядати так:', 
            answerOptions: [
                {answerText: 'Давайте напишемо заяви на відпустки. ', isCorrect: false},
                {answerText: 'Напишіть заяви на відпустки.', isCorrect: true},
            ]
        },
        {
            questionText: 'Дуже добре, якщо вам пропонують', 
            answerOptions: [
                {answerText: 'найвигідніші умови', isCorrect: true},
                {answerText: 'найбільш вигідніші умови', isCorrect: false},
                {answerText: 'самі вигідні умови', isCorrect: false},
            ]
        },
        {
            questionText: 'Якщо ви зробили щось не так, ви можете вжити фразу', 
            answerOptions: [
                {answerText: 'вибачте мене!', isCorrect: false},
                {answerText: 'вибачте мені!', isCorrect: true},
                {answerText: 'я вибачаюсь!', isCorrect: false},
            ]
        },
        {
            questionText: 'Знайдіть речення, в якому потрібно виправити помилку', 
            answerOptions: [
                {answerText: 'Будь ласка, перебуваючи в школі, не смітіть.', isCorrect: false},
                {answerText: 'Просимо вас не смітити в школі.', isCorrect: false},
                {answerText: 'Перебуваючи в школі, просимо вас не смітити.', isCorrect: true},
                {answerText: 'Не смітіть, перебуваючи в школі.', isCorrect: false},
            ]
        },
    ]

    const navigate = useNavigate();
    const { closeModal } = useModal();

    /* It's working a piece code */
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const end = async (score) => {
        localStorage.setItem('score-quiz', JSON.stringify(score));
        navigate('/success')
        // if (score > 25) {
        //     navigate('/success')
        //     // console.log(setScore)
        // } else {
        //     navigate('/oops')
        // }
    }

    const handleAnswerOption = (isCorrect) => {
        
        // const end = (score) => {
        //     if (score < 25) {
        //         navigate('/oops')
        //     } else {
        //         navigate('/success')
        //     }
        // }

        if(isCorrect) {
            setScore(score + 1)
        }

        const nextQustion = currentQuestion + 1
        
        if(nextQustion < questions.length) {
            setCurrentQuestion(nextQustion)
        } else {
            setShowScore(true)
            closeModal();
            end(score)
        }
        
        // currentQuestion++
        // setTimeout(nextQustion, 10000);      
    }

    return (
        <div className='tests container-fluid'>
            <div className='tests__container container-fluid'>
                {
                    showScore
                        ? <div className="tests__score col-lg-12 col-md-12 col-12">
                            <h2>Вірних відповідей {score} з {questions.length}</h2> 
                          </div>
                        
                        :  <div className="tests__content col-lg-12 col-md-12 col-12">
                                <div className="tests__progress_bar">
                                    <p className='quest__progress_number'>Питання {currentQuestion + 1} з {questions.length}</p>
                                    <div className='progress__bar'></div>
                                </div>
                    
                                <div className="test__questions">
                                    <div className="question__block">
                                        <h2>{questions[currentQuestion].questionText}</h2>
                                    
                                        <div className="answers__block container-fluid row">
                                            
                                            {questions[currentQuestion].answerOptions.map(item => (
                            
                                                <div className='answer__block col-lg-4 col-12'>
                                                    <div className='answer w-100'>
                                                        <a className='answers' onClick={() => handleAnswerOption(item.isCorrect)}>{item.answerText}</a>
                                                    </div>
                                                </div>
                                                
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                }
            </div>
        </div>
    );
};

export default Tests;