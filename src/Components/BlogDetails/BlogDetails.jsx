import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const BlogDetails = () => {

    const { user } = useAuth();
    // console.log(user);
    const { email, photoURL, displayName } = user;
    console.log(email, photoURL, displayName);

    const blogs = useLoaderData()
    const { id } = useParams()
    const blog = blogs.find(data => data._id === id);
    console.log(blog);




    return (
        <div className="max-w-screen-xl mx-auto px-4 py-7 space-y-7">
            <div className="grid gap-4 md:grid-cols-5 items-center justify-between">
                <div className=" md:col-span-3 md:space-y-5 space-y-3">
                    <span className="text-black text-sm  border-2 border-pink-400 bg-red-100 px-3 py-2 rounded-2xl font-semibold ">{blog.category}</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl">{blog.title}</h1>
                    <p className="text-xl md:text-2xl lg:text-3xl">{blog.short_description}</p>
                    <p className=" ">{blog.long_description}</p>
                    <button type="submit"
                        className="btn bg-[#555843]  hover:bg-[#34362a] text-white    l mt-4">
                        Update
                    </button>
                </div>
                <div className="md:col-span-2">
                    <div className="h-88 space-y-3">
                        <img className="object-cover w-full h-full" src={blog.img} alt="" />
                        <p className=" "><span className="font-bold">Add On:</span> {blog.currentTime}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-[#D0D4CA] py-12 pr-12 ">
                <div className="mx-auto">
                    <img className="w-12 h-12 rounded-full " src={photoURL} alt="" />
                </div>
                <div className="col-span-11">
                    <form className="mt-12-">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 d">
                            <label for="comment" className="sr-only">Your comment</label>
                            <textarea id="comment" rows="6"
                                className="px-0 w-1/2 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit"
                            className="btn bg-[#555843]  hover:bg-[#34362a] text-white     mt-4">
                            Post comment
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;