import {Link} from  'react-router-dom';

import "./navbar.css";

function Navbar () {
    return (
        <div className = "navbar-container">
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to ="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar