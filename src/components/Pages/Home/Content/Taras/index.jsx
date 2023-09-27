import React, { useCallback } from "react";

import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { useModal } from "../../../../Base/ModalContainer";
import Taras from "../../../../../assets/images/taras/sheva1.svg";

import "./styles.module.scss";

const TarasCr = () => {
    const token = localStorage.getItem("token");
    function checkAuth() {
        const token = localStorage.getItem("token");
        if (token) {
            openCr();
        } else {
            toast.error("Необхідна реєстрація!");

            //Тут код скрола к якорю
        }
    }

    const { openModal } = useModal();

    const navigate = useNavigate();
    const openCr = useCallback(() => {
        navigate("/tarascrossword");
    });

    return (
        <div className="projects__block taras" id="test">
            <div className="projects__content col-lx-4 col-lg-5 col-md-5 col-12">
                <div className="projects__text">
                    <h2 className="projects__title">
                        Невідоме про відомих. Що ти знаєш про Тараса Шевченка?
                    </h2>

                    <p className="projects__text_p">
                        Розгадайте кросворд на знання життєпису Тараса Шевченка
                        та отримайте приз за свої знання!
                    </p>

                    <p>* сертифікат на книгу або квиток у музей</p>
                </div>
                <div className="projects__button">
                    {token ? (
                        <button
                            className="projects__knopka taras__button button_main"
                            type="button"
                            onClick={checkAuth}
                        >
                            <span>
                                <Link to="/tarascrossword">Розпочати</Link>
                            </span>
                        </button>
                    ) : (
                        <button
                            className="projects__knopka taras__button button_main"
                            type="button"
                            onClick={checkAuth}
                        >
                            <span>
                                <a href="#reg">Розпочати</a>
                            </span>
                        </button>
                    )}
                </div>
            </div>

            <div className="projects__img_block col-lx-8 col-lg-7 col-md-7 col-12">
                <img className="img__block_lesya" src={Taras} alt="Taras" />
            </div>
        </div>
    );
};

export default TarasCr;
