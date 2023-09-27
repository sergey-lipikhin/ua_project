import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { sentMail } from "../../../../../http/mailAPI";
import toast, { Toaster } from "react-hot-toast";
import { fetchSertificateLesya } from "../../../../../http/sertificateLesyaAPI";
import { sentMailLesya } from "../../../../../http/mailLesyaAPI";
import Iframe from "../../../Home/Content/Iframe/index";

import "./styles.module.scss";

const LesyaJackpot = observer(() => {
    const [sertificate, setSertificate] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [mail, setMail] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("localStorageUsers")).data;
        fetchSertificateLesya(
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

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem("localStorageUsers")).data;
    //     fetchSertificateLesya(
    //         data.surName + " " + data.firstName,
    //         JSON.parse(localStorage.getItem("score")),
    //         data.gender
    //     )
    //         .then((data) => setSertificate(data))
    //         .then(() => {
    //             localStorage.removeItem("score");
    //             setIsVisible(true);
    //         });
    // }, []);

    const sendMailSuccessLesya = () => {
        try {
            sentMailLesya(mail, sertificate).then((data) => {
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
                    Ви успішно пройшли тест і отримуєте сертифікат з
                    винагородою! Розмальовка вже чекає на тебе!
                    <br></br>Дякуємо за участь!
                </p>

                <div className="col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center justify-content-center">
                    <div>
                        {isVisible ? (
                            <Iframe
                                src={
                                    process.env.REACT_APP_API_URL + sertificate
                                }
                                width="800px"
                                height="600px"
                            />
                        ) : (
                            <div
                                class="spinner-border text-dark mt-2"
                                role="status"
                            ></div>
                        )}
                    </div>
                </div>

                <div className="d-flex col-xl-10 col-lg-12 col-md-11 col-12">
                    <div className="success__course d-flex justify-content-center align-items-center col-xl-6 col-lg-6 col-md-6 col-12">
                        <a
                            className="success__btn_course"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdm_z6Y-3JsBHpZM6oao9GQsg9dZ8pSqxQgwSlKwFKgqttTgw/viewform?usp=sf_link"
                        >
                            Обміняти сертифікат на подарунок
                        </a>
                    </div>

                    <div className="success__course d-flex justify-content-center align-items-center col-xl-6 col-lg-6 col-md-6 col-12">
                        <a
                            className="success__btn_course"
                            href="https://ua.dniprorada.gov.ua/api/uploads/%D0%A0%D0%BE%D0%B7%D0%BC%D0%B0%D0%BB%D1%8C%D0%BE%D0%B2%D0%BA%D0%B0.zip"
                            download
                        >
                            Завантажити розмалювку
                        </a>
                    </div>
                </div>

                <div className="success__footer d-flex flex-column align-items-center col-xl-12 col-lg-12 col-md-12 col-12">
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
                            onClick={sendMailSuccessLesya}
                        >
                            Надіслати на пошту
                        </button>

                        <div className="success__down d-flex align-items-center col-xl-3 col-lg-3 col-md-3 col-12">
                            <a
                                className="success__btn"
                                href={
                                    process.env.REACT_APP_API_URL + sertificate
                                }
                                download
                            >
                                Завантажити сертифікат
                            </a>
                        </div>

                        <div>
                            <Toaster position="top-right" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
});

export default LesyaJackpot;
