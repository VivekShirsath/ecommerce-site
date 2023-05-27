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
    lastname:"",
    email: "",
    password: "",
    confirmpassword:"",});
    const location = useLocation();
    const navigate = useNavigate();

    const [isVisible,setVisible] = useState({password:false,confirm:false})

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
        if(name === "lastname"){
            if(!value.length){
                setError({...error,lastname:"lastname can't be empty"})
            }
            if(!(/^[a-z A-Z]+$/).test(value)){
                setError({...error,firstname : "lastname can only be string"})
            }
            else{
                setError({...error,lastname:""})
            }
        }
        if(name === "email"){
            if(signUpdata.email === ""){
                setError({...error,email : "email can't be empty"})
            }
            if(!(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(value))){
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
        if(name==="confirmpassword"){
            setError({...error,confirmpassword:""})
        }  
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(signUpdata.firstname=== "" || signUpdata.lastname === "" || signUpdata.email === "" || signUpdata.password==="" || signUpdata.confirmpassword===""){
            if(signUpdata.firstname=== ""){
               return setError({...error,firstname :"firstname can't be empty"})
            }
            else if(signUpdata.email=== ""){
               return setError({...error,email :"email can't be empty"})
            }
            else if(signUpdata.password=== ""){
                return setError({...error,password :"password can't be empty"})
            }
            else if(signUpdata.confirmpassword=== ""){
                return setError({...error,confirmpassword :"confirmpassword can't be empty"})
            }
        }
        if(signUpdata.password !== signUpdata.confirmpassword){
            return setError({...error,confirmpassword:"Password does not match"})
        }
        else if(error.firstname!=="" || error.email!=="" || error.password!=="" ||
         error.confirmpassword!==""){
            return;
        }
        else{
            signUpHandler(signUpdata)
        }
       
    }

    useEffect(() => {
        if (token) {
          navigate(location?.state?.from.pathname || "/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[token]);

      const handleVisible = value => {
        if(value==="confirm"){
            setVisible({...isVisible,confirm : !isVisible.confirm})
        }
        else{
            setVisible({...isVisible,password : !isVisible.password})
        }
      }

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
                <div className="password">
                <input 
                className="form_input"
                type={isVisible.password ? "text" : 'password'}
                name="password"
                value={signUpdata.password}
                onChange={(e) => handleChange(e)}
                placeholder='Please enter Password'
                />
                {
                    isVisible.password ? <i class="fa fa-eye-slash" aria-hidden="true" onClick = {() => handleVisible()}></i>
                    : <i class="fa fa-eye" aria-hidden="true" onClick = {() => handleVisible()}></i>
                }
                </div>
            </div>
            {error.password !== "" && <p className="form_error">{error.password}</p>}
            <div className="form_section">
                <label className="form_label">Confirm Password</label>
                <div className="password">
                <input 
                className="form_input"
                type={isVisible.confirm ? "text" : "password"}
                name="confirmpassword"
                value={signUpdata.confirmpassword}
                onChange={(e) => handleChange(e)}
                placeholder='Please Reenter Password'
                />
                {
                    isVisible.confirm ? <i class="fa fa-eye-slash" aria-hidden="true" onClick = {() => handleVisible("confirm")}></i>
                    : <i class="fa fa-eye" aria-hidden="true" onClick = {() => handleVisible("confirm")}></i>
                }
                
            </div>
            </div>
            {error.confirmpassword !== "" && <p className="form_error">{error.confirmpassword}</p>}

            <button className='form_btn' onClick = {handleSubmit}>Create a New Account</button>
            <h5>Have a account ? <NavLink to='/login'>Sign In</NavLink>
            </h5>
            </form>  
        </div>
    )
}