import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import './signup.css';

export const SignUp = () => {
    const {signUpHandler,token} = useAuth();
    const [signUpdata,setSignupdata] = useState({
        firstname: "", 
        lastname:"",
        email: "",
        password: "",
        confirmpassword:"",
    });
    const [error,setError] = useState({firstname: "", 
    email: "",
    password: "",
    confirmpassword:"",});
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupdata({ ...signUpdata, [name]: value });
        validate(name,value);
      };
    
      const validate = (name,value) => {
        if(name === "firstname"){
            if(!value.length){
                setError({...error,firstname:"firstname can't be empty"})
            }
            if(!(/^[a-z A-Z]+$/).test(value)){
                setError({...error,firstname : "firstname can only be string"})
            }
            else{
                setError({...error,firstname:""})
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
        if(name === "confirmpassword"){
            if(signUpdata.password !== value){
                setError({...error,confirmpassword:"Password does not match"})
            }
            else{
                setError({...error,confirmpassword:""})
            }
        }       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(signUpdata.firstname=== "" || signUpdata.lastname === "" || signUpdata.email === "" || signUpdata.password==="" || signUpdata.confirmpassword===""){
            if(signUpdata.firstname=== ""){
                setError({...error,firstname :"firstname can't be empty"})
            }
            else if(signUpdata.email=== ""){
                setError({...error,email :"email can't be empty"})
            }
            else if(signUpdata.password=== ""){
                setError({...error,password :"password can't be empty"})
            }
            else if(signUpdata.confirmpassword=== ""){
                setError({...error,confirmpassword :"confirmpassword can't be empty"})
            }
        }
        else if(error.firstname!=="" || error.email!=="" || error.password!=="" ||
         error.confirmpassword!==""){
            return;
        }
        else{
            signUpHandler(signUpdata)
        }
        console.log(error);
    }

    useEffect(() => {
        console.log(location?.state?.from.pathname)
        if (token) {
          navigate(location?.state?.from.pathname || "/");
        }
      },[token]);

    return(
        <div className="container">
          <form className = "form" >
            <h4 className="form_title">Sign Up</h4>
            <div className="form_section">
                <label className="form_label">First Name</label>
                <input 
                className="form_input"
                type="text"
                name="firstname"
                value={signUpdata.firstname}
                onChange={(e) => handleChange(e)}
                placeholder='Please enter firstname'
                />
            </div>
            {error.firstname !== "" && <p className="form_error">{error.firstname}</p>}

            <div className="form_section">
                <label className="form_label">Last Name</label>
                <input 
                className="form_input"
                type="text"
                name="lastname"
                value={signUpdata.lastname}
                onChange={(e) => handleChange(e)}
                placeholder='Please enter lastname'
                />
            </div>

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
            {error.confirmpassword !== "" && <p className="form_error">{error.confirmpassword}</p>}

            <button className='form_btn' onClick = {handleSubmit}>Create a New Account</button>
            <h5>Have a account ? <NavLink>Sign In</NavLink>
            </h5>
            </form>  
        </div>
    )
}