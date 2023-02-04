import { Outlet } from "react-router-dom";
import DashCard from "../../components/utilities/DashCard";
import DashCustomer from "../../components/utilities/DashCustomer";
import DashItem from "../../components/utilities/DashItem";
import DashProductItem from "../../components/utilities/DashProductItem";

function AdminMain({ cards }) {
    return (
        <div className="d-body">
            <div className="d-row">
                {cards.map((card) => (
                    <DashCard key={card.title} title={card.title} quantity={card.quantity} />
                ))}
            </div>
            <Outlet />
            <div className="d-row">
                <div className="d-item__list">
                    <p className="d-item__title">Inventories Activity</p>
                    <DashItem title="Women's Bag" quantity="+15" />
                </div>
                <div className="d-item__list">
                    <p className="d-item__title">Recent Sales</p>
                    <DashItem title="Rolex watch" quantity="122" />
                </div>
                <div className="d-item__list">
                    <p className="d-item__title">Recent Orders</p>
                    <DashItem title="iPhone 12 Pro Max" quantity="8022" />
                </div>
                <div className="d-item__list">
                    <p className="d-item__title">New Customers</p>
                    <DashCustomer name={"Alice"} address={"Califonia, United States"} photo="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=" />
                </div>
            </div>
        </div>
    );
}

function UserMain({ cards }) {
    return (
        <div className="d-user__body">
            <p className="featured">Featured products</p>
            <div className="d-row">
                {cards.map((product) => (
                    <DashCard key={product.title} title={product.title} quantity={product.quantity} />
                ))}
            </div>
            <p className="featured">Recently added</p>
            <Outlet />
        </div>
    );
}
function Main({ isAdmin, cards }) {
    return isAdmin ? <AdminMain cards={cards} /> : <UserMain cards={cards} />;
}
export default Main;
