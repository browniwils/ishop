import { Link, useLocation } from "react-router-dom";

function DashNav({ title, icon, path, changeDashboardTitle }) {
    const { pathname } = useLocation();

    return (
        <Link to={`/dashboard${path}`}>
            <div onClick={() => changeDashboardTitle({ dashTitle: title })} className={`d-nav__item ${pathname === "/dashboard" + path ? "active" : ""}`}>
                <i className={`fa-solid ${icon}`}></i>
                <span className="d-nav__title">{title}</span>
            </div>
        </Link>
    );
}

export default DashNav;
