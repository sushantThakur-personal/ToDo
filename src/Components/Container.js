import React from 'react';
import Note from './Note';
import Button from './Button';


const Container = props =>  {
  
      return (
          <div className={`column ${props.lable}`}>
          <div className="ui raised segment" >
          <Note styling= "text"/>
          <div className="ui two buttons">
            <Button  textValue="Edit"/>
            <Button  textValue="Delete"  />
          </div>
         </div>
         </div>
      );
    
  }
  
  export default Container;