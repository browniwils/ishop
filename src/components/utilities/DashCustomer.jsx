function DashCustomer({ name, address, photo }) {
    return (
        <div className="d-item">
            <div className="d-customer">
                <p className="d-customer__name">{name}</p>
                <p className="d-customer__address">{address}</p>
            </div>
            <div className="d-customer-dp">
                <img className="d-user__img" src={photo} alt={name} />
            </div>
        </div>
    );
}

export default DashCustomer;
