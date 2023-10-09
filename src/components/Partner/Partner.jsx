import Marquee from "react-fast-marquee";
import Photo1 from "../../../src/assets/boeing.3037b0a6.png";
import Photo2 from "../../../src/assets/dell.09332c44.png";
import Photo3 from "../../../src/assets/download (1).png";
import Photo4 from "../../../src/assets/download (3).png";
import Photo5 from "../../../src/assets/ibm.bcec6b9a.png";
import Photo6 from "../../../src/assets/download.png";
import Photo7 from "../../../src/assets/yarn.ae61cc47.png";
import Photo8 from "../../../src/assets/nasa.3bf5af29.png";
const Partner = () => {
    return (
        <div className="pt-10 pb-24">
            <h2 className="text-2xl md:text-4xl text-primary font-pressstart text-shadow text-center pb-2">OUR PARTNERS</h2>
            <p className="pb-10 text-center max-w-md mx-auto">Join in the club now!</p>
            <Marquee>
                <div className=" h-12 mr-12">
                    <img className="h-full" src={Photo1} alt="" />
                </div>
                <div className=" h-12  mr-12">
                    <img className="h-full" src={Photo2} alt="" />
                </div>
                <div className=" h-12  mr-12">
                    <img className="h-full" src={Photo3} alt="" />
                </div>
                <div className=" h-12  mr-12">
                    <img className="h-full" src={Photo4} alt="" />
                </div>
                <div className=" h-12  mr-12"> 
                    <img className="h-full" src={Photo5} alt="" />
                </div>
                <div className=" h-12  mr-12">
                    <img className="h-full" src={Photo6} alt="" />
                </div>
                <div className=" h-12  mr-12">
                    <img className="h-full" src={Photo7} alt="" />
                </div>
                <div className=" h-12  mr-12">
                    <img className="h-full" src={Photo8} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Partner;