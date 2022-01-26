import reactDom from "react-dom";
import './app.css';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

reactDom.render (
    <Router>
        <App />
    </Router>,
    rootElement
);
