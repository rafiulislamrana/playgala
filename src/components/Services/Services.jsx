import { useEffect } from "react";
import { useState } from "react";
import photo from "../../assets/cosmic-background-with-colorful-laser-lights-perfect-digital-wallpaper.jpg";

const Services = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('../../../public/eventData.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <p>Data Count {events.length}</p>
            <div className="card w-96 border-[1px] shadow-[0px_0px_20px_rgba(204,243,0,0.5)] border-primary">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body rounded-b-2xl">
                    <h2 className="card-title font-bold text-2xl">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn bg-primary border-primary text-button mt-2">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;