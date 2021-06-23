import App from './App';
import './index.css';
const { render } = require("@testing-library/react");

render(
    <App/>,
    document.getElementById('root'),
);