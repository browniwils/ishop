function DashCard({ title, quantity }) {
    return (
        <div className="d-card__item">
            <p>{title}</p>
            <span>{quantity}</span>
        </div>
    );
}

export default DashCard;
