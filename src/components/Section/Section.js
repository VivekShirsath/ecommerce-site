import { NavLink } from 'react-router-dom';

import './section.css';
import change from './change.png'

export const Section = () => {
    return(
        <section className="section">
            <div className="section_left">
            <div className="section_left_info">
               <h3 className="section_tagline">Furniture that 
                 <p>everyone</p>
                Loves</h3> 
                <p className="section_tagline_description">We have 5000+ Review and our customers trust on our furniture and Quality products.</p>
            </div>
            <NavLink to ='/product'>
            <button className="btn_buy">Buy Now</button>
                </NavLink>
            </div>
            <div className="section_right">
                <img src={change} alt="couch" className="couch"/>
            </div>
            <NavLink to ='/product'>
            <button className="btn_buy_mob">Buy Now</button>
                </NavLink>
        </section>
    )
}