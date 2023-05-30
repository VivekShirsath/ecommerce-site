
import './filter.css';
import { useProduct } from '../../context/ProductContext';

export const Filter = () => {
    const {checkboxesForCategory,dispatch,sortByPrice,sortByStar,
      sliderValue,isDrawer} = useProduct();
    return(
        <div className={isDrawer ? "filter draw" : "filter"}>
            <div className = "filter_title">
            <h4>Filters</h4>
            <button className= "filter_clear" onClick = {() => dispatch({type: "ClearFilters"})}>Clear Filters</button>
            {isDrawer && <i class="fa fa-window-close" aria-hidden="true"
            onClick={() => dispatch({type:"Drawer"})}
            >
            </i>}
            </div>
            <div className='filter_category'>
            <h4>Category</h4>
            <div>
                <input
                  type="checkbox"
                  id="category"
                  name="Sofas" 
                  checked = {checkboxesForCategory?.find(item => item === "Sofas")||false}
                  onChange={(e) =>
                    dispatch({ type: "FilterCategory", payload: e.target.name })
                  }/>
                <label htmlFor="category">Sofas</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category"
                  name="Beds" 
                  checked = {checkboxesForCategory?.find(item => item === "Beds")||false}
                  onChange={(e) =>
                    dispatch({ type: "FilterCategory", payload: e.target.name })
                  }/>
                <label htmlFor="category">Beds</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="category"
                  name="Wardrobes"
                  checked = {checkboxesForCategory?.find(item => item === "Wardrobes")||false}
                 
                  onChange={(e) =>
                    dispatch({ type: "FilterCategory", payload: e.target.name })
                  } 
                  />
                <label htmlFor="category">Wardrobes</label>
              </div>

            </div>
            <div className = "filter_price">
                <h4>Sort By Price</h4>
                <div>
                <input type="radio" name="price"
                value = "High to Low"
                checked = {sortByPrice === "High to Low"}
                onChange={(e) =>
                  dispatch({ type: "FilterPrice", payload: e.target.value })
                } 
                />
                <label htmlFor="price">High to Low</label>
                </div>
                <div>
                <input type="radio" name="price"
                checked = {sortByPrice === "Low to High"}
                value = "Low to High"
                onChange={(e) =>
                  dispatch({ type: "FilterPrice", payload: e.target.value })
                } />
                <label htmlFor="price">Low To High</label>
                </div>
            </div>
            <div className = "filter_ratings">
                <h4>Ratings</h4>
                <div>
                <input type="radio" name="ratings"
                value = "4"
                checked = {sortByStar === "4"}
                 onChange={(e) =>
                  dispatch({ type: "FilterRating", payload: e.target.value })
                }/>
                <label htmlFor="ratings">4 Star and above</label>
                </div>
                <div>
                <input type="radio" name="ratings"
                value = "3"
                checked = {sortByStar === "3"}
                onChange={(e) =>
                  dispatch({ type: "FilterRating", payload: e.target.value })
                }/>
                <label htmlFor="ratings">3 Star and above</label>
                </div>
                <div>
                <input type="radio" name="ratings"
                value = "2"
                checked = {sortByStar === "2"}
                onChange={(e) =>
                  dispatch({ type: "FilterRating", payload: e.target.value })
                }/>
                <label htmlFor="ratings">2 Star and above</label>
                </div>
            </div>
            <div className='filter_slider'>
                <h4>Price</h4>
                <span className="filter_min_max">
                <span>15000</span>
                <span>30000</span>
                </span>
                <input type="range" min="15000" max="30000" value={sliderValue}
                onChange = {(e) => dispatch({type : "FilterSlider" , payload : e.target.value })}/>
            </div>
        </div>
    )
}