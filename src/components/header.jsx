import React from "react";

function Header() {
    return(
        <div className="container-f">
            <nav className="navbar navbar-expand-lg navbar-dark bd-color">  
                <a className="navbar-brand" href="#">About</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Disabled</a>
                        </li>
                    </ul>
                     {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>  */}
                </div>

                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Sign up</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Login</a>
                    </li>
                </ul>
                
            </nav>
        </div>
    );
}

export default Header;