import { Link } from "react-router-dom";
import { useState } from "react";



function Index(props) {
    const [newForm, setNewForm] =useState({
        salesOrder: "",
        customer: "",
        assemblyNumber: "",
        assemblyQty: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    // handleSubmit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createTask(newForm);
        setNewForm({
            salesOrder: "",
            customer: "",
            assemblyNumber: "",
            assemblyQty: "",            
        });
    };






    const loaded = () => {
        return props.tasks.map((task) => (
            <div key={task._id} className="task">
                <Link to={`/tasks/${task._id}`}>
                    <h1>{task.salesOrder}</h1>
                </Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newForm.salesOrder} 
                    placeholder="Sales Order #" 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={newForm.customer} 
                    placeholder="Customer" 
                    onChange={handleChange}
                />                
                <input 
                    type="text" 
                    value={newForm.assemblyNumber} 
                    placeholder="Assembly #" 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    value={newForm.assemblyQty} 
                    placeholder="Assembly Qty" 
                    onChange={handleChange}
                />                

            </form>
            {props.tasks ? loaded() : loading()}
        </section>
    );
};

export default Index;