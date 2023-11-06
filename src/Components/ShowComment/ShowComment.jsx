import  { useEffect, useState } from "react";

const ShowComment = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/api/v1/user/comment')
            .then(res => res.json())
            .then(data => {
                setBlogData(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const allComment = [...blogData]
        .sort((a, b) => new Date(b.currentTime) - new Date(a.currentTime));

    return (
        <div>
            {
                allComment.map(blog => (
                    <div key={blog._id}>
                        
                        <h1>{blog.comment}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default ShowComment;
