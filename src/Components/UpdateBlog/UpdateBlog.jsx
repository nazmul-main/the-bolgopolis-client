

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
  const{id} = useParams()
  const [blogData, setBlogData] = useState();
  console.log(blogData);

  useEffect(() => {
    // Fetch data from your API using the blog ID from the route parameter
    fetch(`http://localhost:5001/api/v1/update/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error(error));
  },[id]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Update Blog</h1>

      
    </div>
  );
};

export default UpdateBlog;
