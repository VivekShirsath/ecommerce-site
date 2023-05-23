
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect ,useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './login.css';

export const LogIn = () => {

    const {logInHandler,token} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [loginData,setLoginData] = useState({
      email : "",
      password : "",
    })
    const testData = {email : "adarshbalika@gmail.com",password:"adarshbalika"}
    
    
   useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

      const handleSubmit = (data,e) => {
        e.preventDefault();
        if(data.email === "" || data.password === ""){
          console.log("Please enter fields")
        }
        else{
          logInHandler(data.email,data.password);
        }
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
                name="email"
                value={loginData.email}
                placeholder='Please enter email'
                onChange={(e) => handleChange(e)}
                />
            </div>

            <div className="form_section">
                <label className="form_label">Password</label>
                <input 
                className="form_input"
                type="password"
                name="password"
                value={loginData.password}
                placeholder='Please enter Password'
                onChange={(e) => handleChange(e)}
                />
            </div>

            <button className='form_btn' onClick={(e) => handleSubmit(loginData,e)}>Log In</button>
            <button className='form_btn' onClick={(e) =>handleSubmit(testData,e)}>Log In as Guest</button>
            <h5>Don't have an account ? <NavLink to ="/signup">Sign Up</NavLink>
            </h5>
            </form>  
        </div>
    )
}