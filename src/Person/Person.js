import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>This is {props.name} and he rides a {props.bike}.</p>
            <p><i>{props.children}</i></p>
            <input type="text" onChange={props.onChanged} value={props.name}/>
        </div>
    );
}

export default person;