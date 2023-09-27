/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState, useEffect } from "react";
import { useModal } from "../../../../Base/ModalContainer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import WheelFortune from "../WheelFortune";
// import Fortuna from '../../../../../assets/images/wheelFortuna/fortuna.png'
import Happiness from "../../../../../assets/images/chainHappiness/chainHappiness.png";
import Taras from "../Taras";
import Ua from "../Ua";

import "./styles.module.scss";

// import { ModalContext } from '../../../../Base/ModalContainer'

// const OurProjectContainer = () => {
//   const { openModal } = useContext(ModalContext)

//   return <OurProject onButtonClick={openModal} />
// }

const OurProject = () => {
    const token = localStorage.getItem("token");
    function checkAuth() {
        const token = localStorage.getItem("token");
        if (token) {
            openTests();
        } else {
            toast.error("Необхідна реєстрація!");

            //Тут код скрола к якорю
        }
    }

    const { openModal } = useModal();

    const navigate = useNavigate();
    const openTests = useCallback(() => {
        openModal("TestsUkr");
        // navigate('/success')
    });

    return (
        <div className="our_projects">
            <Taras />
            <Ua />

            <div className="projects__block container-fluid testUkrLang">
                <div className="projects__content col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="projects__text">
                        <h2 className="projects__title">
                            Тестування з української мови
                        </h2>
                        <p className="projects__text_p">
                            Пройдіть тест та{" "}
                            <span style={{ fontWeight: "bold" }}>
                                отримайте сертифікат
                            </span>
                            , який підтверджує рівень знань рідної мови.
                        </p>
                    </div>

                    <div className="projects__button">
                        {token ? (
                            <button
                                className="projects__knopka testUkrLang__button button_main"
                                type="button"
                                onClick={() => checkAuth()}
                            >
                                <span>
                                    <a>Пройти тест</a>
                                </span>
                            </button>
                        ) : (
                            <button
                                className="projects__knopka testUkrLang__button button_main"
                                type="button"
                                onClick={() => checkAuth()}
                            >
                                <span>
                                    <a href="#reg">Пройти тест</a>
                                </span>
                            </button>
                        )}
                    </div>
                </div>

                <div className="projects__img_block testUa_img col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-12"></div>
            </div>

            <WheelFortune />
        </div>
    );
};

export default OurProject;
