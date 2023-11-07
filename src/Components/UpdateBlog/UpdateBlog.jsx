// import React, { useEffect, useState } from 'react';

const UpdateBlog = ({ match }) => {
    console.log(match);
//   const [blogData, setBlogData] = useState(null);

//   useEffect(() => {
//     // Fetch data from your API using the blog ID from the route parameter
//     fetch(`http://localhost:5001/api/v1/update/blogs/${match.params.id}`)
//       .then((response) => response.json())
//       .then((data) => setBlogData(data))
//       .catch((error) => console.error(error));
//   }, [match.params.id]);

//   if (!blogData) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
      <h1>Update Blog</h1>
      <p>Title: {blogData.title}</p>
      <p>Content: {blogData.content}</p>
      {/* Display other blog data here */}
    </div>
  );
};

export default UpdateBlog;
