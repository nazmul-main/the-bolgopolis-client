
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
import RecentBlog from '../Components/RecentBlog/RecentBlog';
import BlogDetails from '../Components/BlogDetails/BlogDetails';
import Error from '../pages/Error';
import UpdateBlog from '../Components/UpdateCoffe/UpdateCoffe';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Error></Error>,
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
                path: 'recentblog',
                element: <RecentBlog></RecentBlog>,
                
            },
            {
                path: 'wishlist',
                element: <PrivateRoute>
                    <Wishlist></Wishlist>
                </PrivateRoute>
            },
            {
                path: '/blogdetails/:id',
                element: <PrivateRoute>
                    <BlogDetails></BlogDetails>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5001/api/v1/blogs')
                
            },
            {
                path: '/update/:_id',
                element: <PrivateRoute>
                   <UpdateBlog></UpdateBlog>
                </PrivateRoute>,
                 loader: ({ params }) => fetch(`http://localhost:5001/api/v1/blogs/${params._id}`)
                
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