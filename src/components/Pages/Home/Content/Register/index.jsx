import React, { useEffect, useState } from "react";
import MaskedInput from "react-text-mask";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { DatePicker } from "@skbkontur/react-ui";

import { login, registration } from "../../../../../http/userAPI";
import { useLocation } from "react-router-dom";

import "./styles.module.scss";

const Register = () => {
  const [firstName, setName] = useState("");
  const [surName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState();
  const [checked, setChecked] = useState();

  const [nameDirty, setNameDirty] = useState(false);
  const [lastNameDirtry, setLastNameDirty] = useState(false);
  const [emailDirtry, setEmailDirty] = useState(false);
  const [ageDirtry, setAgeDirty] = useState(false);

  const [nameError, setNameError] = useState("Поле не може бути порожнім");
  const [lastNameError, setLastNameError] = useState(
    "Поле не може бути порожнім"
  );
  const [emailError, setEmailError] = useState("Поле не може бути порожнім");
  const [ageError, setAgeError] = useState("Поле не може бути порожнім");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || lastNameError || ageError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, lastNameError, ageError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("Некоректна довжина");
      if (!e.target.value) {
        setNameError("Поле не може бути порожнім");
      }
    } else {
      setNameError("");
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Некоректна довжина");
      if (!e.target.value) {
        setLastNameError("Поле не може бути порожнім");
      }
    } else {
      setLastNameError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const res =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!res.test(String(e.target.value).toLowerCase())) {
      setEmailError("Не вірний email");
      // if (!e.target.value) {
      //     setEmailError('Поле не може бути порожнім')
      // }
    } else {
      setEmailError("");
    }
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
    if (e.target.value.length < 1) {
      setAgeError("Некоректна довжина");
      if (!e.target.value) {
        setAgeError("Поле не може бути порожнім");
      }
    } else {
      setAgeError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "lastname":
        setLastNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "age":
        setAgeDirty(true);
        break;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};

  const location = useLocation();
  const isLogin = location.pathname === "user/login";
  const token = localStorage.getItem("token");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login();
        console.log("1");
      } else {
        data = await registration(
          firstName,
          surName,
          phone,
          email,
          gender,
          age
        );
        toast.success("Successfully!");
        console.log(data);
        console.log("2");
        console.log(JSON.parse(localStorage.getItem("localStorageUsers")));
        console.log(localStorage.getItem("token"));
      }
    } catch (e) {
      setName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setGender("");
      setAge("");
      console.log("3");
      if (e.response.data.length === 1) {
        console.log("4");
        toast.error(e.response.data[0].msg);
      } else {
        console.log("5");
        for (let i = 0; i < e.response.data.length; i++) {
          console.log("6");
          toast.error(e.response.data[i].msg);
        }
      }
    }
  };

  const clickRegisterMore = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login();
        console.log("1");
      } else {
        localStorage.clear();
        data = await registration(
          firstName,
          surName,
          phone,
          email,
          gender,
          age
        );
        toast.success("Successfully!");
        console.log(data);
        console.log("2");
        console.log(JSON.parse(localStorage.getItem("localStorageUsers")));
        console.log(localStorage.getItem("token"));
      }
    } catch (e) {
      setName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setGender("");
      setAge("");
      if (e.response.data.length === 1) {
        console.log("44");
        toast.error(e.response.data[0].msg);
      } else {
        console.log("5");
        for (let i = 0; i < e.response.data.length; i++) {
          console.log("6");
          toast.error(e.response.data[i].msg);
        }
      }
    }
  };
  /* Data birth */
  // const [lib, setLib] = useState("");
  // const onLibChange = value => {
  //   console.log("onLibChange: ", value);
  //   setLib(value);
  // };

  return (
    <div className="register container-fluid d-flex" id={"reg"}>
      <h2>Для початку тестування пройдіть експрес-реєстрацію</h2>
      <form
        className="register__contents d-flex"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="register__upBlock col-lg-8 col-md-7 col-6 d-flex">
          <div className="register__content">
            <div className="lox" style={{ position: "relative" }}>
              <input
                className="input"
                type="text"
                placeholder="Ім'я"
                name="name"
                value={firstName}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => nameHandler(e)}
              />
              {nameDirty && nameError && (
                <div
                  className="error"
                  style={{
                    color: "red",
                    position: "absolute",
                    top: "84.3%",
                    left: "24%",
                  }}
                >
                  {nameError}
                </div>
              )}
            </div>

            <div className="lox" style={{ position: "relative" }}>
              <input
                className="input"
                placeholder="Прізвище"
                type="text"
                name="lastname"
                value={surName}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => lastNameHandler(e)}
              />
              {lastNameDirtry && lastNameError && (
                <div
                  className="error"
                  style={{
                    color: "red",
                    position: "absolute",
                    top: "84.3%",
                    left: "24%",
                  }}
                >
                  {lastNameError}
                </div>
              )}
            </div>
          </div>

          <div className="register__content">
            <div>
              <MaskedInput
                className="input"
                name="phone"
                guide={true}
                showMask={true}
                mask={[
                  "+",
                  "3",
                  "8",
                  "(",
                  /[0-9]/,
                  /\d/,
                  /\d/,
                  ")",
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                onBlur={(e) => blurHandler(e)}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <input
              className="input"
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => emailHandler(e)}
            />
            {/* {(emailDirtry && emailError) && <div style={{ color: 'red' }}>{emailError}</div>} */}
          </div>
        </div>

        <div className="register__box d-flex justify-content-center col-lg-8 col-md-7 col-6 ">
          <div className="checkbox__block d-flex">
            <label className="checkbox__tap d-flex">
              <input
                className="checkbox"
                type="radio"
                name="gender"
                value="male"
                onClick={(e) => setGender(e.target.value)}
                {...register("gender", {
                  required: "Это важно, выберите ваш пол",
                })}
              />
              <span>Чоловіча</span>
            </label>
            {/* {errors.gender && <span style={{ color: 'red' }}>{errors.gender.message}</span>} */}

            <label className="checkbox__tap d-flex">
              <input
                className="checkbox"
                type="radio"
                name="gender"
                value="female"
                onClick={(e) => setGender(e.target.value)}
                {...register("gender", {
                  required: "Это важно, выберите ваш пол",
                })}
              />
              <span>Жіноча</span>
            </label>
            {/* {errors.gender && <span style={{ color: 'red' }}>{errors.gender.message}</span>} */}
          </div>

          <div className="dataPicker__block d-flex align-items-center">
            {/* <DatePicker className="w-100" value={lib} onValueChange={onLibChange} /> */}
            <input
              className="input"
              placeholder="Вкажіть свій вік"
              type="number"
              name="age"
              value={age}
              minlength="1"
              maxlength="2"
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => ageHandler(e)}
            />
            {ageDirtry && ageError && (
              <div className="error" style={{ color: "red" }}>
                {ageError}
              </div>
            )}
          </div>
        </div>

        <div className="register__button_block">
          {token ? (
            <button
              value="Submit"
              type="submit"
              className="register__button"
              disabled={!formValid}
              checked={checked}
              onClick={clickRegisterMore}
            >
              Зареєструвати ще
            </button>
          ) : (
            <button
              value="Submit"
              type="submit"
              className="register__button"
              disabled={!formValid}
              checked={checked}
              onClick={click}
            >
              Відправити
            </button>
          )}
          <div>
            <Toaster position="top-right" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
