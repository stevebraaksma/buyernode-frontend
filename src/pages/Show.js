import { useState } from 'react';
import 'bootstrap';

function Show(props) {
    const id = props.match.params.id;
    const tasks = props.tasks;
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
            <br />
            <p>Created: {task.createdAt}</p>

            <form onSubmit={handleSubmit}>
                <label>SO #:</label>
                <input 
                    type="text" 
                    value={editForm.salesOrder} 
                    name="salesOrder"
                    placeholder="Sales Order #"
                    onChange={handleChange}
                /> <br />
                <label>Customer:</label>
                <input 
                    type="text" 
                    value={editForm.customer} 
                    name="customer"
                    placeholder="Customer"
                    onChange={handleChange}
                /> <br />
                <label>Assembly #:</label>
                <input 
                    type="text" 
                    value={editForm.assemblyNumber} 
                    name="assemblyNumber"
                    placeholder="Assembly #"
                    onChange={handleChange}
                /> <br />
                <label>Assembly Qty:</label>
                <input 
                    type="text" 
                    value={editForm.assemblyQty} 
                    name="assemblyQty"
                    placeholder="Assembly Qty"
                    onChange={handleChange}
                /> <br />
                <label>Buyer:</label>
                <input 
                    type="text" 
                    value={editForm.userWorking} 
                    name="userWorking"
                    placeholder="Buyer"
                    onChange={handleChange}
                /> <br/>
                <label className="text-area-label">Notes:</label><br />
                <textarea 
                    rows="4" 
                    cols="35"
                    type="notes" 
                    value={editForm.notes} 
                    name="notes"
                    placeholder="Notes"
                    onChange={handleChange}
                />
            <br />
            <input className="btn btn-primary" type="submit" value="Update Task"/>
            </form>
            <br />   
            <button className="btn btn-danger" id="delete" onClick={removeTask}>
                DELETE
            </button>
        </div>
    )
}

export default Show;