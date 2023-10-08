import Avatar from '../../../src/assets/cat.png';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    if(loading){

    }
    return (
        <div className="navbar max-w-6xl mx-auto py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/">Home</NavLink>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="font-pressstart text-primary normal-case text-3xl text-shadow">PLAYGALA</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><a>aaa</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {
                    user ? <>
                        <div className="border px-4 flex items-center gap-2 h-full rounded">
                            {
                              user.photoURL ? <img className=' w-8 h-8 rounded-full' src={user.photoURL} alt="" /> : <img src={Avatar} alt="" />
                            }
                            {
                                user.displayName ? <span className=" leading-[44px]">{user.displayName}</span> : <span className=" leading-[44px]">Anonymous</span>
                            }
                        </div>

                        <div>
                            <Link onClick={logOut} className='bg-primary text-button hover:text-primary hover:bg-button btn shadow-[0px_0px_20px_rgba(204,243,0,0.5)]'>Logout</Link>
                        </div>
                    </> :
                        <>
                            <div>
                                <Link className='bg-primary text-button hover:text-primary hover:bg-button btn shadow-[0px_0px_20px_rgba(204,243,0,0.5)]' to={"/login"}>Login</Link>
                            </div></>
                }

            </div>
        </div>
    );
};

export default Header;