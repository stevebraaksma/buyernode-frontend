import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

const Button = (props) => {

    // const [history, setHistory] = useState(null);
    const [tasks, setTasks] = useState(null);
    const [currentBuyer, setCurrentBuyer] = useState(props.task.userWorking);
    console.log(currentBuyer);
    console.log(tasks);


    const URL = "https://buyernode.herokuapp.com/tasks";

    const getTasks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log('bong')
        setTasks(data);
        // hit the home page
        

    }

    const handleSelect=(event)=> {
        props.task.userWorking = event;
        updateTasks();
        setCurrentBuyer(event);
    }
    
    


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
        // update list of tasks
        console.log('bingbing')
        getTasks();
    };

    


    return (
        <div className="dropdown-buyer">
            <h4>Buyer: {currentBuyer}</h4>
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