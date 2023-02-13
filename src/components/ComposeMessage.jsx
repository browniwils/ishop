import { useNavigate } from "react-router-dom";

function MessageModal({ children }) {
    return <div className="message-modal">{children}</div>;
}

function ComposeMessage() {
    const navigate = useNavigate();

    const closeComposeMessageModal = () => {
        navigate(-1);
    };
    return (
        <MessageModal>
            <div className="compose-message">
                <div onClick={closeComposeMessageModal} className="modal__close-icon">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="compose-message__header">
                    <h5 className="compose-message__title">New Message</h5>
                </div>
                <div className="compose-message__container">
                    <div className="compose-message__subject">
                        <input type="text" placeholder="Message title:" />
                    </div>
                    <div className="compose-message__body">
                        <textarea name="item-desc" placeholder="Message body..."></textarea>
                    </div>
                    <div className="compose-message__attachment">
                        <label htmlFor="attachment">
                            <p>choose files</p>
                            <i class="fa-solid fa-paperclip"></i>
                            <span>file.pdf</span>
                            <span>file.pdf</span>
                            <span>file.pdf</span>
                            <span>file.pdf</span>
                        </label>
                        <input id="attachment" type="file" multiple />
                    </div>
                    <button type="button" className="btn__add">
                        Send message
                    </button>
                </div>
            </div>
        </MessageModal>
    );
}

export default ComposeMessage;
