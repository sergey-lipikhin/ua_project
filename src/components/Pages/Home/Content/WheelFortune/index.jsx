import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";
import Roulette from "./Roulette";
import { generateNumber, useLocalStorage } from "../../../../services/helpers";
import { useModal } from "../../../../Base/ModalContainer";
import toast from "react-hot-toast";

import styles from "./styles.module.scss";

// import idiSound from "../../../../sounds/idi.mp3";
// import startSound from "../../../../sounds/start.mp3";
// import endSound from "../../../../sounds/end.mp3";

const Fortune = () => {
    const presents = [
        "Література",
        "Історики",
        "Революція",
        "Козацтво",
        "Архітектура",
        "Громадські діячі",
        "Література",
        "Історики",
    ];

    const [currentRotate, setCurrentRotate] = useState(0);
    const [isAnimate, setIsAnimate] = useState(true);
    const [isRoll, setIsRoll] = useState(false);
    const { getItem, setItem } = useLocalStorage();
    const { openModal } = useModal();
    const { closeModal } = useModal();

    const token = localStorage.getItem("token");

    function checkAuth() {
        const token = localStorage.getItem("token");
        if (token) {
            onRoll();
        } else {
            toast.error("Необхідна реєстрація!");

            //Тут код скрола к якорю
        }
    }

    function stop() {
        localStorage.removeItem("historyRolls");
        localStorage.setItem([1]);
        setIsRoll(false);
    }

    const generateUnique = () => {
        const historyRolls = JSON.parse(getItem("historyRolls")) || [];
        const number = generateNumber(0, 6);
        console.log(historyRolls);
        console.log("number = " + number);

        if (historyRolls.includes(number)) {
            console.log("end");
            return historyRolls.length === 6 ? stop() : generateUnique();
        } else {
            setItem("historyRolls", JSON.stringify([...historyRolls, number]));
            return number;
        }
    };

    const onRoll = useCallback(() => {
        let randomNumber = generateUnique();
        setIsRoll(true);
        const randomRoll =
            360 * 50 + (360 / 8) * randomNumber + generateNumber(0, 360 / 8);

        setCurrentRotate(randomRoll);

        setTimeout(() => {
            setIsAnimate(false);
            setCurrentRotate(randomRoll % 360);

            setTimeout(() => {
                setIsRoll(false);
                setIsAnimate(true);
                closeModal();
                openModal("wheelfortune", {
                    category: presents[randomNumber],
                    roll: onRoll,
                });
            }, 1000);
            // openModal('wheelfortune')
        }, 5000);
    }, [currentRotate]);

    return (
        <div className="projects__block wheelFortune">
            <div className="projects__content col-lx-4 col-lg-5 col-md-5 col-12">
                <div className="projects__text">
                    <h2 className="projects__title">
                        Вікторина "Колесо фортуни" на знання історії міста
                    </h2>

                    <p className="projects__text_p">
                        Прокрутіть колесо 6 разів та дайте відповідь на усі
                        запитання -{" "}
                        <span style={{ fontWeight: "bold" }}>
                            отримайте сертифікат
                        </span>{" "}
                        за свої феноменальні знання!
                    </p>

                    <p>*сертифікат на відвідування Музею історії Дніпра.</p>
                </div>
                <div className="projects__button">
                    {/* <button
                      className="projects__knopka wheelFortune__button button_main"
                      type="button"
                      onClick={checkAuth}
                      >
                      <span><a href="#reg">Пройти тест</a></span>
                    </button> */}
                    {token ? (
                        <button
                            className="projects__knopka wheelFortune__button button_main"
                            type="button"
                            onClick={checkAuth}
                        >
                            <span>
                                <a>Пройти тест</a>
                            </span>
                        </button>
                    ) : (
                        <button
                            className="projects__knopka wheelFortune__button button_main"
                            type="button"
                            onClick={checkAuth}
                        >
                            <span>
                                <a href="#reg">Пройти тест</a>
                            </span>
                        </button>
                    )}
                </div>
            </div>

            <div className="projects__img_block col-lx-8 col-lg-7 col-md-7 col-12">
                <div className="left"></div>

                <div className={styles.container}>
                    <div
                        className={classNames(styles.overflow, {
                            [styles.isRoll]: isRoll,
                        })}
                    >
                        <div className={styles.content}>
                            <Roulette
                                isRoll={isRoll}
                                currentRotate={currentRotate}
                                isAnimate={isAnimate}
                                presents={presents}
                            />
                        </div>{" "}
                    </div>

                    {/* <div className={classNames(styles.footer, { [styles.isRoll]: isRoll })}>
              <buton className={styles.btn} onClick={onRoll}>
                Roll
              </buton>
            </div> */}
                </div>

                <div className="right"></div>
            </div>
        </div>
    );
};

export default Fortune;
