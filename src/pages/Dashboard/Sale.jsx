import InventoryItem from "../../components/utilities/ListItem";
import SearchBar from "../../components/utilities/DashSearchBar";
function Sale() {
    return (
        <div className="d-body">
            <SearchBar placeholder="sales" />
            <div className="d-table">
                <div className="d-table__header">
                    <span className="d-table__cell">ID</span>
                    <span className="d-table__cell">Items</span>
                    <span className="d-table__cell">Purchased by</span>
                    <span className="d-table__cell">Quantity</span>
                    <span className="d-table__cell">Total Amount</span>
                </div>
                <InventoryItem />
            </div>
        </div>
    );
}

export default Sale;
