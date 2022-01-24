import reactDom from "react-dom";
import './app.css';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import Game from "./components/game";
import About from "./components/about";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

const rootElement = document.getElementById('root');

reactDom.render (
    <Router>
        {/* <App /> */}
        <Routes>
            <Route path="/" element={<App />} /> 
            <Route path="game" element={<Game />} />
           
            <Route path="*" element={
            <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
            </main>
            } />
        </Routes>
    </Router>,
 
    
    rootElement
);
