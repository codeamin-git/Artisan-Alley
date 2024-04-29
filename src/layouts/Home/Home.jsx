import Gifts from "../../components/Gifts/Gifts";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import ArtCraftCategories from "./ArtCraftCategories";
import Banner from "./Banner";
import CraftItems from "./CraftItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <ArtCraftCategories></ArtCraftCategories>
            <Gifts></Gifts>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;