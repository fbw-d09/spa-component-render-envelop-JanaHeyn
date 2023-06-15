import './AddressLabel.scss';

export const AddressLabel = ({ name, address, city }) => {

    return(
        <div className="AddressLabel">
            <p className="Name">{name}</p>
            <p className="Address">{address}</p>
            <p className="City">{city}</p>
        </div>
    )
}