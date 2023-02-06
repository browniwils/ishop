import InventoryItem from "../../components/utilities/InventoryItem";

function Inventory() {
    return (
        <div className="d-body">
            <div className="d-search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input className="d-search__input" placeholder="Search..." />
            </div>

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
