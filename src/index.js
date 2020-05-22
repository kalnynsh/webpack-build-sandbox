import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

const App = () => {
    return (
        <div className="display-on-center">
            <h1>I am the React App</h1>
            <p>Lorem ipsum.</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
