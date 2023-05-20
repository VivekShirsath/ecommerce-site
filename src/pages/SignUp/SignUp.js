import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './signup.css';

export const SignUp = () => {

    const [signUpdata,setSignupdata] = useState({
        username: "", 
        email: "",
        password: "",
        confirmpassword:"",
    });
    const [error,setError] = useState({username: null, 
    email: "",
    password: "",
    confirmpassword:"",});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupdata({ ...signUpdata, [name]: value });
        validate(name,value);
      };
    
    const validate = (name,value) => {
        console.log(value);
        if(name === "username"){
            if(!value.length){
                setError({...error,username:"username can't be empty"})
            }
            if(!(/^[a-z A-Z]+$/).test(value)){
                setError({...error,username : "Username can only be string"})
            }
            else{
                setError({...error,username:""})
            }
        }
        if(name === "email"){
            if(signUpdata.email === ""){
                setError({...error,email : "email can't be empty"})
            }
            if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value.toLowerCase()))){
                setError({...error,email : "Email should be in valid format"})
            }
            else{
                setError({...error,email:""})
            }   
        }
        if(name === "password"){
            if(!(/^(?=.*?[A-Z]).{8,20}$/
            .test(value))){
                setError({...error,password : "Password should have minimum 8 characters and one uppercase letter"})
            }
            else{
                setError({...error,password:""})
            }
        }


        // else if(signUpdata.password === ""){
        //     setError({...error,password : "password can't be empty"})
        // }
        // else if(signUpdata.password === ""){
        //     setError({...error,confirmpassword: "password can't be empty"})
        // }
        
    }

    const handleSubmit = () => {
        
    }

    return(
        <div className="container">
          <form className = "form" onClick = {handleSubmit}>
            <h4 className="form_title">Sign Up</h4>
            <div className="form_section">
                <label className="form_label">Name</label>
                <input 
                className="form_input"
                type="text"
                name="username"
                value={signUpdata.username}
                onChange={(e) => handleChange(e)}
                placeholder='Please enter name'
                />
            </div>
            {error.username !== "" && <p className="form_error">{error.username}</p>}

            <div className="form_section">
                <label className="form_label">Email</label>
                <input 
                className="form_input"
                type="email"
                name="email"
                placeholder='Please enter email'
                value={signUpdata.email}
                onChange={(e) => handleChange(e)}
                />
            </div>
            {error.email !== "" && <p className="form_error">{error.email}</p>}
            <div className="form_section">
                <label className="form_label">Password</label>
                <input 
                className="form_input"
                type="password"
                name="password"
                value={signUpdata.password}
                onChange={(e) => handleChange(e)}
                placeholder='Please enter Password'
                />
            </div>
            {error.password !== "" && <p className="form_error">{error.password}</p>}
            <div className="form_section">
                <label className="form_label">Confirm Password</label>
                <input 
                className="form_input"
                type="password"
                name="confirmpassword"
                value={signUpdata.confirmpassword}
                onChange={(e) => handleChange(e)}
                placeholder='Please Reenter Password'
                />
            </div>

            <button className='form_btn'>Create a New Account</button>
            <h5>Have a account ? <NavLink>Sign In</NavLink>
            </h5>
            </form>  
        </div>
    )
}