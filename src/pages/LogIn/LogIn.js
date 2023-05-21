
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './login.css';

export const LogIn = () => {

    const {logInHandler,token} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
   useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || '/', { replace: true });
    }
  }, [token]);

    

      const handleSubmit = (e) => {
        e.preventDefault();
        logInHandler();
      }
    return(
        <div className="container">
          <form className = "form">
            <h4 className="form_title">Log In</h4>

            <div className="form_section">
                <label className="form_label">Email</label>
                <input 
                className="form_input"
                type="email"
                placeholder='Please enter email'
                />
            </div>

            <div className="form_section">
                <label className="form_label">Password</label>
                <input 
                className="form_input"
                type="password"
                placeholder='Please enter Password'
                />
            </div>

            <button className='form_btn'>Log In</button>
            <button className='form_btn' onClick={handleSubmit}>Log In as Guest</button>
            <h5>Don't have an account ? <NavLink to ="/signup">Sign Up</NavLink>
            </h5>
            </form>  
        </div>
    )
}