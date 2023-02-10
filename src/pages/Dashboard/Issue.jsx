import IssueItem from "../../components/utilities/ListItem";
import SearchBar from "../../components/utilities/DashSearchBar";
function Issue() {
    // get header titles with for keys in object loop and store it in a variable
    return (
        <div className="d-body">
            <SearchBar placeholder="issues" />
            <div className="d-table">
                <div className="d-table__header">
                    <span className="d-table__cell">ID</span>
                    <span className="d-table__cell">Issue</span>
                    <span className="d-table__cell">Description</span>
                    <span className="d-table__cell">Severity</span>
                    <span className="d-table__cell">Status</span>
                </div>
                <IssueItem />
                <IssueItem />
                <IssueItem />
                <IssueItem />
                <IssueItem />
                <IssueItem />
                <IssueItem />
                <IssueItem />
                <IssueItem />
                <IssueItem />
                <IssueItem />
                <IssueItem />
            </div>
        </div>
    );
}

export default Issue;
