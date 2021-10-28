import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";


function Main(props) {
    const [tasks, setTasks] = useState(null);

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


    const updateTasks = async (task, id) => {
        await fetch(URL + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(task),
        });    
        // update list of tasks
        getTasks();
        
    };

    const deleteTasks = async (id) => {
        await fetch(URL + "/" + id, {
            method: "DELETE",
        });
        // update list of tasks
        getTasks();
    };

    useEffect(() => getTasks(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index tasks={tasks} createTasks={createTasks} />
                </Route>
                <Route 
                    path="/tasks/:id" 
                    render={(rp) => (
                        <Show 
                            tasks={tasks} 
                            updateTasks={updateTasks} 
                            deleteTasks={deleteTasks} 
                            {...rp} 
                        />
                    )} 
                />
            </Switch>
        </main>
    );
};

export default Main;