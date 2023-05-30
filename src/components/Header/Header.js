import { NavLink } from 'react-router-dom'

import './header.css'
import { useProduct } from '../../context/ProductContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const {dispatch} = useProduct();
    const {token,setToken,setUser} = useAuth();
    const navigate = useNavigate();
    const handleSearch = value => {
       dispatch({type : "Search", payload : value});
       navigate("/product")
    }

    const handleLogout = () => {
        localStorage.removeItem('loginDetails');
        setToken("");
        setUser("");
        dispatch({type : "Logout"})
    }

    const handleLogin = () => {
        navigate('/login')
    }

    return(
        <div className='nav'>
        <header className = "header">
            <NavLink to="/">
            <div className = "header_title">
                Furni
            </div>
            </NavLink>
            <div className = "header_input">
                <input type="text" placeholder='Search' className="search"
                 onInput={(e) => handleSearch(e.target.value)}/>
                <i className="fa fa-search" style={{color : "#8b9e70",cursor : "pointer"}}></i>
            </div>
            <ul className = "Header_list">
                <li>
                <NavLink to ="/cart"><i className="fa fa-shopping-cart">
                </i></NavLink>
                </li>
                <li>
                <NavLink to ="/wishlist"><i className="fa fa-heart"></i></NavLink>
                </li>
                <NavLink to = "/profile">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    </NavLink>
                {token ? 
                <h4 onClick = {(e) => handleLogout(e)}>Logout</h4> : 
                <h4 onClick = {() => handleLogin()}>Login</h4>}
            </ul>
        </header>
        <div className = "header_input_mobile">
                <input type="text" placeholder='Search' className="search"
                onInput={(e) => handleSearch(e.target.value)}/>
                <i className="fa fa-search" style={{color : "#8b9e70"}}></i>
            </div>
        </div>
    )
}