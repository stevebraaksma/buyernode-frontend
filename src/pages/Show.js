import { useState } from 'react';
import 'bootstrap';
// import { Button } from 'bootstrap';

function Show(props) {
    const id = props.match.params.id;
    const tasks = props.tasks;
    console.log(props.tasks);
    const task = tasks.find((p) => p._id === id);
    
    const [editForm, setEditForm] = useState(task);

    const handleChange = (event) => {
        setEditForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateTasks(editForm, task._id);
        props.history.push('/');
    };

    const removeTask = () => {
        props.deleteTasks(task._id);
        props.history.push("/");
    }

    return (
        <div className="task">
            <h3>SO #: {task.salesOrder}</h3>
            <h3>Customer: {task.customer}</h3>
            <h3>Assembly #: {task.assemblyNumber}</h3>
            <h3>Assembly Qty: {task.assemblyQty}</h3>


            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={editForm.salesOrder} 
                    name="salesOrder"
                    placeholder="Sales Order #"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={editForm.customer} 
                    name="customer"
                    placeholder="Customer"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={editForm.assemblyNumber} 
                    name="assemblyNumber"
                    placeholder="Assembly #"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={editForm.assemblyQty} 
                    name="assemblyQty"
                    placeholder="Assembly Qty"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={editForm.userWorking} 
                    name="userWorking"
                    placeholder="Buyer"
                    onChange={handleChange}
                />








            <input type="submit" value="Update Task"/>
            </form>

            <br />   
            <button id="delete" onClick={removeTask}>
                DELETE
            </button>
            


        </div>
    )
}

export default Show;