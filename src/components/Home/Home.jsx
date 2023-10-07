import Banner from "../Banner/Banner";
import Partner from "../Partner/Partner";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <Services></Services>
            <Slider></Slider>
            <Partner></Partner>
        </div>
    );
};

export default Home;