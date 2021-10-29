// import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";



function Index(props) {
    const [newForm, setNewForm] = useState({
        salesOrder: "",
        customer: "",
        assemblyNumber: "",
        assemblyQty: "",
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
        });
    };

    const loaded = () => {
        
        return props.tasks.map((task, index) => (
            <Card 
            key={index} 
            {...task}
            />

            // <div key={task._id} className="task card card-body">
            //     <Link to={`/tasks/${task._id}`}>
            //         <h4>SO #: {task.salesOrder}</h4>
            //     </Link>
            //     <h4>Customer: {task.customer}</h4>
            //     <h4>Assembly #: {task.assemblyNumber}</h4>
            //     <h4>Assembly Qty: {task.assemblyQty}</h4>
            //     <button className="btn btn-primary">Buyer</button> 
            //     <button>Notes</button>
            // </div>

        ));
        
    };
    


    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>



            <div className="container-fluid">
                <input 
                    type="text" 
                    value={newForm.salesOrder} 
                    name="salesOrder" 
                    placeholder="Sales Order #" 
                    onChange={handleChange} 
                />
            </div>



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
                <input type="submit" value="Create Task"/>
            </form>


            <div className="card-container">
                {props.tasks ? loaded() : loading()}
            </div>





            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>




        </section>
    );
};

export default Index;