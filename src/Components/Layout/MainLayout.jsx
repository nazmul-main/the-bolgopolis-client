/* eslint-disable react/prop-types */

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const MainLayout = ({ children }) => {
    const { user, logout } = useAuth()

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <div className="w-full navbar  max-w-screen-xl mx-auto px-4">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>

                        </div>
                        <div className=" flex-1 px-2 mx-2 text-xl font-bold">
                            <img className="w-12" src="../../../public/assets/png-clipart-blogger-facebook-edublog-livejournal-facebook-rectangle-india-removebg-preview.png" alt="" />
                        </div>

                        <div className="flex-none hidden lg:block">
                            <div className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/" activeClassName="active">Home
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/addblog" activeClassName="active">ADD BLOG
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/allblogs" activeClassName="active">ALL BLOGS
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/featuredblogs" activeClassName="active">Featured Blogs
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/wishlist" activeClassName="active">Wishlist
                                </NavLink>


                            </div>
                        </div>
                        {
                            user?.email ? <div className="">
                                <div className="dropdown dropdown-end mr-4">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"} alt={user.displayName} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className=":  dropdown-content mt-3 z-[10] p-2 shadow bg-[#6b7047] rounded-md   text-white py-2 px-4">
                                        <li>
                                            <h3 className=" font-semibold "> {user.displayName
                                            }</h3>

                                        </li>
                                        <li>
                                            <h3 className="font-semibold  ">{user.email
                                            }</h3>

                                        </li>
                                    </ul>

                                </div>
                                <button onClick={logout} className=" px-4 py-1 rounded-md bg-[#646852] text-[#fff] font-bold ">Sign Out</button>
                            </div> : <div className="navbar-end">
                                <Link to='/signin' className=" px-4 py-1 rounded-md bg-[#646852] text-[#fff] font-bold">Sign In</Link>
                            </div>
                        }
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-W">
                    {/* Sidebar content here */}
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/" activeClassName="active">Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/addblog" activeClassName="active">ADD BLOG
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/allblogs" activeClassName="active">ALL BLOGS
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/featuredblogs" activeClassName="active">Featured Blogs
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm bg-[#34362a] text-white' : 'btn btn-sm btn-ghost'} to="/wishlist" activeClassName="active">Wishlist
                    </NavLink>

                </ul>
            </div>
        </div>
    );
};

export default MainLayout;