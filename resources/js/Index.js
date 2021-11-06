import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../js/components/Button'
import Check from './components/Check';

function Example() {
    return (
        <div className="container">
         <Button />
         <Check />
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
