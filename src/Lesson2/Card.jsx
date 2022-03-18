import React from 'react';

const Card = (props) => {
    console.log(props);
    // const card = React.createElement(
    //     "div",
    //     {className: "card"},
    //     "word laksajdscsfd"
    // )
    
    return <div>
        <h3>{props.name}</h3>
        <img style={{width: "100px",height: "100px"}} 
        src={props.img || '/logo192.png'}
         alt="" 
         />
        <p>{props.price}</p>{props.children || "1200$"}
        <button>buy</button>
    </div>;
};

export default Card;