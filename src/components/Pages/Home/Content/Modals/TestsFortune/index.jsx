import { observer } from 'mobx-react-lite';
import React, { useContext, useState, useEffect } from 'react';
import { useCallback } from 'react';
import { Context } from '../../../../../../';
import { useModal } from '../../../../../Base/ModalContainer';
import { fetchQuestion } from '../../../../../../http/questionAPI';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';



const TestsFortune = observer(({category, roll}) => {
    const texts = [
        {
            name: "Чудово! Ви на правильному шляху до перемоги! Залишилося зробити ще 5 кроків. Крутіть колесо ще раз та відповідайте на наступні питання."
        },
        {
            name: "З кожним правильним питанням, Ви збільшуєте свій шанс отримати супер-приз! Залишилося відповісти на питання з 4-х рубрик. Крутіть колесо ще раз та відповідайте на наступні питання."
        },
        {
            name: "Ви все ближче до перемоги, залишилося ще трохи і Ви дізнаєтесь, якою буде Ваша винагорода. Залишилося відповісти ще на 3 рубрики. Крутіть колесо ще раз та відповідайте на наступні питання."
        },
        {
            name: "Чудова робота! Кожна правильна відповідь збільшує суму Вашого сертифікату.  Залишилося відповісти на питання з 2-х рубрик. Крутіть колесо ще раз та відповідайте на наступні питання."
        }, 
        {
            name: "Залишився останній ривок і Ви досягли цілі! Крутіть колесо ще раз та відповідайте на наступні питання"
        } 
    ]

    const questions = [
        {
        key: 'Література',
        data: [
            {
                questionText: 'Відомий український письменник та перекладач, яскравий представник «розстріляного відродження», автор роману «Місто» - Валер’ян Підмогильний народився у селищі:',
                answerOptions: [
                    { answerText: 'Чаплі', isCorrect: true },
                    { answerText: 'Лелеки', isCorrect: false },
                    { answerText: 'Ластівки', isCorrect: false },
                    { answerText: 'Зозулі', isCorrect: false }
                ]
            },
            {
                questionText: 'Про що розповідає твір Адріана Кащенка «Над Кодацьким порогом»?',
                answerOptions: [
                    { answerText: 'Про побудову ДніпроГЕС', isCorrect: false },
                    { answerText: 'Про лоцманів дніпрових порогів', isCorrect: false },
                    { answerText: 'Про взяття фортеці Кодак Іваном Сулимою', isCorrect: true },
                    { answerText: 'Про рибалок на Дніпрі', isCorrect: false },
                ]
            },
            {
                questionText: 'Перший підручник українознавства, виданий в Катеринославі у 1914 році називався:',
                answerOptions: [
                    { answerText: 'Стежка додому', isCorrect: true },
                    { answerText: 'Дорога навпростець', isCorrect: false },
                    { answerText: 'Кружний шлях', isCorrect: false },
                    { answerText: 'Тещин язик', isCorrect: false }
                ]
            },
            {
                questionText: 'Ким в нашому місті працювала сестра Лесі Українки - Ольга Косач-Кривинюк?',
                answerOptions: [
                    { answerText: 'Акушеркою', isCorrect: false },
                    { answerText: 'Патронажним лікарем для дітей-сиріт', isCorrect: true },
                    { answerText: 'Патологоанатомом', isCorrect: false },
                    { answerText: 'Санітарним лікарем', isCorrect: false },
                    { answerText: 'Земським лікарем', isCorrect: false },
                    { answerText: 'Фармацевтом', isCorrect: false }
                ]
            },
            {
                questionText: 'Як називався роман Олеся Гончара, в якому критикувалась ідея знищення храму на Дніпропетровщині?',
                answerOptions: [
                    { answerText: 'Собор', isCorrect: true },
                    { answerText: 'Костьол', isCorrect: false },
                    { answerText: 'Кірха', isCorrect: false },
                    { answerText: 'Каплиця', isCorrect: false },
                    { answerText: 'Церква', isCorrect: false },
                    { answerText: 'Храм', isCorrect: false }
                ]
            },
            {
                questionText: 'Ілюстратор дешевих україномовних книжок, які виходили в Катеринославі наприкінці ХІХ – на початку ХХ ст.',
                answerOptions: [
                    { answerText: 'Сергій Васильківський', isCorrect: false },
                    { answerText: 'Микола Погрібняк', isCorrect: true },
                    { answerText: 'Григорій Нарбут', isCorrect: false },
                    { answerText: 'Вадим Сідур', isCorrect: false },
                    { answerText: 'Максим Паленко', isCorrect: false }
                ]
            }
        ]
    }, {
        key: 'Історики',
        data: [
            {
                questionText: 'Видатний козакознавець, з якого написано писаря на картині І. Рєпіна «Запорожці пишуть листа турецькому султанові»',
                answerOptions: [
                    { answerText: 'Михайло Грушевський', isCorrect: false },
                    { answerText: 'Андрій Фабр', isCorrect: false },
                    { answerText: 'Маріан Дубецький', isCorrect: false },
                    { answerText: 'Дмитро Яворницький', isCorrect: true },
                ]
            },
            {
                questionText: 'Хто в нашому місті застував перший приватний археологічний музей?',
                answerOptions: [
                    { answerText: 'Василь Біднов', isCorrect: false },
                    { answerText: 'Дмитро Яворницький', isCorrect: false },
                    { answerText: 'Олександр Поль', isCorrect: true },
                    { answerText: 'Дмитро Дорошенко', isCorrect: false },
                ]
            },
            {
                questionText: 'Хто заснував музей Яворницького?',
                answerOptions: [
                    { answerText: 'Дмитро Яворницький', isCorrect: false },
                    { answerText: 'Олександр Поль', isCorrect: false },
                    { answerText: 'Андрій Фабр', isCorrect: true },
                    { answerText: 'Гавриїл Розанов', isCorrect: false },
                ]
            },

            {

                questionText: 'Козак, автор спогадів, в яких описуються козацькі міста і поселення на території нашого міста, які передували Катеринославу?',
                answerOptions: [
                    { answerText: 'Лазар Глоба', isCorrect: false },
                    { answerText: 'Яків Таран', isCorrect: false },
                    { answerText: 'Семен Бардадим', isCorrect: false },
                    { answerText: 'Микита Корж', isCorrect: true },
                    { answerText: 'Петро Калнишевський', isCorrect: false },
                ]
            },

            {
                questionText: 'Історик, який викладав у нашому місті, а згодом став міністром закордонних справ за часів гетьмана Павла Скоропадського?',
                answerOptions: [
                    { answerText: 'Михайло Максимович', isCorrect: false },
                    { answerText: 'Михайло Грушевський', isCorrect: false },
                    { answerText: 'Антін Синявський', isCorrect: false },
                    { answerText: 'Дмитро Дорошенко', isCorrect: true },
                    { answerText: 'Микола Аркас', isCorrect: false },
                ]
            },

            {
                questionText: 'Один з перших істориків міста Дніпро, автор розвідки про козацький Самарський монастир',
                answerOptions: [
                    { answerText: 'Феодосій Макаревський', isCorrect: false },
                    { answerText: 'Гавриїл Розанов', isCorrect: true },
                    { answerText: 'Олексій Дородніцин', isCorrect: false },
                    { answerText: 'Агапіт Вишневський', isCorrect: false },
                    { answerText: 'Августин Гуляницький', isCorrect: false },
                ]
            }
        ]
    }, {
        key: 'Революція',
        data: [
            {
                questionText: 'Отаман Вільного козацтва Катеринослава, який звільняв місто від більшовиків у 1918 році',
                answerOptions: [
                    {answerText: 'Ісаак Мазепа', isCorrect: false},
                    {answerText: 'Михайло Омелянович-Павленко', isCorrect: false},
                    {answerText: 'Гаврило Горобець', isCorrect: true},
                    {answerText: 'Петро Єфрємов', isCorrect: false},
                ]
            },
            {
                questionText: 'Скільки повних місяців гетьман Павло Скоропадський був при владі?',
                answerOptions: [
                    {answerText: '2', isCorrect: false},
                    {answerText: '7', isCorrect: true},
                    {answerText: '13', isCorrect: false},
                    {answerText: '5', isCorrect: false},
                ]
            },
            {
                questionText: 'Директор Першої української державної гімназії в Катеринославі у 1917–1918 ',
                answerOptions: [
                    {answerText: 'Яків Якуша', isCorrect: true},
                    {answerText: 'Іван Труба', isCorrect: false},
                    {answerText: 'Петро Єфрємов', isCorrect: false},
                    {answerText: 'Василь Біднов', isCorrect: false},
                ]
            },
            {
                questionText: 'Засновник Вільного козацтва у Катеринославі',
                answerOptions: [
                    {answerText: 'Нестор Махно', isCorrect: false},
                    {answerText: 'Павло Скоропадський', isCorrect: false},
                    {answerText: 'Роман Самокишин', isCorrect: false},
                    {answerText: 'Михайло Омелянович-Павленко', isCorrect: true},
                ]
            },
            {
                questionText: 'Отаман Юхим Божко вірив, що',
                answerOptions: [
                    {answerText: 'Козаком треба бути перш за все за духом, а не за зовнішністю', isCorrect: false},
                    {answerText: 'Зовнішні атрибути – оселедець, шлик і шаровари дають змогу відчути себе лицарем і надихають на боротьбу', isCorrect: true},
                    {answerText: 'Україна має бути модерною нацією', isCorrect: false},
                    {answerText: 'Слід орієнтуватися на німецьку уніформу як найбільш якісну', isCorrect: false},
                    {answerText: 'Військова форма, перш за все, має бути зручною й практичною', isCorrect: false},
                ]
            },
            {
                questionText: 'Скільки разів під час революції в місті встановлювалась українська влада?',
                answerOptions: [
                    {answerText: '1', isCorrect: false},
                    {answerText: '5', isCorrect: false},
                    {answerText: '2', isCorrect: false},
                    {answerText: '3', isCorrect: true},
                ]
            }
        ]
    }, {
        key: 'Козацтво',
        data: [
            {
                questionText: 'В якому історичному місті була розташована найдавніша (інституційно) церква сучасного м. Дніпро ',
                answerOptions: [
                    {answerText: 'Кам’янка Лівобережна', isCorrect: false},
                    {answerText: 'Новий Кодак', isCorrect: true},
                    {answerText: 'Половиця', isCorrect: false},
                    {answerText: 'Катеринослав', isCorrect: false},
                ]
            },

            {
                questionText: 'Скільки фортець у XVII ст. було на території та околицях сучасного міста',
                answerOptions: [
                    {answerText: '2', isCorrect: false},
                    {answerText: '3', isCorrect: true},
                    {answerText: '5', isCorrect: false},
                    {answerText: '7', isCorrect: false},
                ]
            },

            {
                questionText: 'Чому Лоцманська Кам’янка має таку назву?',
                answerOptions: [
                    {answerText: 'Бо там було багато каміння', isCorrect: false},
                    {answerText: 'Там був шинок «Старий Лоцман»', isCorrect: false},
                    {answerText: 'Місце проживання перевізників через дніпрові пороги', isCorrect: true},
                    {answerText: 'Тут була кам’яна фортеця лоцманів', isCorrect: false},
                ]
            },

            {
                questionText: 'Яку фортецю в межах сучасного міста Дніпро побудував гетьман Іван Мазепа у 1688 р.?',
                answerOptions: [
                    {answerText: 'Кодацьку', isCorrect: false},
                    {answerText: 'Новобогородицьку', isCorrect: true},
                    {answerText: 'Новосамарську', isCorrect: false},
                    {answerText: 'Усть-Кільченську', isCorrect: false},
                ]
            },

            {
                questionText: 'Чому Кодацький міст має таку назву?',
                answerOptions: [
                    {answerText: 'Тут був Кодацький поріг', isCorrect: false},
                    {answerText: 'Тут наприкінці XIX ст. була зроблена перша світлина на кіноплівку Kodak', isCorrect: true},
                    {answerText: 'Тут у XVII-XVIII ст. діяв перевіз через річку до фортеці Новий Кодак', isCorrect: false},
                    {answerText: 'Він з’єднував Старий Кодак з лівим берегом', isCorrect: false},
                    {answerText: 'Через співзвучність тюркських слів козак і кодак', isCorrect: false},
                ]
            },

            {
                questionText: 'Що таке паланка?',
                answerOptions: [
                    {answerText: 'Вирубаний отвір у льодові', isCorrect: false},
                    {answerText: 'Козацька страва під час військового походу', isCorrect: false},
                    {answerText: 'Адміністративна одиниця Війська Запорізького Низового', isCorrect: true},
                    {answerText: 'Ремінь для носіння козацької зброї', isCorrect: false},
                    {answerText: 'Українське народне і церковне свято', isCorrect: false},
                ]
            }
        ]
    }, {
        key: 'Архітектура',
        data: [
            {
                questionText: 'Що у другій половині XVIII ст. було розташовано на місці сучасного парку Шевченка',
                answerOptions: [
                    {answerText: 'Одна з Запорізьких Січей', isCorrect: false},
                    {answerText: 'Синагога', isCorrect: false},
                    {answerText: 'Амфітеатр', isCorrect: false},
                    {answerText: 'Зимівник Лазаря Глоби', isCorrect: true},
                ]
            },
            {
                questionText: 'Скільки в місті мостів через ріку Дніпро?',
                answerOptions: [
                    {answerText: '3', isCorrect: false},
                    {answerText: '5', isCorrect: true},
                    {answerText: '6', isCorrect: false},
                    {answerText: '7', isCorrect: false},
                ]
            },
            {
                questionText: 'Що попередньо було розташовано на місці сучасного Севастопольського парку?',
                answerOptions: [
                    {answerText: 'Контрактова площа', isCorrect: false},
                    {answerText: 'Водойма', isCorrect: false},
                    {answerText: 'Кладовище і церква', isCorrect: true},
                    {answerText: 'Лісовий масив', isCorrect: false},
                    {answerText: 'Курган', isCorrect: false},
                    {answerText: 'Приватна забудова', isCorrect: false},
                ]
            },

            {
                questionText: 'В якому році з’явився перший трамвай у місті',
                answerOptions: [
                    {answerText: '1888', isCorrect: false},
                    {answerText: '1897', isCorrect: true},
                    {answerText: '1910', isCorrect: false},
                    {answerText: '1926', isCorrect: false},

                ]
            },
            {
                questionText: 'Яка річка нині схована у колекторі міста?',
                answerOptions: [
                    {answerText: 'Жабокряч', isCorrect: true},
                    {answerText: 'Кільчень', isCorrect: false},
                    {answerText: 'Оріль', isCorrect: false},
                    {answerText: 'Самара', isCorrect: false},
                    {answerText: 'Славутич', isCorrect: false},
                    {answerText: 'Суха Сура', isCorrect: false},
                ]
            },
            {
                questionText: 'Скільки у Дніпрі діючих станцій метро',
                answerOptions: [
                    {answerText: '4', isCorrect: false},
                    {answerText: '6', isCorrect: true},
                    {answerText: '9', isCorrect: false},
                    {answerText: '12', isCorrect: false},
                ]
            },
        ]
    }, {
        key: 'Громадські діячі',
        data: [
            {
                questionText: 'Відкривач залізної руди на Криворіжжі. Людина, яка перетворила наше місто на центр металургійної промисловості. Лобіював прокладання залізниці через Катеринослав (суч. Дніпро), створення «старого» (Амурського) залізничного мосту.',
                answerOptions: [
                    {answerText: 'Дмитро Яворницький', isCorrect: false},
                    {answerText: 'Олександр Поль', isCorrect: true},
                    {answerText: 'Іван Акінфієв', isCorrect: false},
                    {answerText: 'Лев Писаржевський', isCorrect: false},
                ]
            },
            {
                questionText: '«Нещасливий» номер найбільш відомої конспіративної квартири ОУНівця – Василя Кука у Дніпропетровську',
                answerOptions: [
                    {answerText: '4', isCorrect: false},
                    {answerText: '13', isCorrect: true},
                    {answerText: '9', isCorrect: false},
                    {answerText: '12', isCorrect: false},
                ]
            },
            {
                questionText: 'Видатний освітянин, українізатор освіти на Катеринославщині',
                answerOptions: [
                    {answerText: 'Акім Ковалевський', isCorrect: false},
                    {answerText: 'Яків Грахов', isCorrect: false},
                    {answerText: 'Іван Труба', isCorrect: true},
                    {answerText: 'Іван Бебер', isCorrect: false},
                ]
            },
            {
                questionText: 'Перша директорка першої жіночої гімназії у Катеринославі',
                answerOptions: [
                    {answerText: 'Ольга Косач-Кривинюк', isCorrect: false},
                    {answerText: 'Олександра Риндовська', isCorrect: true},
                    {answerText: 'Катерина Езау', isCorrect: false},
                    {answerText: 'Надія Алєксєєнко', isCorrect: false},
                ]
            },
            {
                questionText: 'Дисидент, правозахисник, поет, натхненник «Листа творчої молоді м. Дніпропетровська» та один з засновників обласного осередку Народного руху України. Член Гельсінської спілки.',
                answerOptions: [
                    {answerText: 'Павло Загребельний', isCorrect: false},
                    {answerText: 'Василь Макух', isCorrect: false},
                    {answerText: 'Віктор Савченко', isCorrect: false},
                    {answerText: 'Іван Сокульський', isCorrect: true},
                ]
            },
            {
                questionText: 'Засновниця дитячої лікарні ім. М.Ф. Руднєва',
                answerOptions: [
                    {answerText: 'Наталія Руднєва', isCorrect: false},
                    {answerText: 'Надія Алєксєєнко', isCorrect: true},
                    {answerText: 'Олександра Риндовська', isCorrect: false},
                    {answerText: 'Софія Єгорова', isCorrect: false},
                ]
            }
        ]
    }];

    useEffect(() =>{
        const data = localStorage.getItem('historyRolls')
       setLastRoll(questions[data.replace('[', '').replace(']', '').split(',').pop()].key)
    })

    const { data } = useMemo(() => questions.filter((q) => q.key === category)[0], [category]);

    const navigate = useNavigate();
    const { closeModal } = useModal();

    /* It's working a piece code */
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [lastRoll, setLastRoll] = useState()

    function rollNext(){
        closeModal()
        roll()
    }

    const end = () => {
        if (Number(localStorage.getItem('historyRolls').replace('[', '').replace(']', '').split(',').length) === 6) {
           navigate('/successfortune')
        }
    }

    const handleAnswerOption = (isCorrect) => {

        if (isCorrect) {
             setScore(score + 1)
             localStorage.setItem('score', JSON.stringify(JSON.parse(localStorage.getItem('score')) + 1));
        }


        const nextQustion = currentQuestion + 1

        if (nextQustion < data.length) {
            setCurrentQuestion(nextQustion)
        } else {
            if (Number(localStorage.getItem('historyRolls').replace('[', '').replace(']', '').split(',').length) < 6) {
                setShowScore(true)
                end()
            } else {
                navigate('/successfortune')
                closeModal()
            }
        }

    }

    return (
        <div className='tests tests__fortune container-fluid'>
            <div className='tests__container container-fluid'>
                {
                    showScore
                        ?
                        <div className="tests__score col-lg-12 col-md-12 col-12 row">
                            <h3 className='col-12'>{texts[Number(localStorage.getItem('historyRolls').replace('[', '').replace(']', '').split(',').length)-1]?.name}</h3>
                            <button className='btn col-lg-2 col-12 mt-5' onClick={() => {rollNext()}}>Грати далі</button>
                        </div>

                        :  <div className="tests__content col-lg-12 col-md-12 col-12">
                                <div className='test__title-categories'>
                                    <h2 className='text-center mb-5'>{lastRoll}</h2>
                                </div>
                                <div className="tests__progress_bar">
                                    <p className='quest__progress_number'>Питання {currentQuestion + 1} з {data.length}</p>
                                    <div className='progress__bar'></div>
                                </div>


                                <div className="test__questions">
                                    <div className="question__block">

                                        <h2>{data[currentQuestion].questionText}</h2>

                                        <div className="answers__block container-fluid row">

                                            {data[currentQuestion].answerOptions.map(item => (

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
});

export default TestsFortune;
