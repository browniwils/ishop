import InventoryItem from "../../components/utilities/ListItem";
import SearchBar from "../../components/utilities/DashSearchBar";

function Favorite() {
    return (
        <div className="d-body">
            <SearchBar placeholder="my favorites" />
            <div className="d-table">
                <div className="d-table__header">
                    <span className="d-table__cell">Item ID</span>
                    <span className="d-table__cell">Title</span>
                    <span className="d-table__cell">Description</span>
                    <span className="d-table__cell">Stock status</span>
                    <span className="d-table__cell">Current price</span>
                </div>
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
            </div>
        </div>
    );
}

export default Favorite;
