
import './filter.css';

export const Filter = () => {

    return(
        <div className="filter">
            <div className = "filter_title">
            <h4>Filters</h4>
            <button className= "filter_clear">Clear Filters</button>
            </div>
            <div className='filter_category'>
            <h4>Category</h4>
            <div>
                <input
                  type="checkbox"
                  id="category"
                  name="Sofas" />
                <label htmlFor="category">Sofas</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category"
                  name="Beds" />
                <label htmlFor="category">Beds</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category"
                  name="Beds" />
                <label htmlFor="category">Wardrobes</label>
              </div>

            </div>
            <div className = "filter_price">
                <h4>Sort By Price</h4>
                <div>
                <input type="radio" name="price"/>
                <label htmlFor="price">High to Low</label>
                </div>
                <div>
                <input type="radio" name="price"/>
                <label htmlFor="price">Low To High</label>
                </div>
            </div>
            <div className = "filter_ratings">
                <h4>Ratings</h4>
                <div>
                <input type="radio" name="ratings"/>
                <label htmlFor="ratings">4 Star and above</label>
                </div>
                <div>
                <input type="radio" name="ratings"/>
                <label htmlFor="ratings">3 Star and above</label>
                </div>
                <div>
                <input type="radio" name="ratings"/>
                <label htmlFor="ratings">2 Star and above</label>
                </div>
            </div>
            <div className='filter_slider'>
                <h4>Price</h4>
                <span className="filter_min_max">
                <span>15000</span>
                <span>30000</span>
                </span>
                <input type="range" min="15000" max="30000" value="23000"/>
            </div>
        </div>
    )
}