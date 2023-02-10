import { Link } from "react-router-dom";
import Modal from "../components/utilities/Modal";

function ResetPassword() {
    return (
        <Modal>
            <div class="modal__login">
                <div class="login__container">
                    <h3 class="login__title">Reset Password</h3>
                    <form class="login__form">
                        <div class="login__form-group">
                            <input type="email" name="" placeholder="Email: " />
                        </div>
                        <p>
                            <Link to="/login">Login here</Link>
                        </p>
                        <button type="submit">Reset</button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

export default ResetPassword;
