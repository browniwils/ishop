import { Link } from "react-router-dom";

import Modal from "../components/utilities/Modal";

function Login() {
    return (
        <Modal>
            <div className="modal__login">
                <div className="login__container">
                    <h3 className="login__title">Login</h3>
                    <form className="login__form">
                        <div className="login__form-group">
                            <input type="email" name="" placeholder="Email: " />
                            <input type="password" name="" placeholder="Password: " />
                        </div>
                        <p>
                            <span>forgotten password? </span>
                            <Link to="/reset-password">click here</Link>
                        </p>
                        <p>
                            <span>doesn't have account? </span>
                            <Link to="/signup">click here</Link>
                        </p>
                        <button type="submit">Login</button>
                    </form>
                    <div className="login__alternative">
                        <p>or login with:</p>
                        <div className="login__3rd-party">
                            <span className="login__socials">
                                <i className="fa-brands fa-google"></i>
                            </span>
                            <span className="login__socials">
                                <i className="fa-brands fa-facebook-f"></i>
                            </span>
                            <span className="login__socials">
                                <i className="fa-brands fa-twitter"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Login;
