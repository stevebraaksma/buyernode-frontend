import { useState } from 'react';


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

    return (
        <div className="task">
            <h3>SO #: {task.salesOrder}</h3>
            <h3>Customer: {task.customer}</h3>
            <h3>Assembly #: {task.assemblyNumber}</h3>
            <h3>Assembly Qty: {task.assemblyQty}</h3>
            <button>Buyer</button> 
            <button>Notes</button>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={editForm.salesOrder} 
                    name="salesOrder"
                    placeholder="Sales Order #"
                    onChange={handleChange}
                />
            <input type="submit" value="Update Task"/>
            </form>
        </div>
    )
}

export default Show;