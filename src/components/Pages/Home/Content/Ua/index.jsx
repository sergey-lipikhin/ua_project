import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useModal } from "../../../../Base/ModalContainer";
import Lesya from "../../../../../assets/images/lesya/lesya.svg";

import "./styles.module.scss";

const Ua = () => {
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
        openModal("LesyaUa");
        // navigate('/success')
    });

    return (
        <div className="projects__block ua">
            <div className="projects__content col-lx-4 col-lg-5 col-md-5 col-12">
                <div className="projects__text">
                    <h2 className="projects__title">
                        Невідоме про відомих. Що ти знаєш про Лесю Українку?
                    </h2>

                    <p className="projects__text_p">
                        Пройдіть тест на знання життєпису Лесі Українки та
                        отримайте приз за свої знання!
                    </p>

                    <p>
                        * авторська розмальовка за тематикою життя письменниці
                    </p>
                </div>
                <div className="projects__button">
                    {token ? (
                        <button
                            className="projects__knopka ua__button button_main"
                            type="button"
                            onClick={checkAuth}
                        >
                            <span>
                                <a>Пройти тест</a>
                            </span>
                        </button>
                    ) : (
                        <button
                            className="projects__knopka ua__button button_main"
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
                <img className="img__block_lesya" src={Lesya} alt="Lesya" />
            </div>
        </div>
    );
};

export default Ua;
