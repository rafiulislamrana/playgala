import { NavLink } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from 'react-toastify';



const Register = () => {

    const { createUser, update, HandleGoogleRegi } = useContext(AuthContext);

    const handleRegistration = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(form, name, email, password);

        createUser(email, password)
            .then(res => {
                toast("Your Account Created Successfully!");
                
                if (!res.user.displayName) {
                    update(name)
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                }
            })
            .catch(error => console.error(error));


    }
    return (
        <div className=" my-20">
            <div className="flex-col lg:flex-row-reverse justify-center items-center">
                <div className="card mx-auto flex-shrink-0 w-full max-w-md border-[1px] shadow-[0px_0px_20px_rgba(204,243,0,0.5)] border-primary rounded-xl bg-primary">
                    <div className="bg-primary rounded-xl pt-8 pb-5">
                        <h2 className="text-4xl text-button font-pressstart bg-primary rounded-xl text-center pb-2">REGISTER</h2>
                        <p className="text-center max-w-md mx-auto bg-primary text-button">Join in the club now!</p>
                    </div>
                    <form onSubmit={handleRegistration} className="card-body rounded-t-xl pt-5 pb-3 bg-button">
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
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />

                        </div>
                        <div className="form-control mt-6 gap-3">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="w-full px-8 bg-button">

                        <button onClick={HandleGoogleRegi} className="btn btn-primary w-full"><AiOutlineGoogle className="text-2xl"></AiOutlineGoogle> Register with Google</button>
                    </div>
                    <label className="bg-button label label-text-alt px-8 pb-8 rounded-b-xl">
                        Already have an account?
                        <NavLink to={"/login"} className="label-text-alt link link-hover font-semibold text-primary">Login now</NavLink>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Register;