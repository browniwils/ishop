function DashNav({ title, icon, path }) {
    return (
        <div className="d-nav__item">
            <i className={`fa-solid ${icon}`}></i>
            <span className="d-nav__title">{title}</span>
        </div>
    );
}

export default DashNav;
