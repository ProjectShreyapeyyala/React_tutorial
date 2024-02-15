import React from 'react';

const Hello =() => {
    // return (
    //     <div className = 'dummy Class>
    //         <h1>Hello Cherry!!</h1>
    //     </div>
    // )
    // return React.createElement('div',null , React.createElement('h1',null, 'Hello Shri'))
    return React.createElement('div',{id: 'hello', className: 'dummyClass'} , React.createElement('h1',null, 'Hello Shri'))
}

export default Hello;