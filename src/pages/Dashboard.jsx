import { useState } from "react";
import { Outlet } from "react-router-dom";

import Logo from "../components/utilities/Logo";
import DashNav from "../components/utilities/DashNav";
import DashHeader from "../components/utilities/DashHeader";

function Dashboard({ dashInfo }) {
    const navigations = dashInfo.navigations;
    const [userInfo] = useState(dashInfo.info);
    return (
        <div className="dashboard">
            <div className="d-nav">
                <div className="d-nav__container">
                    <Logo />
                    <div className="d-nav__items">
                        {navigations.map((nav) => (
                            <DashNav key={nav.title} title={nav.title} path={nav.path} icon={nav.icon} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="d-main">
                <DashHeader headerInfo={userInfo} />
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
