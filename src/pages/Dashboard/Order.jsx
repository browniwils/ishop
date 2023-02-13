import InventoryItem from "../../components/utilities/ListItem";
import SearchBar from "../../components/utilities/DashSearchBar";
function Order() {
    return (
        <div className="d-body">
            <SearchBar placeholder="orders" />
            <div className="d-table">
                <div className="d-table__header">
                    <span className="d-table__cell">ID</span>
                    <span className="d-table__cell">No. of Items</span>
                    <span className="d-table__cell">Orderd by</span>
                    <span className="d-table__cell">Date</span>
                    <span className="d-table__cell">Status</span>
                </div>
                <InventoryItem />
            </div>
        </div>
    );
}

export default Order;
