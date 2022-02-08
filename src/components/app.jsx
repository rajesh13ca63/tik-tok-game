import React, {Component} from "react";
import Header from "./header";
import About from "./about";
import Game from "./game";
import Signup from "../usercomponets/signup";
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import Count from "../countercomponents/count";
import Longin from "../usercomponets/login";
import Users from "../userlistcomponents/users";
import Calculator from "../tempcomponents/calculator";

class App extends Component {
    render() {
        return (
           <div>
               <div>
                   <Header />
               </div>
                <Routes>
                    <Route path="/" element={ <Navigate to={"/game"}/>} />
                    <Route path="/about" element={<About/>} /> 
                    <Route path="game" element={<Game />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="count" element={<Count />} />
                    <Route path="login" element={<Longin />} />  
                    <Route path="users" element={<Users />} />
                    <Route path="temperature" element={<Calculator />} />
                    
                    <Route path="*" element={
                    <main style={{padding: "1rem", color: "red"} }>
                        <p>There's nothing here!</p>
                    </main>
                    } />
                </Routes>
            </div>
        );
    }
}

export default App;