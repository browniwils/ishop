import InventoryItem from "../../components/utilities/ListItem";
import SearchBar from "../../components/utilities/DashSearchBar";

function Inventory() {
    // get header titles with for keys in object loop and store it in a variable
    return (
        <div className="d-body">
            <SearchBar placeholder="inventories" />
            <div className="d-table">
                <div className="d-table__header">
                    <span className="d-table__cell">ID</span>
                    <span className="d-table__cell">Item</span>
                    <span className="d-table__cell">Description</span>
                    <span className="d-table__cell">Stock</span>
                    <span className="d-table__cell">Price</span>
                </div>
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
            </div>
        </div>
    );
}

export default Inventory;
