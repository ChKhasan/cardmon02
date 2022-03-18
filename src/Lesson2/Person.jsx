import React from 'react';

const Person = (props) => {
    return (
        <div>
           <h3>Name : {props.name}</h3>
           <p>Age : {props.age}</p>
           <p>Status : {props.isMarried ? "Married":"Single"}</p>
        </div>
    );
};


export default Person;