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
                        </ul>
                    </div>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
}

export default Header;