import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { sentMail } from "../../../../../http/mailAPI";
import toast, { Toaster } from "react-hot-toast";
import { fetchSertificateTaras } from "../../../../../http/sertificateTaras";
import { sentMailTaras } from "../../../../../http/mailTarasAPI";
import Iframe from "../../../Home/Content/Iframe/index";

import "./styles.module.scss";

const SuccessTaras = observer(() => {
    const [sertificate, setSertificate] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [amount, setAmount] = useState();
    const [mail, setMail] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("localStorageUsers")).data;
        setAmount(JSON.parse(localStorage.getItem("score-taras")));
        console.log(JSON.parse(localStorage.getItem("score-taras")));
        fetchSertificateTaras(
            data.surName + " " + data.firstName,
            JSON.parse(localStorage.getItem("score-taras")),
            data.gender,
            data.age
        )
            .then((data) => {
                setSertificate(data);
            })
            .then(() => {
                localStorage.removeItem("score-taras");
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

    const sendMailSuccessTaras = async () => {
        try {
            await sentMailTaras(mail, sertificate).then((data) => {
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
        <div className="container_taras d-flex justify-content-center align-items-center">
            <div className="success__page d-flex flex-column justify-content-center align-items-center col-xl-12 col-lg-12 col-md-12 col-12">
                <h2 className="success__title">Вітаємо!</h2>

                {amount > 80 ? (
                    <p className="success__text">
                        Ви успішно розгадали кросворд і отримуєте сертифікат з
                        винагородою! ! Щоб отримати подарунок - збережіть свій
                        сертифікат: вкажіть свою пошту або завантажте його.
                        Натисніть кнопку "Обміняти сертифікат на подарунок" та
                        заповніть коротку форму.
                        <br></br>Дякуємо за участь!
                    </p>
                ) : (
                    <p className="success__text">
                        Ви розгадали кросворд "Невідоме про відомих. Що ти знаєш
                        про Тараса Шевченка?", але набрана кількість балів
                        замала для отримання подарунку. Тож, як казав Кобзар:
                        "Немає часу на журбу"! Мерщій вивчати життєпис Тараса
                        Шевченка!
                        <br></br>Дякуємо за участь!
                    </p>
                )}

                {amount > 80 && (
                    <div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center justify-content-center">
                            <div>
                                {isVisible ? (
                                    <Iframe
                                        src={
                                            process.env.REACT_APP_API_URL +
                                            sertificate
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

                        <div className="success__course d-flex justify-content-center align-items-center col-xl-12 col-12">
                            <a
                                className="success__btn_course"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfO3HK3SffaFotLePJ1zRGZRo0uDZ-C2BIEXai23B2JOx25mg/viewform?usp=sharing"
                            >
                                Обміняти сертифікат
                            </a>
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
                                    onClick={sendMailSuccessTaras}
                                >
                                    Надіслати на пошту
                                </button>

                                <div className="success__down d-flex align-items-center col-xl-3 col-lg-3 col-md-3 col-12">
                                    <a
                                        className="success__btn"
                                        href={
                                            process.env.REACT_APP_API_URL +
                                            sertificate
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
                )}
                {/* <div className="col-xl-12 col-lg-12 col-md-12 col-12 d-flex align-items-center justify-content-center">
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

                <div className="success__course d-flex justify-content-center align-items-center col-xl-12 col-12">
                    {JSON.parse(localStorage.getItem("score-taras")) > 80 && (
                        <a
                            className="success__btn_course"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfO3HK3SffaFotLePJ1zRGZRo0uDZ-C2BIEXai23B2JOx25mg/viewform?usp=sharing"
                        >
                            Обміняти сертифікат
                        </a>
                    )}
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
                            onClick={sendMailSuccessTaras}
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
                </div> */}
            </div>
        </div>
    );
});

export default SuccessTaras;
