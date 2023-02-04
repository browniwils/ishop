import { Link } from "react-router-dom";

function Nav({ location, children }) {
    return (
        <div className="i-nav-item">
            <Link to={location} className="i-nav__link">
                {children}
            </Link>
        </div>
    );
}

export default Nav;
