import { FaLocationDot } from "react-icons/fa6";
const SingleServices = ({event}) => {
    const { title, img, price, venue, category} = event;
    return (
        <div className="card border-[1px] shadow-[0px_0px_20px_rgba(204,243,0,0.5)] border-primary">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body rounded-b-2xl text-center">
                <div className="card-actions justify-center">
                    <div className="badge badge-outline text-primary">Fashion</div>
                    <div className="badge badge-outline text-primary">Products</div>
                </div>
                <h2 className="card-title justify-center font-bold text-2xl">{title}</h2>
                <p className=" font-semibold">Tickets from $<span>{price}</span></p>
                <div className="flex justify-center items-center gap-2">
                    <FaLocationDot></FaLocationDot>
                    <p className=" inline max-w-fit">{venue}</p>
                </div>

                <div className="card-actions">
                    <button className="btn bg-primary border-primary text-button mt-2 w-full hover:text-primary">Register</button>
                </div>
            </div>
        </div>
    );
};

export default SingleServices;