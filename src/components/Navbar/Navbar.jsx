import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import { useState } from "react";

const Navbar = () => {
    const { logOut, user } = useAuth()

    const [showLogout, setShowLogout] = useState(false);

    const handleAvatarMouseEnter = () => {
        setShowLogout(true);
    };

    const handleAvatarMouseLeave = () => {
        setShowLogout(false);
    };

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addCraftItem'>Add Craft Item</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Artisan Alley</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="avatar flex flex-col md:flex-row justify-end gap-2" onMouseEnter={handleAvatarMouseEnter}
                        onMouseLeave={handleAvatarMouseLeave}>
                        <div className="w-10 rounded-full"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-place="top"
                            data-tooltip-content={user?.displayName || 'Name not found'}>
                            <img src={user?.photoURL} />
                            <Tooltip id="my-tooltip" />
                        </div> 
                        {showLogout && (
                            <button onClick={logOut} className="bg-[#800000] btn text-white">
                                Log Out
                            </button>
                        )}
                    </div> 
                    : 
                    <div className="flex flex-col justify-end md:flex-row gap-2"><Link to='/login'><button className="btn">Login</button></Link>
                        <Link to='/register'><button className="btn">Register</button></Link></div>
                }
            </div>
        </div>
    );
};

export default Navbar;