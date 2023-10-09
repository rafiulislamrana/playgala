const Contact = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto py-16">
                <div className="hero-content flex-col gap-16 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl md:text-5xl font-bold font-pressstart text-primary">Contact Us!</h1>
                        <p className=" text-sm md:text-base py-6">At PlayGala, we value your feedback and inquiries. Whether you have questions about our gaming events, need assistance with your account, or simply want to get in touch, were here to help. Our dedicated support team is available to assist you with any queries or concerns you may have.</p>
                        <p className=" text-sm md:text-base">
                            Please feel free to reach out to us through the following channels: <br />
                            <br />

                            Email: <span className="text-primary">contact@playgala.com</span><br />
                            Phone: <span className="text-primary">+1 (123) 456-7890</span><br />
                            Live Chat: Look for the chat icon in the bottom right corner of your screen to connect with a member of our team in real-time during business hours.
                        </p>
                    </div>
                    <div className="card mx-auto flex-shrink-0 w-full max-w-md border-[1px] shadow-[0px_0px_20px_rgba(204,243,0,0.5)] border-primary rounded-xl bg-primary">
                        {/* <div className="bg-primary rounded-xl pb-5">
                        <h2 className="text-4xl text-button font-pressstart bg-primary rounded-xl text-center pb-2">REGISTER</h2>
                        <p className="text-center max-w-md mx-auto bg-primary text-button">Join in the club now!</p>
                    </div> */}
                        <form className="card-body rounded-xl pb-3 bg-button">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" className="input input-bordered" name="name" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea style={{ height: '150px' }} rows="6" cols="50" className="input input-bordered pt-3" name="message" placeholder="Write your message here..." required></textarea>

                            </div>
                            <div className="form-control mt-6 gap-3 pb-8">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;