import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from 'react-toastify';

const Login = () => {
    const location = useLocation()
    
    const navigateUser = useNavigate()

    const { login, HandleGoogle, err, setErr } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        setErr("");
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(form, email, password);

        login(email, password)
        .then(res => {
            toast("You Logged in Successfully!", res);
            navigateUser(location?.state ? location.state : "/")
        })
        .catch(err => setErr(err.message));
    }
    return (
        <div className=" my-20">
            <div className="flex-col lg:flex-row-reverse justify-center items-center">
                <div className="card mx-auto flex-shrink-0 w-full max-w-md border-[1px] shadow-[0px_0px_20px_rgba(204,243,0,0.5)] border-primary rounded-xl bg-primary">
                    <div className="bg-primary rounded-xl pt-8 pb-5">
                        <h2 className="text-4xl text-button font-pressstart bg-primary rounded-xl text-center pb-2">LOGIN</h2>
                        <p className="text-center max-w-md mx-auto bg-primary text-button">Join in the club now!</p>
                    </div>
                    <form onSubmit={handleLogin} className="card-body rounded-t-xl pt-5 pb-3 bg-button">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <label className="bg-button label label-text-alt pb-8 rounded-b-xl text-red-500">
                            {
                                err
                            }
                        </label>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="w-full px-8 bg-button">

                        <button onClick={HandleGoogle} className="btn btn-primary w-full"><AiOutlineGoogle className="text-2xl"></AiOutlineGoogle> Login with Google</button>
                    </div>
                    <label className="bg-button label label-text-alt px-8 pb-8 rounded-b-xl">
                        Are you new here?
                        <NavLink to={"/register"} className="label-text-alt link link-hover font-semibold text-primary">Register now</NavLink>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Login;