import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap';
import Button from "../components/Button";
import StatusButton from "../components/StatusButton";

function History(props) {

    const loaded = () => {
        console.log(props.tasks);
        let filteredCompleteTasks = props.tasks.filter((check) => check.status === "Complete")
        console.log(filteredCompleteTasks);
        return filteredCompleteTasks.map((task, index) => (
            <div key={task._id} className="task card card-body">
                <Link to={`/tasks/${task._id}`}>
                    <h4>SO #: {task.salesOrder}</h4>
                </Link>
                <h4>Customer: {task.customer}</h4>
                <h6>Assembly #: {task.assemblyNumber}</h6>
                <h6>Assembly Qty: {task.assemblyQty}</h6>
                <Button task={task}/>
                <StatusButton task={task}/>
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
            <div className="card-container">
                {props.tasks ? loaded() : loading()}
            </div>
        </section>
    );
};

export default History;