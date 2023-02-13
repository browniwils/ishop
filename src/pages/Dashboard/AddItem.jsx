import { useState } from "react";

function Add({ titlePlaceholder, descPlaceholder, tabHeader }) {
    return (
        <div className="d-add__element">
            {tabHeader !== tabHeaders[tabHeaders.length - 1].id && (
                <div className="d-add__photo-container">
                    <div className="d-add__photo">
                        <i className={`fa-solid ${tabHeader === tabHeaders[0].id ? "fa-box-open-full" : tabHeader !== tabHeaders[tabHeaders.length - 1].id ? "fa-user" : ""}`}></i>
                    </div>
                    <div className="d-add__photo-button">add photo</div>
                </div>
            )}
            <div className="d-add__description-container">
                <div className="d-add__title">
                    <input type="text" placeholder={titlePlaceholder} />
                </div>
                <div className="d-add__desc-container" style={{ gap: tabHeader !== tabHeaders[0].id ? "unset" : "var(--gap)" }}>
                    <div className="d-add__description">
                        <textarea name="item-desc" placeholder={descPlaceholder}></textarea>
                    </div>
                    {tabHeader === tabHeaders[0].id && (
                        <div className="size-n-button">
                            <div className="d-add__size-container">
                                <div>
                                    <span>S</span>
                                    <input id="small" title="small" type="checkbox" />
                                    <label htmlFor="small" name="small" className="d-radio"></label>
                                </div>
                                <div>
                                    <span>M</span>
                                    <input id="medium" name="medium" title="medium" type="checkbox" />
                                    <label htmlFor="medium" className="d-radio"></label>
                                </div>
                                <div>
                                    <span>L</span>
                                    <input id="large" title="large" name="large" type="checkbox" />
                                    <label htmlFor="large" className="d-radio"></label>
                                </div>
                                <div>
                                    <span>XL</span>
                                    <input id="x-large" name="x-large" title="x-large" type="checkbox" />
                                    <label htmlFor="x-large" className="d-radio"></label>
                                </div>
                                <div>
                                    <span>XXL</span>
                                    <input id="xx-large" name="xx-large" title="xx-large" type="checkbox" />
                                    <label htmlFor="xx-large" className="d-radio"></label>
                                </div>
                                <div>
                                    <span>XXXL</span>
                                    <input id="xxx-large" name="xxx-large" title="xxx-large" type="checkbox" />
                                    <label htmlFor="xxx-large" className="d-radio"></label>
                                </div>
                            </div>
                            <button type="button" className="btn__add">
                                Add {tabHeader}
                            </button>
                        </div>
                    )}
                </div>
                {tabHeader !== tabHeaders[0].id && (
                    <button type="button" className="btn__add">
                        Add {tabHeader}
                    </button>
                )}
            </div>
        </div>
    );
}
const tabHeaders = [
    { id: "inventory", title: "Inventory", titlePlaceholder: "Add Item", descPlaceholder: "Enter item's description" },
    { id: "customer", title: "Customer", titlePlaceholder: "Add Customer", descPlaceholder: "Enter customer's address" },
    { id: "staff", title: "Staff", titlePlaceholder: "Add Staff", descPlaceholder: "Enter staff's address" },
    { id: "issue", title: "Issue", titlePlaceholder: "Add Issue", descPlaceholder: "Enter issue description" },
];
function AddItem() {
    const [tab, setTab] = useState(tabHeaders[0].id);

    const tabHandler = (tabAgr) => {
        if (tab === tabAgr) {
            return;
        }
        setTab(tabAgr);
    };
    return (
        <div className="d-add">
            <div className="d-add__header">
                {tabHeaders.map(({ id, title }) => (
                    <span key={id} onClick={() => tabHandler(id)} className={`d-add__head ${tab === id ? "active" : ""}`}>
                        {title}
                    </span>
                ))}
            </div>
            <div className="d-add__body">{tabHeaders.map(({ id, titlePlaceholder, descPlaceholder }) => tab === id && <Add key={id} titlePlaceholder={titlePlaceholder} descPlaceholder={descPlaceholder} tabHeader={tab} />)}</div>
        </div>
    );
}

export default AddItem;
