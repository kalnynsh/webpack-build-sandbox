import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>I am the React App</h1>
            <p>Lorem ipsum.</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
