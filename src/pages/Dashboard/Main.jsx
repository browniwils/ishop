import DashCard from "../../components/utilities/DashCard";
import DashCustomer from "../../components/utilities/DashCustomer";
import DashItem from "../../components/utilities/DashItem";
import DashProductItem from "../../components/utilities/DashProductItem";

function AdminMain({ cards, recentElements }) {
    return (
        <div className="d-body">
            <div className="d-row">
                {cards.map((card, i) => (
                    <DashCard key={i} title={card.title} quantity={card.quantity} />
                ))}
            </div>
            <div className="d-row">
                {recentElements.map((element, index) => (
                    <div key={index} className="d-item__list">
                        <p className="d-item__title">{element.title}</p>
                        {element.items.map((item, i) => (item?.name ? <DashCustomer key={i} name={item.name} address={item.address} photo={item.photo} /> : <DashItem key={i} title={item.title} quantity={item.quantity} />))}
                    </div>
                ))}
            </div>
        </div>
    );
}

function UserMain({ cards, products }) {
    const productElements = products.items;
    const productPopular = products.popular;

    return (
        <div className="d-user__body">
            <p className="featured">Featured products</p>
            <div className="d-row">
                {cards.map((product, i) => (
                    <DashCard key={i} title={product.title} quantity={product.quantity} />
                ))}
            </div>
            <p className="featured">Recently added</p>
            <div className="d-product-container">
                <div className="d-product-container__row">
                    {productElements.map((product, i) => (
                        <DashProductItem key={i} title={product.title} price={product.price} image={product.image} />
                    ))}
                </div>
                <div className="d-item__list">
                    <p className="d-item__title">Popular products</p>
                    {productPopular.map((product, i) => (
                        <DashItem key={i} title={product.title} quantity={product.quantity} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Main({ isAdmin, cards, content }) {
    return isAdmin ? <AdminMain cards={cards} recentElements={content} /> : <UserMain cards={cards} products={content} />;
}

export default Main;
