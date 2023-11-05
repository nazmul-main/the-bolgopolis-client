import { useEffect, useState } from "react";
import RecentblogCard from "./RecentblogCard";



const RecentBlog = () => {
   
    
    const [blogData, setBlogData] = useState([]);
    console.log(blogData);

    useEffect(() => {
        fetch('http://localhost:5001/api/v1/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogData(data); 
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);


    const sortedData = [...blogData].sort((a, b) => new Date(b.currentTime) - new Date(a.currentTime));
    console.log(sortedData);

    return (
        <div className='max-w-screen-xl px-4 mx-auto '>
            <h1 className="text-5xl text-center font-semibold my-12">Currrent Blog-{blogData.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center  ">
                {
                    sortedData.map(blog => (
                        <RecentblogCard key={blog._id} blog={blog}></RecentblogCard>
                    ))
                }

            </div>
        </div>
    );
};

export default RecentBlog;