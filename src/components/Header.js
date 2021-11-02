
import { Link } from "react-router-dom";


function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div><h2>BuyerNode</h2></div>
            </Link>
            <Link to="/history">
                <div><h3>History</h3></div>
            </Link>
        </nav>
    )
}

export default Header;
