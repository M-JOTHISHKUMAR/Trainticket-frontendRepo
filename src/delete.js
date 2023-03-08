import axios from 'axios';
import React, {useState} from 'react';
import './add.css';
 
function Delete1() {
    const [ticket , setticket] = useState(0);
    const handleticketChange =(e)=>{
      setticket(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.delete(`http://127.0.0.1:8080/deleteDetails/${ticket}`)
      .then(res => console.log(res.data))
      .catch(err =>console.log(err));
    }
  return (
    <div className="App">
    <div className='new'>
    <header className="App-header">
    <form onSubmit={handleSubmit}>
        
        <label>
          ticket:
        </label><br/>
        <input type="ticket" required onChange={(e)=> {handleticketChange(e)}} /><br/>
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
    </div>
  );
}
 
export default Delete1;