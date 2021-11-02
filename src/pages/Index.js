import { Link } from "react-router-dom";
import { useState } from "react";
// import Card from "../components/Card";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap';
import Button from "../components/Button";


function Index(props) {
    const [newForm, setNewForm] = useState({
        salesOrder: "",
        customer: "",
        assemblyNumber: "",
        assemblyQty: "", 
        userWorking: "Default", 
        status: "WIP",
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
                <h6>Assembly #: {task.assemblyNumber}</h6>
                <h6>Assembly Qty: {task.assemblyQty}</h6>
                <h4>Buyer: {task.userWorking}</h4>
                
                <Button task={task}/>

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
            <br />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newForm.salesOrder} 
                    name="salesOrder" 
                    placeholder="Sales Order #" 
                    onChange={handleChange} 
                /> <br />
                <input 
                    type="text" 
                    value={newForm.customer} 
                    name="customer" 
                    placeholder="Customer" 
                    onChange={handleChange} 
                /> <br />                
                <input 
                    type="text" 
                    value={newForm.assemblyNumber} 
                    name="assemblyNumber" 
                    placeholder="Assembly #" 
                    onChange={handleChange} 
                /> <br />
                <input 
                    type="text" 
                    value={newForm.assemblyQty} 
                    name="assemblyQty" 
                    placeholder="Assembly Qty" 
                    onChange={handleChange} 
                /> <br />    
                <input className="btn btn-primary" type="submit" value="    Create New Task    "/>
            </form>
            <br />
            <div className="card-container">
                {props.tasks ? loaded() : loading()}
            </div>






        </section>
    );
};

export default Index;