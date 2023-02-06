import { Link } from "react-router-dom";

import Modal from "../components/utilities/Modal";

function Signup() {
    return (
        <Modal>
            <div className="modal__login">
                <div className="login__container">
                    <h3 className="login__title">Sign Up</h3>
                    <form className="login__form">
                        <div className="login__form-group">
                            <input type="text" name="name" placeholder="Name: " />
                            <input type="text" name="address" placeholder="Location: (eg: city, country) " />
                            <input type="email" name="email" placeholder="Email: " />
                            <input type="password" name="password" placeholder="Password: " />
                            <input type="password" name="password-confirmation" placeholder="Confirm: " />
                        </div>
                        <p>
                            <span>already have account? </span> <Link to="/login">click here</Link>
                        </p>
                        <button type="submit">Sign up</button>
                    </form>
                    <div className="login__alternative">
                        <p>or Sign up with:</p>
                        <div className="login__3rd-party">
                            <span className="login__socials">
                                <i class="fa-brands fa-google"></i>
                            </span>
                            <span className="login__socials">
                                <i class="fa-brands fa-facebook-f"></i>
                            </span>
                            <span className="login__socials">
                                <i class="fa-brands fa-twitter"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Signup;
