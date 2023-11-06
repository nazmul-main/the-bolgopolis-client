import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import ShowComment from "../ShowComment/ShowComment";


const BlogDetails = () => {

    const { user } = useAuth();
    // console.log(user);
    const { email, photoURL, displayName } = user;
    console.log(email, photoURL, displayName);
    const currentUser = user.email;


    const blogs = useLoaderData()
    const { id } = useParams()
    const blog = blogs.find(data => data._id === id);
    // console.log(blog);
    const owner = blog.email;

    // console.log(currentUser, owner);
    const isOwner = currentUser === owner;
    const currentTime = new Date().toLocaleString();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        console.log(photoURL, displayName, comment,currentTime);


        const commnetData = {
            photoURL, displayName, comment, currentTime
        }


        fetch('http://localhost:5001/api/v1/user/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commnetData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
            window.location.reload()
            alert('Product added successfully', {
                position: 'top-center',
            });
        });






    }






    return (
        <div className="max-w-screen-xl mx-auto px-4 py-7 space-y-7">
            <div className="grid gap-4 md:grid-cols-5 items-center justify-between">
                <div className=" md:col-span-3 md:space-y-5 space-y-3">
                    <span className="text-black text-sm  border-2 border-pink-400 bg-red-100 px-3 py-2 rounded-2xl font-semibold ">{blog.category}</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl">{blog.title}</h1>
                    <p className="text-xl md:text-2xl lg:text-3xl">{blog.short_description}</p>
                    <p className=" ">{blog.long_description}</p>
                    {isOwner && (
                        <button
                            type="submit"
                            className="btn bg-[#555843] hover:bg-[#34362a] text-white mt-4"
                        >
                            Update
                        </button>
                    )}
                </div>
                <div className="md:col-span-2">
                    <div className="h-88 space-y-3">
                        <img className="object-cover w-full h-full rounded-md" src={blog.img} alt="" />
                        <p className=" "><span className="font-bold">Add On:</span> {blog.currentTime}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-[#D0D4CA] py-3 pr-3 md:py-6 md:pr-6 rounded-md ">
                <div className="mx-auto col-span-2 md:col-span-1">
                    <img className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover" src={user.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"} alt={user.displayName} />
                   
                </div>
                <div className="col-span-10 md:col-span-11">
                    {currentUser === owner ? (
                        <p className="text-gray-600 text-xl font-bold">You cannot comment on your own blog</p>
                    ) : (
                        <form onSubmit={handleAddProduct} className="">
                            <div className="md:py-2 px-4 mb-2 md:mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 d">
                                <textarea
                                    rows="3"
                                    className="px-0 w-full md:w-1/3  text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                                    placeholder="Write a comment..."
                                    required
                                    name="comment"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn bg-[#555843] hover.bg-[#34362a] text-white">
                                Post comment
                            </button>
                        </form>
                    )}
                </div>

            </div>
            <ShowComment></ShowComment>

        </div>
    );
};

export default BlogDetails;