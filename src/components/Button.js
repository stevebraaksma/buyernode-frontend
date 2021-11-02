import { useEffect, useState } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';




// const handleChange = (event) => {
//     setNewForm((prevState) => ({
//         ...prevState,
//         [event.target.name]: event.target.value
        
//     }));
// };


const Button = (props) => {
    
    
    // const [ value, setValue ]=useState(props.task.userWorking);
    const [tasks, setTasks] = useState(null);

    const handleSelect=(event)=> {
        // console.log(event);
        // console.log(props.task.userWorking);
        props.task.userWorking = event;
        // console.log(props.task.userWorking)
        // console.log(props.task)
        
       
        // ****this one may not be necessary or may be duplicated
        // setValue(event);
        // console.log(event)
        updateTasks();
        
    }
    

    const URL = "https://buyernode.herokuapp.com/tasks";

    const getTasks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setTasks(data);
    }

    const createTasks = async (task) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(task),
        });
        // update task list
        getTasks();
    }

// need to figure out how to get id to be correct
    const updateTasks = async (task, id) => {
        console.log('bingo')
        console.log(props.task.userWorking)
        console.log(props)  // this has what I need!!!!!
        console.log(props.task)
        console.log(props.task._id)
        const selectedId = props.task._id

        const destructuredTask = {
            userWorking: props.task.userWorking
        }
        console.log(destructuredTask);
        await fetch(URL + "/" + selectedId, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(destructuredTask),
        });  
         // commented out, we still work******
        // update list of tasks
        // getTasks();
        // console.log('bingobingo')
    };

    // const deleteTasks = async (id) => {
    //     await fetch(URL + "/" + id, {
    //         method: "DELETE",
    //     });
    //     // update list of tasks
    //     getTasks();
    // };

    

    // useEffect(() => {
    //     console.log("mrstateus");
    // }, [value]);


    return (
        // <a href={props.url} className="btn btn-primary">Info</a>



        <div className="dropdown-buyer">
            <DropdownButton 
                id="dropdown-basic-button" 
                title="Select" 
                onSelect={handleSelect} 
            >
                <Dropdown.Item eventKey="Buyer #1">Buyer 1</Dropdown.Item>
                <Dropdown.Item eventKey="Buyer #2">Buyer 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Buyer 3</Dropdown.Item>
            </DropdownButton>
            {/* <h4>You selected {value}</h4> */}
        </div>

    )
}

export default Button;