import React, { useEffect, useRef } from "react";

import "./styles.module.scss";

const Preview = () => {
    const vidRef = useRef();

    useEffect(() => {
        vidRef.current.play();
    }, []);

    return (
        <div className="preview container-fluid">
            <div className="preview__content col-lx-6 col-lg-6 col-md-6 col-11">
                <div className="preview__text">
                    <h2>Дніпро знає, говорить і практикує українську!</h2>

                    <p className="preview__text_p">
                        Перевірте свої знання з української мови за допомогою
                        онлайн-тесту, який покаже рівень Вашої обізнаності у
                        рідній мові.
                    </p>

                    <p>
                        * У рамках Міської програми розвитку та функціонування
                        української мови "Українською, будь ласка!".
                    </p>
                </div>
                <div className="divButton col-12">
                    <a href="#test" className="button__link button">
                        <span>Перевірте знання</span>
                    </a>
                </div>
            </div>
            <div className="preview__move col-xl-6 col-lg-6 col-md-6 col-12">
                {/* <video autoplay loop muted playsInline src="https://ua.dniprorada.gov.ua/api/uploads/video_header.webm" ref={vidRef} type="video/webm" width="100%" /> */}
                <video
                    autoplay
                    loop
                    muted
                    playsInline
                    ref={vidRef}
                    width="100%"
                >
                    <source
                        src="https://ua.dniprorada.gov.ua/api/uploads/video_header.webm"
                        type="video/webm"
                    />
                    <source
                        src="https://ua.dniprorada.gov.ua/api/uploads/bg_2.mp4"
                        type="video/mp4"
                    />
                    Sorry, your browser doesn't support videos.
                </video>
            </div>
        </div>
    );
};

export default Preview;
