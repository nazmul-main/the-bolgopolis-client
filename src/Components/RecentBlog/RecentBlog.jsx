
import RecentblogCard from "./RecentblogCard";
import { useQuery } from "@tanstack/react-query";

const RecentBlog = () => {
    const blogData = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/v1/blogs');
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error fetching data: ' + error.message);
        }
    };
    const { data: bolgs, isLoading } = useQuery({ queryKey: ['/api/v1/blogs'], queryFn: blogData })
    if (isLoading) {
        return <p>loading...</p>
    }
    console.log(bolgs);

    const sortedData = [...bolgs]
        .sort((a, b) => new Date(b.currentTime) - new Date(a.currentTime))
        .slice(0, 6);

    return (
        <div className='max-w-screen-xl px-4 mx-auto'>
            <h1 className="text-5xl text-center font-semibold my-12">Currrent Blog-{bolgs.length}</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                {sortedData.map(blog => (
                    <RecentblogCard key={blog._id} blog={blog}></RecentblogCard>
                ))}
            </div>
        </div>
    );
};

export default RecentBlog;
