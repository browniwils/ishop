function DashItem({ title, quantity }) {
    return (
        <div className="d-item">
            <p>{title}</p>
            <span className="d-item__increase">{quantity}</span>
        </div>
    );
}

export default DashItem;
