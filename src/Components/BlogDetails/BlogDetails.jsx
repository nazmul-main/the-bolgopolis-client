/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import ShowComment from "../ShowComment/ShowComment";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const BlogDetails = () => {

    const { user } = useAuth();
    const { id } = useParams()
    const { email, photoURL, displayName } = user;
    // console.log(email, photoURL, displayName);
    const currentUser = user.email;


    const blogData = async () => {
        try {
            const response = await fetch('https://the-blogopolis-server.vercel.app/api/v1/blogs');
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error fetching data: ' + error.message);
        }
    };
    const { data: bolgs, isLoading } = useQuery({ queryKey: ['/api/v1/blogs'], queryFn: blogData })

    console.log(bolgs);
    if (isLoading) {
        return <p>loading...</p>
    }

    const blog = bolgs.find(data => data._id === id);
    console.log(blog);
    const owner = blog?.email;

    const isOwner = currentUser === owner;
    const currentTime = new Date().toLocaleString();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;

        const commnetData = {
            photoURL, displayName, comment, currentTime, id
        }


        fetch('https://the-blogopolis-server.vercel.app/api/v1/user/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commnetData)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                window.location.reload()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            });






    }


   



    return (
        <div className="min-h-screen">
              <div className="h-[15vh] md:h-[25vh] relative">
                <div className="absolute inset-0 bg-[#555843] bg-opacity-70"></div>
                <div className="bg-[url('https://i.ibb.co/z7Sd3R9/Mass-Circles-1.png')] bg-no-repeat bg-cover h-full">
                    <div className="text-white text-center absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#fff]">Details Blog</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 py-7 space-y-7 min-h-screen">

                <div className="grid gap-4 md:grid-cols-5 items-center justify-between ">
                    <div className=" md:col-span-3 md:space-y-5 space-y-3">
                        <span className="text-black text-sm  border-2 border-pink-400 bg-red-100 px-3 py-2 rounded-2xl font-semibold ">{blog.category}</span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl">{blog.title}</h1>
                        <p className="text-xl md:text-2xl lg:text-3xl">{blog.short_description}</p>
                        <p className=" ">{blog.long_description}</p>
                        {isOwner && (
                            <Link to={`/updateBlog/${blog._id}`}
                                type="submit"
                                className="btn bg-[#555843] hover:bg-[#34362a] text-white mt-4"
                            >
                                Update
                            </Link>
                        )}
                    </div>
                    <div className="md:col-span-2">
                        <div className="h-88 space-y-3">
                            <img className="object-cover w-full h-full rounded-md" src={blog.img} alt="" />
                            <p className=" "><span className="font-bold">Add On:</span> {blog.currentTime}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 bg-[#eceee9] border-2 border-[#D0D4CA] py-3 pr-3 md:py-6 md:pr-6 rounded-md  ">
                    <div className="mx-auto col-span-2 md:col-span-1">
                        <img className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover" src={user?.photoURL ? user?.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"} alt={user?.displayName} />

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
                <ShowComment id={id}></ShowComment>

            </div>
        </div>
    );
};

export default BlogDetails;