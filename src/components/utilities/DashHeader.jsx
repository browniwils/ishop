function DashHeader({ headerInfo }) {
    return (
        <div className="d-header">
            <h5 className="d-header__title">{headerInfo.title}</h5>
            <div className="d-date">{headerInfo.date}</div>
            <div className="d-user-info">
                <p>Welcome, {headerInfo.userName}</p>
                <div className="d-user__dp">
                    <div className="d-user__container">
                        <img className="d-user__img" src={headerInfo.userPhoto} alt={headerInfo.userName} />
                    </div>
                    {!!headerInfo.totalMessages && <span className="d-user__message-icon">{headerInfo.totalMessages}</span>}
                </div>
                {headerInfo?.totalCart && (
                    <div className="d-user__cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="d-user__message-icon">{headerInfo.totalCart}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashHeader;
