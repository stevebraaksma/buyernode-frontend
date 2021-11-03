import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

const StatusButton = (props) => {
    

    const [currentStatus, setCurrentStatus] = useState(props.task.status);
    console.log(currentStatus);

    const handleSelect=(event)=> {
        props.task.status = event;
        updateTasks();
        setCurrentStatus(event);
        // here, we should be able to just delete it from the DOM. It has been sent to the 
        // database, so that is the source of truth, and it will still be there.
        // look at Traversy media task manager for example.
        console.log(event)
        console.log(props)
        console.log(props.task._id)
        
    }
    
    const URL = "https://buyernode.herokuapp.com/tasks";


// update status as per selected dropdown
    const updateTasks = async (task, id) => {
        const selectedId = props.task._id
        const destructuredTask = {
            status: props.task.status
        }
        await fetch(URL + "/" + selectedId, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(destructuredTask),
        });  
    };

    return (
        <div className="dropdown-status">
            <h4>Status: {currentStatus}</h4>
            <DropdownButton 
                id="dropdown-basic-button" 
                title="Change Status" 
                onSelect={handleSelect} 
            >
                <Dropdown.Item eventKey="Complete">Complete</Dropdown.Item>
                <Dropdown.Item eventKey="WIP">WIP</Dropdown.Item>
            </DropdownButton>
            <br />
        </div>
    )
}

export default StatusButton;