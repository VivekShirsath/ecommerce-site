
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
    const [error,setError] = useState({
      email : "",
      password : "",
    })
    const [isVisible,setVisible] = useState(false);
    const testData = {email : "vivekshirsath12345@gmail.com",password:"Vivek183"}
    
    
   useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || '/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setError({...error,email : "",password:""})
  };

      const handleSubmit = (data,e) => {
        e.preventDefault();
        if(data.email === ""){
          setError({...error,email:"Email can't be empty"})
        }
        else if(data.password === ""){
          setError({...error,password:"Password can't be empty"})
        }
        else{
          logInHandler(data.email,data.password);
        }
      }

      const handleVisible = () => {
        setVisible(!isVisible)
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
                required
                />
            </div>
            {error.email !== "" && <p className="form_error">{error.email}</p>}
            <div className="form_section">
                <label className="form_label">Password</label>
                <div className='password'>
                <input 
                className="form_input"
                type={isVisible ? "text" : "password"}
                name="password"
                value={loginData.password}
                placeholder='Please enter Password'
                onChange={(e) => handleChange(e)}
                required
                />
                {
                  isVisible ? <i class="fa fa-eye-slash" aria-hidden="true" onClick = {() => handleVisible()}></i>
                  : <i class="fa fa-eye" aria-hidden="true" onClick = {() => handleVisible()}></i>
                }
                
                </div>
            </div>
            {error.password !== "" && <p className="form_error">{error.password}</p>}
            <button className='form_btn' onClick={(e) => handleSubmit(loginData,e)}>Log In</button>
            <button className='form_btn' onClick={(e) =>handleSubmit(testData,e)}>Log In as Guest</button>
            <h5>Don't have an account ? <NavLink to ="/signup">Sign Up</NavLink>
            </h5>
            </form>  
        </div>
    )
}