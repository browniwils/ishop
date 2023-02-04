import Logo from "./Logo";

import Paypal from "../../assets/paypal.png";

function footer() {
    return (
        <footer className="i-footer">
            <Logo />
            <div className="i-footer__middle">
                <div className="i-copyright">
                    <p>©Copyright 2020 - 2023 all rights reserved</p>
                </div>
                <div className="i-payment-methods">
                    <img src={Paypal} alt="" />
                </div>
            </div>
            <div className="i-socials">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-github-alt"></i>
                <i className="fa-brands fa-pinterest-p"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </footer>
    );
}

export default footer;
