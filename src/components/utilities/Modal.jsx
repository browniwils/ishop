function Modal({ children }) {
    return (
        <>
            <div className="modal__backdrop"></div>
            {children}
        </>
    );
}

export default Modal;
