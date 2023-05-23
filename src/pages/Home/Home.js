import "./Home.css"
import { Section } from "../../components/Section/Section";
import { Category } from "../../components/Category/Category";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
    return(
        <div className="home">
        <Section />
        <Category />
        <Footer/>
        </div>
    )
}