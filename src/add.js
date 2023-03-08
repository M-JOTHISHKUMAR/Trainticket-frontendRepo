import axios from 'axios';
import React, {useState} from 'react';
import './add.css';
 
function Add1() {
    const [Name , setName] = useState('');
    const [BerthPreperence , setBerthPreference] = useState('');
    const [Gender , setGender] = useState('');
    const [ticket , setticket] = useState('');
    const [DOB , setDOB] = useState('');
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    const handleBerthPreferenceChange =(e)=>{
      setBerthPreference(e.target.value);
    }
    const handleGenderChange =(e)=>{
      setGender(e.target.value);
    }
    const handleticketChange =(e)=>{
      setticket(e.target.value);
    }
    const handleDOBChange =(e)=>{
      setDOB(e.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
          name: Name,
          berth:BerthPreperence,
          gender: Gender,
          ticket: ticket,
          dob: DOB,
          
        };
        console.log(data);
        axios.post('http://127.0.0.1:8080/addDetails', data)
      };
    
  return (
    <div className="App">
    <div className='new'>
    <header className="App-header">
    <form onSubmit={handleSubmit}>
        <label >
          Name:
        </label><br/>
        <input type="text" value={Name} required onChange={(e)=> {handleChange(e)}} /><br/>
        <label >
          BerthPreperence:
        </label><br/>
        <input type="text" value={BerthPreperence} required onChange={(e)=> {handleBerthPreferenceChange(e)}} /><br/>
        <label>
          Gender:
        </label><br/>
        <input type="text" value={Gender} required onChange={(e)=> {handleGenderChange(e)}} /><br/>
        <label>
          ticket:
        </label><br/>
        <input type="tel" value={ticket} required onChange={(e)=> {handleticketChange(e)}} /><br/>

        <label>
          DOB:
        </label><br/>
        <input type="text" value={DOB} required onChange={(e)=> {handleDOBChange(e)}} /><br/>
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
    </div>
  );
}
 
export default Add1;