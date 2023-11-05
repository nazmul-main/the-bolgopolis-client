/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const MainLayout = ({ children }) => {

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
                        <div className="flex-1 px-2 mx-2 text-xl font-bold">Your Logo</div>
                        <div className="flex-none hidden lg:block">
                            <div className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/" activeClassName="active">Home
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/addblog" activeClassName="active">ADD BLOG
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/allblogs" activeClassName="active">ALL BLOGS
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/featuredblogs" activeClassName="active">Featured Blogs
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/wishlist" activeClassName="active">Wishlist
                                </NavLink>
                               

                            </div>
                        </div>
                        <NavLink
                                    className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/signin" activeClassName="active">SiginIn
                                </NavLink>
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/" activeClassName="active">Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/addblog" activeClassName="active">ADD BLOG
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/allblogs" activeClassName="active">ALL BLOGS
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/featuredblogs" activeClassName="active">Featured Blogs
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-ghost'} to="/wishlist" activeClassName="active">Wishlist
                    </NavLink>
                    
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;