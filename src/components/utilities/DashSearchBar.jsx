function DashSearchBar({ placeholder }) {
    return (
        <div className="d-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="d-search__input" placeholder={`Search ${placeholder}...`} />
        </div>
    );
}

export default DashSearchBar;
