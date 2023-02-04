import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Dashboard/Main";
import NotFound404 from "./pages/404";

// components
import Message from "./components/Message";
import AddItem from "./components/AddItem";
import Inventory from "./components/Inventory";
import Sale from "./components/Sale";
import Order from "./components/Order";
import Customer from "./components/Customer";
import Issue from "./components/Issue";
import ReportIssue from "./components/ReportIssue";
import Staff from "./components/Staff";

// styles
import "./styles/global.css";

// import dummy data
import { admin, user } from "./DummyData";

function App() {
    const [isAdmin /*setIsAdmin*/] = useState(true);
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="dashboard" element={<Dashboard dashInfo={isAdmin ? admin : user} />}>
                <Route path="" element={<Main isAdmin={isAdmin} cards={isAdmin ? admin.dashCards : user.dashCards} content={isAdmin ? admin.recents : user.products} />} />
            </Route>
            <Route path="messages" element={<Message />} />
            <Route path="add-items" element={<AddItem />} />
            <Route path="inventories" element={<Inventory />} />
            <Route path="sales" element={<Sale />} />
            <Route path="orders" element={<Order />} />
            <Route path="issues" element={<Issue />} />
            <Route path="report-issues" element={<ReportIssue />} />
            <Route path="customers" element={<Customer />} />
            <Route path="staffs" element={<Staff />} />
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    );
}

export default App;
