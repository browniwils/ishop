import InventoryItem from "../../components/utilities/ListItem";
import SearchBar from "../../components/utilities/DashSearchBar";
function Staff() {
    return (
        <div className="d-body">
            <SearchBar placeholder="staffs" />
            <div className="d-table">
                <div className="d-table__header">
                    <span className="d-table__cell">ID</span>
                    <span className="d-table__cell">Image</span>
                    <span className="d-table__cell">Name</span>
                    <span className="d-table__cell">Address</span>
                    <span className="d-table__cell">Level, status</span>
                </div>
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
            </div>
        </div>
    );
}

export default Staff;
