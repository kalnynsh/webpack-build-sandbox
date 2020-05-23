import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

const App = () => {
    return (
        <div className="container">
            <h1>
                <img
                    src="images/logo60x73-170827ce3.png"
                    alt="logo"
                    className="logo-height-32 mr-1"
                />
                I am the React App
            </h1>
            <p>Lorem ipsum.</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
