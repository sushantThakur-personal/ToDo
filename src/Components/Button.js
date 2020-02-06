import React from 'react';

const buttonIconHandler = (styler) => {
    if (styler === 'Edit') {
        return 'pencil alternate';
    }
     else if (styler === 'Delete') {
        return 'eraser';
    } 
    else {
        return 'ui basic button';
    }
}
const buttonColourHandler = styler =>{
    if (styler === 'Edit') {
        return 'positive';
    }
     else if (styler === 'Delete') {
        return 'red';
    } 
    else {
        return 'ui basic button';
    }
}

const Button = (props) =>{
return(
    <div className={`ui vertical ${buttonColourHandler(props.textValue)} animated button`} >
  <div className="hidden content">{props.textValue}</div>
  <div className="visible content">
    <i className={`${buttonIconHandler(props.textValue)} icon`}></i>
  </div>
    </div>
    
);
}
export default Button;