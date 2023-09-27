import React from "react";
import Logo from "../../../assets/images/footer/logo.svg";

import "./styles.module.scss";

const Footer = () => {
    const linksForFooter = [
        { text: "Платформа НМТ", url: "https://edu.dniprorada.gov.ua/" },
        { text: "MyBook", url: "https://mybook.dniprorada.gov.ua/" },
        { text: "єДніпро", url: "https://ednipro.dp.ua/" },
    ];

    return (
        <footer className="footer container-fluid">
            <div className="footer__block_logo col-xl-5 col-md-4 col-12">
                <img
                    src={Logo}
                    alt="logo eDnipro"
                    className="footer__logo w-100"
                />
                <p>Усі права захищені</p>
            </div>

            <div className="footer__links col-xl-7 col-md-8 col-12">
                <div className="footer__links_content">
                    <p>Корисні посилання:</p>
                    <div className="footer__link">
                        {linksForFooter.map((e) => (
                            <a href={e.url} target="_blank" rel="noreferrer">
                                {e.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
