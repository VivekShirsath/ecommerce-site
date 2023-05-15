import './header.css'

export const Header = () => {
    
    return(
        <div className='nav'>
        <header className = "header">
            <div className = "header_title">
                Furni
            </div>
            <div className = "header_input">
                <input type="text" placeholder='Search' className="search"/>
                <i class="fa fa-search" style={{color : "#8b9e70",cursor : "pointer"}}></i>
            </div>
            <ul className = "Header_list">
                <li>
                <i class="fa fa-shopping-cart"></i>
                </li>
                <li>
                <i class="fa fa-heart"></i>
                </li>
                <button className="nav_btn">Log In</button>
            </ul>
        </header>
        <div className = "header_input_mobile">
                <input type="text" placeholder='Search' className="search"/>
                <i class="fa fa-search" style={{color : "#8b9e70"}}></i>
            </div>
        </div>
    )
}