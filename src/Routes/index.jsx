
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
// import Home from '../pages/Home';
import AddBlog from '../pages/AddBlog';
import AllBlogs from '../pages/AllBlogs';
import FeaturedBlogs from '../pages/FeaturedBlogs';
import Wishlist from '../pages/Wishlist';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from '../Private/PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: 'addblog',
                element: <AddBlog></AddBlog>
            },
            {
                path: 'allblogs',
                element: <AllBlogs></AllBlogs>
            },
            {
                path: 'featuredblogs',
                element: <FeaturedBlogs></FeaturedBlogs>
            },
            {
                path: 'wishlist',
                element: <PrivateRoute>
                    <Wishlist></Wishlist>
                </PrivateRoute>
            }
        ]
    },
    {
        path:'/signin',
        element: <SignIn></SignIn>
    },
    {
        path:'/signup',
        element: <SignUp/>
    }
]);

export default routes;