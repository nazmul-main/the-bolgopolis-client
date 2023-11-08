/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";

const ShowComment = ({ id }) => {
    const allComments = async () => {
        try {
            const response = await fetch('https://the-blogopolis-server.vercel.app/api/v1/user/comment');
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error fetching data: ' + error.message);
        }
    };


    const { data: commnets, isLoading } = useQuery({ queryKey: ['/api/v1/user/comment'], queryFn: allComments })
    if (isLoading) {
        return <p>loading...</p>
    }
    const filteredComments = commnets.filter(blog => blog.id === id);


    return (
        <div className="w-2/5">
            <div className="space-y-2  ">
                {
                    filteredComments.map(blog => (
                        <div className="border-2 py-4 bg-[#853d3d74] rounded-md px-4 " key={blog._id}>
                            <div className="flex gap-2">
                                <div>
                                    <h1><img className="w-10 h-10 rounded-full" src={blog.photoURL ? blog.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"} alt="" /></h1>
                                </div>
                                <div className="w-full ">
                                    <h1 className="text-xl font-bold">{blog.displayName}</h1>
                                    <h1 className="text-md rounded-md font-semibold bg-slate-200 w-full py-2 px-2">{blog.comment}</h1>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ShowComment;
