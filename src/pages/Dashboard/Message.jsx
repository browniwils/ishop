import InventoryItem from "../../components/utilities/ListItem";

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../../components/utilities/DashSearchBar";

function Message() {
    // const [composeNewMessage, setComposeNewMessage] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const toggleComposeMessage = () => {
        navigate(pathname + "/compose-new-message");
    };
    return (
        <div className="d-body">
            <SearchBar placeholder="messages" />
            <div className="d-table">
                <div className="d-table__header">
                    <span className="d-table__cell">ID</span>
                    <span className="d-table__cell">Subject</span>
                    <span className="d-table__cell">Message</span>
                    <span className="d-table__cell">Sender</span>
                    <span className="d-table__cell">
                        <i className="fa-solid fa-paperclip"></i>Attach
                    </span>
                </div>
                <InventoryItem />
            </div>
            <div onClick={toggleComposeMessage} className="d-compose-message">
                <i className="fa-solid fa-pencil"></i>
            </div>
            <Outlet />
        </div>
    );
}

export default Message;
