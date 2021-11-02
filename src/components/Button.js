import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Button = (props) => {

    const handleSelect=(event)=> {
        props.task.userWorking = event;
        updateTasks();
    }
    
    const URL = "https://buyernode.herokuapp.com/tasks";


// update userWorking as per selected dropdown
    const updateTasks = async (task, id) => {
        const selectedId = props.task._id
        const destructuredTask = {
            userWorking: props.task.userWorking
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
        <div className="dropdown-buyer">
            <DropdownButton 
                id="dropdown-basic-button" 
                title="Change Buyer" 
                onSelect={handleSelect} 
            >
                <Dropdown.Item eventKey="Buyer #1">Buyer 1</Dropdown.Item>
                <Dropdown.Item eventKey="Buyer #2">Buyer 2</Dropdown.Item>
                <Dropdown.Item eventKey="Buyer #3">Buyer 3</Dropdown.Item>
            </DropdownButton>
            <br />
        </div>
    )
}

export default Button;