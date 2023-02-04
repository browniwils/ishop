import { useState } from "react";

import Logo from "../components/utilities/Logo";
import DashNav from "../components/utilities/DashNav";
import DashHeader from "../components/utilities/DashHeader";
import DashCard from "../components/utilities/DashCard";
import DashItem from "../components/utilities/DashItem";
import DashProductItem from "../components/utilities/DashProductItem";

function UserDashboard() {
    const [dashInfo] = useState();
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
                <DashHeader dashInfo={dashInfo} />
                <div className="d-user__body">
                    <p className="featured">Featured products</p>
                    <div className="d-row">
                        {products.map((product) => (
                            <DashCard key={product.title} title={product.title} quantity={product.quantity} />
                        ))}
                    </div>
                    <p className="featured">Recently added</p>
                    <div className="d-product-container">
                        <div className="d-row">
                            <DashProductItem title={"Women Hand Bag"} price={120} image={"https://images.unsplash.com/photo-1650781593595-562a2f8cce3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
                            <DashProductItem title={"Women Hand Bag"} price={120} image={"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
                            <DashProductItem title={"Women Hand Bag"} price={120} image={"https://images.unsplash.com/photo-1628149455678-16f37bc392f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVucyUyMGhhbmQlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                            <DashProductItem title={"Women Hand Bag"} price={120} image={"https://images.unsplash.com/photo-1560891958-68bb1fe7fb78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
                            <DashProductItem title={"Women Hand Bag"} price={120} image={"https://images.unsplash.com/photo-1628149455678-16f37bc392f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVucyUyMGhhbmQlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                            <DashProductItem title={"Women Hand Bag"} price={120} image={"https://images.unsplash.com/photo-1603009135528-7ad60fc1ffe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
                            <DashProductItem title={"Women Hand Bag"} price={120} image={"https://images.unsplash.com/photo-1628149455678-16f37bc392f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVucyUyMGhhbmQlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                            <DashProductItem title={"Women Hand Bag"} price={120} image={"https://images.unsplash.com/photo-1628149455678-16f37bc392f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVucyUyMGhhbmQlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                            <DashProductItem title={"Women Hand Bag"} price={120} image={"https://images.unsplash.com/photo-1628149455678-16f37bc392f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVucyUyMGhhbmQlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />
                        </div>
                        <div className="d-item__list">
                            <p className="d-item__title">Popular products</p>
                            <DashItem title="Women's Bag" quantity="+15" />
                            <DashItem title="iPhone 12 Pro Max" quantity="8022" />
                            <DashItem title="Rolex watch" quantity="122" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;
