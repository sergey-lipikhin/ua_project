/* eslint-disable react/prop-types */

import React from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { useModal } from "../../../../Base/ModalContainer";

import Tests from "./TestsUkr";
import TestsFortune from "./TestsFortune";
import LesyaUa from "./LesyaUa";
import TestsTaras from "./TestsTaras";

import styles from "./styles.module.scss";

const Modal = () => {
  const {
    modalState: { name, props },
    closeModal,
  } = useModal();

  return createPortal(
    <div className={styles.modalBackground} id="modal">
      <form
        className={classNames(styles.modalContainer, styles["container-fluid"])}
      >
        <div className={styles.titleCloseBtn}>
          <button type="button" onClick={closeModal}>
            X
          </button>
        </div>
        {name === "wheelfortune" && <TestsFortune {...props} />}

        {name === "TestsUkr" && <Tests />}

        {name === "LesyaUa" && <LesyaUa />}

        {name === "TestsTaras" && <TestsTaras />}
      </form>
    </div>,
    document.getElementById("portal")
  );
};

export default React.memo(Modal);
