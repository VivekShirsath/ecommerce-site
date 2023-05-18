import { NavLink } from 'react-router-dom'

import './header.css'
import { useProduct } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const {dispatch} = useProduct();
    const navigate = useNavigate();
    const handleSearch = value => {
       dispatch({type : "Search", payload : value});
       navigate("/product")
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
                <i className="fa fa-shopping-cart"></i>
                </li>
                <li>
                <i className="fa fa-heart"></i>
                </li>
                <button className="btn_nav">Log In</button>
            </ul>
        </header>
        <div className = "header_input_mobile">
                <input type="text" placeholder='Search' className="search"/>
                <i className="fa fa-search" style={{color : "#8b9e70"}}></i>
            </div>
        </div>
    )
}