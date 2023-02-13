import { createPortal } from "react-dom";

function Backdrop({ children }) {
    return (
        <div className="backdrop">
            <div className="modal__backdrop"></div>
            {children}
        </div>
    );
}

function Modal({ children }) {
    return createPortal(<Backdrop>{children}</Backdrop>, document.querySelector("body"));
}

export default Modal;
