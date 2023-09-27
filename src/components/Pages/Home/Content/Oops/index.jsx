import React from "react";
import { Button, Container } from 'react-bootstrap';
import styles from './styles.module.scss'

const Oops = () => {

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
        >
            <div className="success__page d-flex flex-column align-items-center">
                <h2 className="success__title">Упс!</h2>
                <p className="success__text">
                    Ви надали замало правильних відповідей для отримання сертифікату. 
                    Пропонуємо Вам ознайомитися із курсом з української мови за посиланням нижче. 
                    Згодом Ви можете пройти тестування знову.
                </p>
                
                <div className={styles.success__oops}>
                    <h1>Курс “Лагідна українізація“ від Освітньої траєкторії</h1>
                    <a href="/" className={styles.button}>Пройти</a>
                </div>
                
            </div>

        </Container>

    );
}

export default Oops;