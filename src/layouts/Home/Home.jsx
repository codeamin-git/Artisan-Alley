import ArtCraftCategories from "./ArtCraftCategories";
import Banner from "./Banner";
import CraftItems from "./CraftItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftItems></CraftItems>
            <ArtCraftCategories></ArtCraftCategories>
        </div>
    );
};

export default Home;