
import './category.css';
import { useCategory } from '../../context/CategoryContext';
import { useProduct } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';

export const Category = () => {
    const {category} = useCategory();
    const {dispatch} = useProduct();
    const navigate = useNavigate();

    const addCategory = (name) => {
        dispatch({ type: "FilterCategory", payload: name });
        navigate("/product");
    }
    return(
        <>
        <div className="category">
            <h4 className="category_title">Category</h4>
            <p className="category_desc">We have various category of furniture and quality is always our first priority.</p>
        </div>
        <div className="category_card">
            {
                category.map(({_id,categoryName,imageId}) => {
                    return(
                        <div key={_id} onClick = {() => addCategory(categoryName)}>
                    <img className= "category_img"src={imageId} alt="sofaimg"/>
                    <p className="category_name">{categoryName}</p>
                </div>
                    )
                })
            }
            </div>
        </>
    )
}