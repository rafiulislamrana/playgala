
const Banner = () => {
    return (
        <div className="hero min-h-screen lg:pt-10 pb-20">
            <div className="w-full hero-content flex-col lg:flex-row-reverse lg:gap-16 ">
                <img src="../../../src/assets/rise-humanoids-with-advanced-headgear-generative-ai.jpg" className="w-full lg:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl lg:text-6xl font-pressstart">DISCOVER ALL <span className="text-primary font-pressstart text-shadow">GAMING</span> EVENTS HERE!</h1>
                    <p className="py-6">Gaming live events are like big, fun parties for gamers. You get to play games, watch others play, and hang out with fellow gaming enthusiasts. Its a blast!</p>
                    <button className="btn btn-primary text-primary shadow-[0px_0px_20px_rgba(204,243,0,0.5)]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;