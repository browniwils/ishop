import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Dashboard/Main";
import NotFound404 from "./pages/404";

// components
import Message from "./pages/Dashboard/Message";
import AddItem from "./pages/Dashboard/AddItem";
import Inventory from "./pages/Dashboard/Inventory";
import Sale from "./pages/Dashboard/Sale";
import Order from "./pages/Dashboard/Order";
import Customer from "./pages/Dashboard/Customer";
import Issue from "./pages/Dashboard/Issue";
import ReportIssue from "./pages/Dashboard/ReportIssue";
import Staff from "./pages/Dashboard/Staff";

// styles
import "./styles/global.css";

// import dummy data
import { admin, user } from "./DummyData";

function App() {
    const [isAdmin /*setIsAdmin*/] = useState(!true);
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="dashboard" element={<Dashboard dashInfo={isAdmin ? admin : user} />}>
                <Route path="" element={<Main isAdmin={isAdmin} cards={isAdmin ? admin.dashCards : user.dashCards} content={isAdmin ? admin.recents : user.products} />} />
                <Route path="messages" element={<Message />} />
                <Route path="add-items" element={<AddItem />} />
                <Route path="inventories" element={<Inventory />} />
                <Route path="sales" element={<Sale />} />
                <Route path="orders" element={<Order />} />
                <Route path="issues" element={<Issue />} />
                <Route path="report-issue" element={<ReportIssue />} />
                <Route path="customers" element={<Customer />} />
                <Route path="staffs" element={<Staff />} />
            </Route>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    );
}

export default App;
