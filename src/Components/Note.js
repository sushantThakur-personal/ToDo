import React from 'react';
// import './commonStyles.css';

// const logg = (property) =>{
//   console.log(property.styling);
// }
const Note = props => {
   
    // logg(props.styling);
      return (
        <div className= {`ui component ${props.styling}`}>
          <h1>This is a Note</h1>
        </div>
      );
    
  }
  
  export default Note;