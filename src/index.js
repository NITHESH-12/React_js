import React from "react";
import ReactDOM from "react-dom";
import List from "./List.jsx";

const coloe = {
  color: "red",
  fontFamily: "Helvetica",
  fontWeight: "900"
}

ReactDOM.render(
  <div style={coloe} className='Ap'>Craeted by nithesh
 <List value='helo'></List>
<List value="welcom"></List>
  </div>,document.getElementById(
'root'
  )
);
