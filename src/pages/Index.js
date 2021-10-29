import { Link } from "react-router-dom";
import { useState } from "react";
// import Card from "../components/Card";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap';


function Index(props) {
    const [newForm, setNewForm] = useState({
        salesOrder: "",
        customer: "",
        assemblyNumber: "",
        assemblyQty: "", 
        userWorking: "Default", 
        notes: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
            
        }));
    };

    

    // handleSubmit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createTasks(newForm);
        console.log(newForm);
        setNewForm({
            salesOrder: "",
            customer: "",
            assemblyNumber: "",
            assemblyQty: "", 
            userWorking: "", 
            notes: "",           
        });
    };

    const loaded = () => {
        
        return props.tasks.map((task, index) => (
            // <Card 
            // key={index} 
            // {...task}
            // />

            <div key={task._id} className="task card card-body">
                <Link to={`/tasks/${task._id}`}>
                    <h4>SO #: {task.salesOrder}</h4>
                </Link>
                <h4>Customer: {task.customer}</h4>
                <h4>Assembly #: {task.assemblyNumber}</h4>
                <h4>Assembly Qty: {task.assemblyQty}</h4>
                <h4>Buyer: {task.userWorking}</h4>
                

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Notes</Accordion.Header>
                            <Accordion.Body>
                                {task.notes}
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

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
                    name="salesOrder" 
                    placeholder="Sales Order #" 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    value={newForm.customer} 
                    name="customer" 
                    placeholder="Customer" 
                    onChange={handleChange} 
                />                
                <input 
                    type="text" 
                    value={newForm.assemblyNumber} 
                    name="assemblyNumber" 
                    placeholder="Assembly #" 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    value={newForm.assemblyQty} 
                    name="assemblyQty" 
                    placeholder="Assembly Qty" 
                    onChange={handleChange} 
                />    
                <input 
                    type="hidden" 
                    value="Default" 
                    name="userWorking" 
                    placeholder="Buyer" 
                    onChange={handleChange} 
                />
                <input 
                    type="hidden" 
                    value="" 
                    name="notes" 
                    placeholder="Notes" 
                    onChange={handleChange} 
                />

                <input type="submit" value="Create Task"/>
            </form>


            <div className="card-container">
                {props.tasks ? loaded() : loading()}
            </div>






        </section>
    );
};

export default Index;