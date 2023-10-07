import { useEffect } from "react";
import { useState } from "react";
import SingleServices from "../SingleServices/SingleServices";



const Services = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('../../../public/eventData.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className=" py-16">
            <h2 className="text-4xl text-primary font-pressstart text-shadow text-center pb-2">LIVE EVENTS</h2>
            <p className="pb-14 text-center max-w-md mx-auto">Gaming live events are like big, fun parties for gamers. You get to play games, watch others play, and hang out with fellow gaming enthusiasts. Its a blast!</p>
            <div>
            {
                events.map(event => <SingleServices key={event.id} event={event}></SingleServices>)
            }
            </div>
        </div>
    );
};

export default Services;