import { useLoaderData, useParams } from "react-router-dom";


const BlogDetails = () => {

    const blogs = useLoaderData()
    const { id } = useParams()
    const blog = blogs.find(data => data._id === id);
    console.log(blog);



    return (
        <div className="max-w-screen-xl mx-auto px-4 py-7">
            <div className="grid gap-4 md:grid-cols-5 items-center justify-between">
                <div className=" md:col-span-3 md:space-y-5 space-y-3">
                    <span className="text-black text-sm  border-2 border-pink-400 bg-red-100 px-3 py-2 rounded-2xl font-semibold ">{blog.category}</span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl">{blog.title}</h1>
                    <p className="text-xl md:text-2xl lg:text-3xl">{blog.short_description}</p>
                    <p className=" ">{blog.long_description}</p>
                    <p className=" "><span className="font-bold">Add On:</span> {blog.currentTime}</p>
                </div>
                <div className="md:col-span-2">
                    <div className="h-88 ">
                        <img className="object-cover w-full h-full" src={blog.img} alt="" />
                    </div>
                </div>
                

            </div>

        </div>
    );
};

export default BlogDetails;