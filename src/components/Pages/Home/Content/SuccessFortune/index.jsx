import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { sentMail } from "../../../../../http/mailAPI";
import toast, { Toaster } from "react-hot-toast";
import { fetchSertificateMusem } from "../../../../../http/sertificateMusemAPI";
import { sentMailMusem } from "../../../../../http/mailMusemAPI";
import Iframe from "../../../Home/Content/Iframe/index";

import "./styles.module.scss";

const SuccessFortune = observer(() => {
    const [sertificate, setSertificate] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [mail, setMail] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("localStorageUsers")).data;
        fetchSertificateMusem(
            data.surName + " " + data.firstName,
            JSON.parse(localStorage.getItem("score"))
        )
            .then((data) => setSertificate(data))
            .then(() => {
                localStorage.removeItem("score");
                setIsVisible(true);
            });
        console.log(JSON.parse(localStorage.getItem("score")));
    }, []);

    const sendMailSuccessFortune = () => {
        try {
            sentMailMusem(mail, sertificate).then((data) => {
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
        <div className="d-flex justify-content-center align-items-center">
            <div className="success__page d-flex flex-column justify-content-center align-items-center col-xl-12 col-lg-12 col-md-12 col-12">
                <h2 className="success__title">Вітаємо!</h2>
                <p className="success__text">
                    Вітаємо! Ви відповіли на усі запитання та отримуєте
                    сертифікат з винагородою! Натисніть «Надіслати на пошту»,
                    щоб Ваш приз переможця був відправлений на Вашу електронну
                    пошту.
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
                            onClick={sendMailSuccessFortune}
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
                                Завантажити
                            </a>
                        </div>

                        <div>
                            <Toaster position="top-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SuccessFortune;
