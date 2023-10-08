import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const SingleServices = ({event}) => {
    // eslint-disable-next-line react/prop-types
    const { id, title, img, price, venue, category} = event;
    return (
        <div className="card border-[1px] shadow-[0px_0px_20px_rgba(204,243,0,0.5)] border-primary">
            <div className=" h-[250px] rounded-t-2xl"><img className=" h-full rounded-t-2xl object-cover" src={img} alt="Shoes" /></div>
            <div className="card-body rounded-b-2xl text-center">
                <div className="card-actions justify-center">
                    {
                        // eslint-disable-next-line react/prop-types
                        category.map((cat,idx) => <div key={idx} className="badge badge-outline text-primary">{cat}</div>)
                    }
                </div>
                <h2 className="card-title justify-center font-bold text-2xl">{title}</h2>
                <p className=" font-semibold">Tickets from $<span>{price}</span></p>
                <div className="flex justify-center items-center gap-2">
                    <FaLocationDot></FaLocationDot>
                    <p className=" inline max-w-fit">{venue}</p>
                </div>

                <div className="card-actions">
                    <Link className="w-full" to={`/event/${id}`}><button className="btn bg-primary border-primary text-button mt-2 w-full hover:text-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleServices;