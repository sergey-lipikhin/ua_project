/* eslint-disable react/prop-types */
import React, { useContext, createContext, useState, useCallback } from "react";
import Modal from "../../Pages/Home/Content/Modals";

export const ModalContext = createContext();

const ModalContainer = ({ children }) => {
    const [modalState, setModalState] = useState({ name: null, props: {} });

    const closeModal = useCallback(
        () => setModalState({ name: null, props: {} }),
        []
    );
    const openModal = useCallback(
        (name, props) =>
            setModalState({
                name,
                props,
            }),
        []
    );

    return (
        <ModalContext.Provider value={{ openModal, closeModal, modalState }}>
            {children}
            {modalState.name && <Modal {...modalState.props} />}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);

export default React.memo(ModalContainer);
