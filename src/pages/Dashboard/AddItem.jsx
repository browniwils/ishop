function AddItem() {
    return (
        <div className="d-add">
            <div className="d-add__header">
                <span className="d-add__head active">Inventory</span>
                <span className="d-add__head">Customer</span>
                <span className="d-add__head">Staff</span>
                <span className="d-add__head">Issue</span>
            </div>
            <div className="d-add__body">
                <div className="d-add__element">
                    <div className="d-add__photo-container">
                        <div className="d-add__photo">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div className="d-add__photo-button">add photo</div>
                    </div>
                    <div className="d-add__description-container">
                        <div className="d-add__title">
                            <input type="text" placeholder="Item Title" />
                        </div>
                        <div className="d-add__desc-container">
                            <div className="d-add__description">
                                <textarea name="item-desc" placeholder="Item description"></textarea>
                            </div>
                            <div className="size-n-button">
                                <div className="d-add__size-container">
                                    <div>
                                        <span>S</span>
                                        <input id="small" title="small" type="checkbox" />
                                        <label for="small" name="small" className="d-radio"></label>
                                    </div>
                                    <div>
                                        <span>M</span>
                                        <input id="medium" name="medium" title="medium" type="checkbox" />
                                        <label for="medium" className="d-radio"></label>
                                    </div>
                                    <div>
                                        <span>L</span>
                                        <input id="large" title="large" name="large" type="checkbox" />
                                        <label for="large" className="d-radio"></label>
                                    </div>
                                    <div>
                                        <span>XL</span>
                                        <input id="x-large" name="x-large" title="x-large" type="checkbox" />
                                        <label for="x-large" className="d-radio"></label>
                                    </div>
                                    <div>
                                        <span>XXL</span>
                                        <input id="xx-large" name="xx-large" title="xx-large" type="checkbox" />
                                        <label for="xx-large" className="d-radio"></label>
                                    </div>
                                    <div>
                                        <span>XXXL</span>
                                        <input id="xxx-large" name="xxx-large" title="xxx-large" type="checkbox" />
                                        <label for="xxx-large" className="d-radio"></label>
                                    </div>
                                </div>

                                <button type="button" className="btn__add">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddItem;
