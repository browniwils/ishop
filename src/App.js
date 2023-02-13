import { useState, useReducer } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// pages
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Dashboard/Main";
import NotFound404 from "./pages/404";

// components
import Message from "./pages/Dashboard/Message";
import AddItem from "./pages/Dashboard/AddItem";
import Inventory from "./pages/Dashboard/Inventory";
import Favorite from "./pages/Dashboard/Favorite";
import Sale from "./pages/Dashboard/Sale";
import Order from "./pages/Dashboard/Order";
import Customer from "./pages/Dashboard/Customer";
import Issue from "./pages/Dashboard/Issue";
import ReportIssue from "./pages/Dashboard/ReportIssue";
import Staff from "./pages/Dashboard/Staff";
import ProductModal from "./components/ProductModal";
import ComposeMessage from "./components/ComposeMessage";

// styles
import "./styles/global.css";

// import dummy data
import { admin, user } from "./DummyData";
const reducer = (prevState, newState) => {
    return { ...prevState, info: { ...prevState.info, ...newState } };
};
function App() {
    const [isAdmin /*setIsAdmin*/] = useState(true);
    const [currentUser, disPatchCurrentUser] = useReducer(reducer, isAdmin ? admin : user);
    // const [nav, setNav] = useState(isAdmin ? admin.navigations[0].path : user.navigations[0].path);

    const handleDashboardTitle = (keyValuePair) => {
        disPatchCurrentUser(keyValuePair);
    };
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="dashboard" element={<Dashboard handleDashboardTitle={handleDashboardTitle} dashInfo={currentUser} />}>
                <Route path="" element={<Main isAdmin={isAdmin} cards={currentUser.dashCards} content={isAdmin ? currentUser.recents : currentUser.products} />} />
                {isAdmin && <Route path="add-items" element={<AddItem />} />}
                {isAdmin && <Route path="inventories" element={<Inventory />} />}
                {isAdmin && <Route path="sales" element={<Sale />} />}
                {isAdmin && <Route path="orders" element={<Order />} />}
                {isAdmin && <Route path="issues" element={<Issue />} />}
                {isAdmin && <Route path="customers" element={<Customer />} />}
                {isAdmin && <Route path="staffs" element={<Staff />} />}
                <Route path="messages" element={<Message />}>
                    <Route path="compose-new-message" element={<ComposeMessage />} />
                </Route>
                <Route path="favorites" element={<Favorite />} />
                <Route path="my-orders" element={<Order />} />
                <Route path="report-issue" element={<ReportIssue />} />
            </Route>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="overview" element={<Outlet />}>
                <Route path=":id/item" element={<ProductModal />} />
            </Route>
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    );
}

export default App;
