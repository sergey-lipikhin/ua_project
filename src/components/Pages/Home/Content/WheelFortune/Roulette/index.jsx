import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

import arrowImg from "../../../../../../assets/images/wheelFortuna/arrow.svg";
import rtImg from "../../../../../../assets/images/wheelFortuna/rt.svg";

const Presents = ({ presents = [] }) => {
  return presents ? (
    <div className={styles.presents}>
      <div className={styles.content}>
        {presents.map((e, i) => (
          <span
            style={{
              transform: `rotate(${(360 / 8) * (i + 3) - 360 / 8 / 2}deg)`,
            }}
            key={`${e}_${i}`}
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  ) : null;
};

const Arrow = ({ rotate = 0, isAnimate = true }) => {
  return (
    <img
      src={arrowImg}
      className={styles.arrow}
      style={{
        transform: `rotate(${rotate}deg)`,
        transition: isAnimate ? "cubic-bezier(0, 1, 1, 1) 5s" : "none",
      }}
    />
  );
};

const Roulette = ({ isRoll, currentRotate, isAnimate, presents }) => {
  return (
    <div className={classNames(styles.container, { [styles.isRoll]: isRoll })}>
      <img src={rtImg} className={styles.rt}/>
      <Arrow rotate={currentRotate} isAnimate={isAnimate} />
      <Presents presents={presents} />
    </div>
  );
};

export default React.memo(Roulette);
