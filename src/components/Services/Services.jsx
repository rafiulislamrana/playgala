import { useEffect } from "react";
import { useState } from "react";
import SingleServices from "../SingleServices/SingleServices";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('/eventData.json')
            .then(res => res.json())
            .then(data => setEvents(data))
        
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" className="px-[1rem] lg:px-0 py-20">
            <h2 className="text-2xl md:text-4xl text-primary font-pressstart text-shadow text-center pb-2">LIVE EVENTS</h2>
            <p className="pb-14 text-sm text-center max-w-md mx-auto">Gaming live events are like big, fun parties for gamers. You get to play games, watch others play, and hang out with fellow gaming enthusiasts. Its a blast!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                events.map(event => <SingleServices key={event.id} event={event}></SingleServices>)
            }
            </div>
        </div>
    );
};

export default Services;