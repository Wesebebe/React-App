import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
// import App from './components/App';

function Greeting () {
    return <App/>
};

ReactDom.render(<Greeting/>, document.getElementById('root'));