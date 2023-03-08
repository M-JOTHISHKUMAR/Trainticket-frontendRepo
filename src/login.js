import { useState } from 'react';
function ValidatingForm() {
    const initValues={firstname:'',lastname:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+")

        if(!values.firstname)
        errors.firstname="Username is Required";
        else if(values.username.length)
        errors.firstname="Username must have minimum 1 characters";
        else if(reg.test(values.username))
        errors.firstname="Username must contain only alphabets";
        if(!values.lastname)
        errors.lastname="Username is Required";
        else if(values.username.length)
        errors.lastname="Username must have minimum 1 characters";
        else if(reg.test(values.username))
        errors.lastname="Username must contain only alphabets";

        if(!values.email)
        errors.email="Email is Required";
       
        if(!values.password)
        errors.password="Password is Required";
        else if(!preg.test(values.password))
        errors.password="Format of Password is not corrcet";
        return errors;
    }

    return (
        <div>
        <center>

        <div className='container'>
            {
                Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{background:"wheat",color:"white"}}>Signed In Successfully</h1>)
                :(<pre></pre>)
            }
        <form onSubmit={handleSubmit}>
            <h1>JRCTC LOGIN</h1>
           
            <div className='row'>
                <label>first Name</label><br></br>
                <center><input type="text" id='firstname' placeholder='Type First Name Here' value={formValues.firstname}
                    onChange={handleChange}/></center>
            </div>
            <p  style={{color:"red"}}>{formErrors.lastname}</p>
            <div className='row'>
                <label>last Name</label><br></br>
                <center><input type="text" id='lastname' placeholder='Type First Name Here' value={formValues.lastname}
                    onChange={handleChange}/></center>
            </div>
            <p  style={{color:"red"}}>{formErrors.lastnamename}</p>

            <div className='row'>
                <label>E-mail</label><br></br>
                <center><input type="email" id='email' placeholder='Type User Email-id Here' value={formValues.email}
                    onChange={handleChange}/></center>
            </div>
            <p  style={{color:"red"}}>{formErrors.email}</p>

            <div className='row'>
                <label>Password</label><br></br>
                <center><input type="password" id='password' placeholder='Type User Password Here' value={formValues.password}
                    onChange={handleChange}/></center>
            </div>
            <p  style={{color:"red"}}>{formErrors.password}</p>

            <div className='row'><br></br>
            <center><button className='btn btn-primary'>Login</button></center>
            </div>
            <div className='row'><br></br>
            <center><button className='btn btn-primary'>Signin</button></center>
            </div>
        </form>
        </div>
        </center>
        </div>
     );
}

export default ValidatingForm