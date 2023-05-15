
import './category.css'

export const Category = () => {
    return(
        <>
        <div className="category">
            <h4 className="category_title">Category</h4>
            <p className="category_desc">We have various category of furniture and quality is always our first priority.</p>
        </div>
        <div className="category_card">
                <div>
                    <img className= "category_img"src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_1.jpg" alt="sofaimg"/>
                    <p className="category_name">Sofas</p>
                </div>
                <div>
                    <img className= "category_img"src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_1440_category_22feb_26.jpg" alt="bedimg"/>
                    <p className="category_name">Beds</p>
                </div>
            </div>
        </>
    )
}