/* eslint-disable max-len */

import React from "react";

import Logotype from "../../../assets/images/header/logo.svg";
import Dnipro from "../../../assets/images/header/dnipro.svg";
// import Dpgumpol from "../../../assets/images/header/dpgumpol.svg";
// import Esl from "../../../assets/images/header/esl.svg";
// import Logos from "../../../assets/images/header/logos.svg";
import Ednipro from "../../../assets/images/header/ednipro.svg";

import "./styles.module.scss";

const Header = () => {
    return (
        <>
            <header className="header navbar container-fluid">
                <div className="header__container row">
                    <div className="header__logo_block col-lg-4 col-4">
                        <a href="/" className="navbar-brand">
                            <img
                                className="header__logo ua__logo"
                                src={Logotype}
                                alt="logo UA"
                            />
                        </a>
                    </div>

                    <div className="header__logo_block col-lg-3 col-4">
                        <a
                            href="https://dniprorada.gov.ua/"
                            className="navbar-brand "
                        >
                            <img
                                className="header__logo"
                                src={Dnipro}
                                alt="logo Dniprorada"
                            />
                        </a>
                    </div>

                    <div className="header__logo_block col-lg-3 col-4">
                        <a
                            href="https://ednipro.dp.ua/"
                            className="navbar-brand "
                        >
                            <img
                                className="header__logo"
                                src={Ednipro}
                                alt="logo eDnipro"
                            />
                        </a>
                    </div>

                    {/* <div className="header__logo_block col-lg-2 col-4">
            <a
              href="https://humpolitic.dniprorada.gov.ua/"
              className="navbar-brand "
            >
              <img
                className="header__logo gundep"
                src={Dpgumpol}
                alt="logo Gundep"
              />
            </a>
          </div>

          <div className="header__logo_block col-lg-2 col-3">
            <a href="https://eslukraine.com/" className="navbar-brand ">
              <img className="header__logo" src={Esl} alt="logo esl" />
            </a>
          </div>

          <div className="header__logo_block col-lg-2 col-4">
            <a href="https://apslogos.com/" className="navbar-brand ">
              <img className="header__logo" src={Logos} alt="logo logos" />
            </a>
          </div> */}
                </div>
            </header>
        </>
    );
};

export default Header;
