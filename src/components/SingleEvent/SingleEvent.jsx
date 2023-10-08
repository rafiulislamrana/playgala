import { useLoaderData, useParams } from "react-router-dom";
import { BsFillCalendarCheckFill, BsFillCalendarXFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { Link } from "react-router-dom";

const SingleEvent = () => {
    const data = useLoaderData();
    const click = useParams();

    const loaded = data.filter(id => id.id == click.id)

    return (
        <div className="max-w-6xl mx-auto pt-10 pb-20">
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <div className="h-[500px]">
                        <img className="h-full object-cover rounded-lg" src={loaded[0].img} alt="" />
                    </div>
                    <h2 className="pt-10 pb-5 font-pressstart text-4xl">{loaded[0].title}</h2>
                    <p className="">{loaded[0].description}</p>
                </div>
                <div className=" ">
                    <div className="flex-col lg:flex-row-reverse justify-center items-center">
                        <div className="card mx-auto flex-shrink-0 w-full max-w-md border-[1px] shadow-[0px_0px_20px_rgba(204,243,0,0.5)] border-primary rounded-xl bg-primary">
                            <div className="bg-primary rounded-xl pt-8 pb-5">
                                <h2 className="text-4xl text-button font-pressstart bg-primary rounded-xl text-center pb-2">Details</h2>
                                <p className="text-center max-w-md mx-auto bg-primary text-button">Check the event now!</p>
                            </div>

                            <div className="p-8 rounded-b-xl bg-button">
                                <div className="card-actions justify-center">
                                    {
                                        // eslint-disable-next-line react/prop-types
                                        loaded[0].category.map((cat, idx) => <div key={idx} className="badge badge-outline text-primary">{cat}</div>)
                                    }
                                    <div className="flex flex-col items-center gap-4 pt-5">
                                        <div className="flex items-center gap-2">
                                            <BsFillCalendarCheckFill></BsFillCalendarCheckFill>
                                            <p><b>Start Date: </b>{loaded[0].start_date}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BsFillCalendarXFill></BsFillCalendarXFill>
                                            <p><b>End Date: </b>{loaded[0].end_date}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaLocationArrow></FaLocationArrow>
                                            <p><b>Venue: </b>{loaded[0].venue}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ImPriceTag className="text-2xl text-primary"></ImPriceTag>
                                            <p className=" text-4xl text-primary"><b>Price: ${loaded[0].price}</b></p>
                                        </div>
                                        <Link className="w-full"><button className="btn bg-primary border-primary text-button mt-2 w-full hover:text-primary">Register Now</button></Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;