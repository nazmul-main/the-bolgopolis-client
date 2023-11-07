import { useQuery } from "@tanstack/react-query";

const FeaturedBlogs = () => {
    const blogData = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/v1/blogs');
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error fetching data: ' + error.message);
        }
    };

    const { data: blogs, isLoading } = useQuery({queryKey: ['/api/v1/blogs'],queryFn: blogData,});

    if (isLoading) {
        return <p>Loading...</p>;
    }
    console.log(blogs);

    // Sort the blogs by word count in descending order
    const sortedBlogs = blogs.sort((a, b) => b.long_description.split(' ').length - a.long_description.split(' ').length);

    // Get the top 10 blogs
    const top10Blogs = sortedBlogs.slice(0, 10);

    return (
        <div>
            <div className="max-w-6xl mx-auto py-8 px-4">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-700 text-white">
                        <tr>
                            <th className="w-1/12 py-2 text-center">NO</th>
                            <th className="w-4/12 py-2 text-center">Blog Title</th>
                            <th className="w-4/12 py-2 text-center">Blog Owner</th>
                            <th className="w-3/12 py-2 text-center">Owner Img</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {top10Blogs.map((blog, index) => (
                            <tr key={blog.id}>
                                <td className="w-1/12 py-2 text-center">{index + 1}</td>
                                <td className="w-4/12 py-2 text-center">{blog.title}</td>
                                <td className="w-4/12 py-2 text-center">{blog.displayName}</td>
                                <td className="w-3/12 py-2 text-center">
                                    <img
                                        src={blog.photoURL}
                                        alt={`${blog.displayName}'s Profile Picture`}
                                        className="w-12 h-12 rounded-full mx-auto"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeaturedBlogs;
