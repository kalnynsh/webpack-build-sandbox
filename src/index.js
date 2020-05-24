import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import logo60Url from './images/logo60x73.png';

const App = () => {
    return (
        <div className="container">
            <h1>
                <img
                    src={logo60Url}
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
