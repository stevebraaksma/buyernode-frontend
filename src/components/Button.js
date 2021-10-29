import { useState } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Button = (props) => {

    const [ value, setValue ]=useState("buyer-from-db");
    const handleSelect=(event)=> {
        console.log(event);
        console.log(props.customer);
        setValue(event);
    }




    return (
        // <a href={props.url} className="btn btn-primary">Info</a>


        <div className="dropdown-buyer">
            <DropdownButton 
                id="dropdown-basic-button" 
                title="Select" 
                onSelect={handleSelect} 
            >
                <Dropdown.Item eventKey="action-1">Buyer 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Buyer 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Buyer 3</Dropdown.Item>
            </DropdownButton>
            <h4>You selected {value}</h4>
        </div>

    )
}

export default Button;