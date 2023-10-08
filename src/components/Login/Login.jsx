const Login = () => {
    return (
        <div className=" my-20">
            <div className="flex-col lg:flex-row-reverse justify-center items-center">
                <div className="card mx-auto flex-shrink-0 w-full max-w-md border-[1px] shadow-[0px_0px_20px_rgba(204,243,0,0.5)] border-primary rounded-xl bg-primary">
                    <div className="bg-primary rounded-xl pt-8 pb-5">
                        <h2 className="text-4xl text-button font-pressstart bg-primary rounded-xl text-center pb-2">LOGIN</h2>
                        <p className="text-center max-w-md mx-auto bg-primary text-button">Join in the club now!</p>
                    </div>
                    <form className="card-body rounded-xl pt-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label label-text-alt">
                            Are you new here? 
                            <a href="#" className="label-text-alt link link-hover">Register now</a>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;