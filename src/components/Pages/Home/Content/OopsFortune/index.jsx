import React from "react";
import { Button, Container } from 'react-bootstrap';
import styles from './styles.module.scss'

const OopsFortune = () => {

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
        >
            <div className="success__page d-flex flex-column align-items-center">
                
                <div className={styles.success__oops}>
                    <h2 className="success__title">Упс!</h2>
                    <p className="success__text">
                    На жаль, набрана кількість балів недостатня для отримання призу переможця. 
                    Ви допустили більше ніж 5 помилок. Дякуємо за участь! За бажанням Ви можете покрутити колесо фортуни ще раз.
                    </p>
                    <a href="/" className={styles.button}>Пройти до головної сторінки</a>
                </div>
                
            </div>

        </Container>

    );
}

export default OopsFortune;