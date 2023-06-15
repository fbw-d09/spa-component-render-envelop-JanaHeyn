import './Envelope.scss';
import { AddressLabel } from './../AddressLabel/AddressLabel';
import { Stamp } from './../Stamp/Stamp';

export const Envelope = ({ toPerson, fromPerson}) => {
    return(
        <div className="Envelope">
            <AddressLabel name={fromPerson.name} address={fromPerson.address} city={fromPerson.city}/>
            <AddressLabel name={toPerson.name} address={toPerson.address} city={toPerson.city}/>
            <Stamp/>
        </div>
    )

}