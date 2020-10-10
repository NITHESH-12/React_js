import React from "react";
//nothing but call a function propes are nothing but parameters reeived
// by a function -component  
// props value can be changed 
function List1(props) {
  return (
    <div>
      <ul>
        
        <li>{props.value}</li>
        <li>{props.value}</li>
      </ul>
    </div>
  );
}
export default List1;
