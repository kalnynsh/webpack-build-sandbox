import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>React Application</h1>
            <p>Test text</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
