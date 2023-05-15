import "./Home.css"
import { Header } from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Category } from "../../components/Category/Category";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
    return(
        <div className="home">
        <Header/>
        <Section />
        <Category />
        <Footer/>
        </div>
    )
}