import { useNavigate } from "react-router-dom";

function InventoryItem() {
    const navigate = useNavigate();
    const viewItem = (id) => {
        const productId = "new"; //id
        navigate(`/overview/${productId}/item`);
    };
    return (
        <div onClick={viewItem} className="d-table__list">
            <span className="d-table__cell">48922</span>
            <span className="d-table__cell">Bag</span>
            <span className="d-table__cell">Red women hand bag</span>
            <span className="d-table__cell">1000</span>
            <span className="d-table__cell">300</span>
        </div>
    );
}

export default InventoryItem;
