const Banner = () => {
    return (
        <div className="hero min-h-screen py-10">
            <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                <img src="../../../src/assets/rise-humanoids-with-advanced-headgear-generative-ai.jpg" className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-6xl font-pressstart">DISCOVER ALL <span className="text-primary font-pressstart">GAMING</span> EVENTS HERE!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-primary shadow-[0px_0px_20px_rgba(204,243,0,0.5)]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;