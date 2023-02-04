function DashProductItem({ title, price, image }) {
    return (
        <div className="d-product__item">
            <img src={image} alt={title} />
            <div className="product-description">
                <div className="d-desc">
                    <span className="d-price">$ {price} </span>
                </div>
                <h6 className="d-product-title">{title}</h6>
                <span className="d-product-info">click for more</span>
            </div>
        </div>
    );
}

export default DashProductItem;
