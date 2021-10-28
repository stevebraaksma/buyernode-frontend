
import { Link } from "react-router-dom";


function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div><h2>BuyerNode (home)</h2></div>
            </Link>
        </nav>
    )
}

export default Header;
