import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";
function Header() {
        return (
            <div className="container-f">
                <nav className="navbar navbar-expand-lg navbar-dark bd-color">  
                    <Link to="/about" className="nav-link">About</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/home" className="nav-link">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/game" className="nav-link">Game</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/disable" className="nav-link">Disabled</Link>
                            </li>
                            <li>
                                <Link to="/count" className="nav-link">Counter</Link>
                            </li>
                            <li>
                                <Link to="/users" className="nav-link">Users</Link>
                            </li>
                            <li>
                                <Link to="/tccalculator" className="nav-link">Converter</Link>
                            </li>
                            <li>
                                <Link to="/adduser" className="nav-link">Add Users</Link>
                            </li>
                            <li>
                                <Link to="/products" className="nav-link">Product List</Link>
                            </li>
                            <li>
                                <Link to="mainsearch" className="nav-link">Search</Link>
                            </li>
                            <li>
                                <Link to="/context" className="nav-link">Context</Link>
                            </li>
                            <li>
                                <Link to="/assignment" className="nav-link">Assignment</Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link to="/login" className="nav-link">Login</Link> */}
                            <Link to="/login" className="btn btn-success">Login</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
                {/* <div className="footer">
                    <Footer />
                </div> */}
            </div>
        );
}

export default Header;