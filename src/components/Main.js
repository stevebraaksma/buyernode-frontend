import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";


function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/tasks/:id" render={(rp) => <Show {...rp} />} />
            </Switch>
        </main>




    )



}

export default Main;