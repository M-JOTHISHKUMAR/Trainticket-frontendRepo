import React from 'react'
import { Link } from "react-router-dom";
import './rail.css'
function Rail2() {
  return (

    <div>
        <nav class="topnav">
        <ul> 
        <Link to="/App"><li><button type="submit" class='button'>LOGIN</button></li></Link>
          <Link to="/add"><li><h3>ADD</h3></li></Link>
          <Link to="/show"><li><h3>SHOW</h3></li></Link>
        <Link to="/update"><li><h3>UPDATE</h3></li></Link>
        <Link to="/delete"><li><h3>DELETE</h3></li></Link>
      </ul>
    </nav>
    
        </div>
    )
}

export default Rail2;