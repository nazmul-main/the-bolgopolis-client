import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const currentTime = new Date().toLocaleString();

  useEffect(() => {
    fetch(`http://localhost:5001/api/v1/update/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  // ...
const handleUpdate = (e) => {
  e.preventDefault()
  const form = e.target;
  const title = form.title.value;
  const img = form.photo.value;
  const category = form.category.value;
  const short_description = form.short_description.value;
  const long_description = form.long_description.value;
  console.log(title, img, category, short_description, long_description, currentTime);

  const updatedBlog = {
    title, img, category, short_description, long_description, currentTime
  };

  console.log(updatedBlog);

  fetch(`http://localhost:5001/api/v1/blogs/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedBlog),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      form.reset();
      alert('Blog updated successfully');
    });
};



  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 md:px-12">
      <form className="px-4 md:px-12 py-4 bg-[#F5EEC8]" onSubmit={handleUpdate}>
        <div>
          <h2 className="py-4 text-xl md:text-3xl font-bold text-center">Update Blog</h2>
          <div className="md:grid grid-cols-2 justify-center gap-7 py-3 mt-5 mb-5">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                name="title"
                type="text"
                defaultValue={blogData.title}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                name="photo"
                type="text"
                defaultValue={blogData.img}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                Current time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                name="time"
                type="text"
                defaultValue={currentTime}
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                defaultValue={blogData.category}
                required
              >
                <option value="Select">Select your Category</option>
                <option value="Cooking">Cooking</option>
                <option value="Travel">Travel</option>
                <option value="Fitness">Fitness</option>
                <option value="Gardening">Gardening</option>
                <option value="Finance">Finance</option>
                <option value="Art">Art</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>
            <div className="col-span-2">
              <span>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="short_description">
                  Short description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                  name="short_description"
                  defaultValue={blogData.short_description}
                  required
                ></textarea>
              </span>
              <span>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="long_description">
                  Long description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                  name="long_description"
                  defaultValue={blogData.long_description}
                  required
                ></textarea>
              </span>
              <button className="btn bg-[#555843] hover:bg-[#34362a] text-white w-full my-4">Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
