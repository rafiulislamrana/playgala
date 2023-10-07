import Avatar from '../../../src/assets/cat.png'
const Header = () => {
    return (
        <div className="navbar max-w-6xl mx-auto py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="font-pressstart text-primary normal-case text-3xl text-shadow">PLAYGALA</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <div className="border px-4 flex items-center gap-2 h-full rounded">
                    <img src={Avatar} alt="" />
                    <span className=" leading-[44px]">Rafiul Islam Rana</span>
                </div>
                <div>
                    <a className="btn bg-primary border-primary text-button hover:text-primary shadow-[0px_0px_20px_rgba(204,243,0,0.5)]">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;