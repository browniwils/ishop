function ReportIssue() {
    return (
        <div className="d-add">
            <div className="d-issue_body">
                <div className="d-add__title">
                    <input type="text" placeholder="Item Title" />
                </div>
                <div className="d-add__description">
                    <textarea name="item-desc" placeholder="Item description"></textarea>
                </div>
                <button type="button" className="btn__add">
                    Report Issue
                </button>
            </div>
        </div>
    );
}

export default ReportIssue;
