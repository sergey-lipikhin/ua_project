import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { fetchSertificate } from "../../../../../http/setificateAPI";
import { Context } from "../../../../..";
import SuccessPDF from "../../../../../assets/images/header/logo.svg";
import "./styles.module.scss";
import Iframe from "../../../Home/Content/Iframe/index";
import { sentMail } from "../../../../../http/mailAPI";
import toast, { Toaster } from "react-hot-toast";

const Success = observer(() => {
    const { store } = useContext(Context);
    const [sertificate, setSertificate] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [mail, setMail] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("localStorageUsers")).data;
        fetchSertificate(
            data.surName + " " + data.firstName,
            JSON.parse(localStorage.getItem("score-quiz")),
            data.gender,
            data.age
        )
            .then((data) => setSertificate(data))
            .then(() => {
                localStorage.removeItem("score-quiz");
                setIsVisible(true);
            });
    }, []);

    const sendMail = () => {
        try {
            sentMail(mail, sertificate).then((data) => {
                if (data.message) {
                    toast.success(data.message);
                }
            });
            setMail("");
        } catch (e) {
            toast.error(e.response.data.message);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="success__page d-flex flex-column justify-content-center align-items-center col-xl-12 col-lg-12 col-md-12 col-12">
                <h2 className="success__title">Вітаємо!</h2>
                <p className="success__text">
                    Вітаємо! Ви пройшли тестування на відповідний рівень знань
                    української мови. Ви можете завантажити Ваш сертифікат,
                    натиснувши кнопку нижче, або вказати електронну пошту, на
                    яку буде перенаправлено сертифікат про проходження
                    тестування.
                </p>

                <div className="col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center justify-content-center">
                    <div>
                        {isVisible ? (
                            <Iframe
                                src={
                                    process.env.REACT_APP_API_URL + sertificate
                                }
                            />
                        ) : (
                            <div
                                class="spinner-border text-dark"
                                role="status"
                            ></div>
                        )}
                    </div>
                </div>

                <div className="success__course d-flex justify-content-center align-items-center col-xl-12 col-lg-12 col-md-12 col-12">
                    <a
                        className="success__btn_course"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeKSoD_wTpj3h8kuftYhEgAtPCSNXC6QkbMEau5IRrmJ6J_4Q/viewform?usp=sf_link"
                    >
                        Отримати безкоштовний курс з української мови
                    </a>
                </div>

                <div className="success__footer d-flex align-items-center col-xl-12 col-lg-12 col-md-12 col-12">
                    <div className="success__mail_send d-flex align-items-center col-xl-11 col-lg-12 col-md-11 col-12">
                        <input
                            className="input"
                            placeholder="email"
                            type="email"
                            name="email"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                        <button
                            className="success__btn"
                            onClick={sendMail}
                            // variant={"outline-success"}
                        >
                            Надіслати на пошту
                        </button>
                        {/* <a 
                            className="success__btn" 
                            href={process.env.REACT_APP_API_URL + sertificate }
                            download
                        >Завантажити</a> */}
                        <div className="success__down d-flex align-items-center col-xl-3 col-lg-3 col-md-3 col-12">
                            <a
                                className="success__btn"
                                href={
                                    process.env.REACT_APP_API_URL + sertificate
                                }
                                download
                            >
                                Завантажити
                            </a>
                        </div>
                    </div>

                    {/* <div className="success__down d-flex align-items-center col-xl-3 col-lg-3 col-md-3 col-12">
                        <a 
                            className="success__btn" 
                            href={process.env.REACT_APP_API_URL + sertificate }
                            download
                        >Завантажити</a>
                    </div> */}

                    <div>
                        <Toaster position="top-right" />
                    </div>
                </div>
            </div>
        </Container>
    );
});

export default Success;
