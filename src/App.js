import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import moment from "moment";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Dashboard/Main";
import NotFound404 from "./pages/404";

import "./styles/global.css";

const admin = {
    navigations: [
        { title: "Dashboard", path: "/dashboard", icon: "fa-grid" },
        { title: "Messages", path: "/messages", icon: "fa-messages" },
        { title: "Add Items", path: "/add-items", icon: "fa-layer-plus" },
        { title: "Inventries", path: "/inventries", icon: "fa-box-open-full" },
        { title: "Sales", path: "/sales", icon: "fa-credit-card" },
        { title: "Orders", path: "/orders", icon: "fa-bags-shopping" },
        { title: "Issues", path: "/issues", icon: "fa-triangle-exclamation" },
        { title: "Customers", path: "/customers", icon: "fa-user" },
        { title: "Staffs", path: "/staffs", icon: "fa-users" },
        { title: "Logout", path: "/logout", icon: "fa-gear" },
    ],
    info: { title: "Dashboard", date: moment().format("ddd - DD-MM-YYYY, HH:mm:ss"), userName: "Admin", userPhoto: "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", totalMessages: 8 },
    dashCards: [
        { title: "Inventries", quantity: 1000 },
        { title: "Sales", quantity: 968 },
        { title: "Orders", quantity: 98 },
        { title: "Customers", quantity: 401 },
    ],
};

const user = {
    navigations: [
        { title: "Dashboard", path: "/dashboard", icon: "fa-grid" },
        { title: "Products", path: "/messages", icon: "fa-messages" },
        { title: "My orders", path: "/my-orders", icon: "fa-bags-shopping" },
        { title: "Favorites", path: "/inventries", icon: "fa-box-open-full" },
        { title: "Report Issues", path: "/issue-report", icon: "fa-triangle-exclamation" },
        { title: "Logout", path: "/logout", icon: "fa-gear" },
    ],
    info: { title: "Dashboard", date: "", userName: "Alexander A.", userPhoto: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", totalMessages: 8, totalCart: 16 },
    dashCards: [
        { title: "Rolex Watch", quantity: "$99" },
        { title: "iPhone 14 Pro Max", quantity: "$2000" },
        { title: "Samsung LED TV", quantity: "$16" },
        { title: "xBox360", quantity: "$401" },
    ],
};

function App() {
    const [isAdmin /*setIsAdmin*/] = useState(false);
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="dashboard" element={<Dashboard dashInfo={isAdmin ? admin : user} />}>
                <Route path="" element={<Main cards={isAdmin ? admin.dashCards : user.dashCards} />} />
            </Route>
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    );
}

export default App;
