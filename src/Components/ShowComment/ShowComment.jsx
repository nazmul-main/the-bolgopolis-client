/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";

const ShowComment = ({ id }) => {
    const allComments = async () => {
        try {
          const response = await fetch('http://localhost:5001/api/v1/user/comment');
          const data = await response.json();
          return data;
        } catch (error) {
          throw new Error('Error fetching data: ' + error.message);
        }
      };
  
    
    const {data: commnets ,isLoading} = useQuery({ queryKey: ['/api/v1/user/comment'], queryFn: allComments })
    if(isLoading) {
        return <p>loading...</p>
    }
    const filteredComments = commnets.filter(blog => blog.id === id);

    return (
        <div>
            {
                filteredComments.map(blog => (
                    <div key={blog._id}>
                        <h1>{blog.comment}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default ShowComment;
