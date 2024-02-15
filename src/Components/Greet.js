import React from 'react';
// function Greet(){
//     return <h1>Hello Shreya</h1>
// }

const Greet = props =>{ 
    return(<div><h1>Hello {props.name} {props.heroname}</h1>{props.childern}</div>
)}
export default Greet;