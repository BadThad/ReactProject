import {Link} from  'react-router-dom';

function Navbar () {
    return (
        <div>
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