
const AddBlog = () => {
    const currentTime = new Date().toLocaleString();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.photo.value;
        const currentTime = new Date().toLocaleString();
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        console.log(title, img, currentTime, category, short_description, long_description);

        const myData = {
            title, img, currentTime, category, short_description, long_description
        }
        console.log(myData);

        fetch('http://localhost:5001/api/v1/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json({

            }))
            .then(data => {
                console.log(data);
                form.reset();
                alert('Product added successfully', {
                    position: 'top-center', 
                });
            })
    
    };
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8 md:12">
            <form className='px-7 md:px-12 py-4 border-4 border-red-300 bg-red-200' onSubmit={handleAddProduct} >
                <div>
                    <h2 className="py-4 text-xl md:text-3xl font-bold text-center">Add Blog</h2>
                    <div className="md:grid grid-cols-2 justify-center gap-7 py-3 mt-5 mb-5">

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="title"
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Image URL
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="photo"
                                type="text"
                                placeholder="phone"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Current time
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="time"
                                type="text"
                                placeholder={currentTime}
                                
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Category
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                                name="category"
                            >
                                <option value="Select" selected>Select your Catecory</option>
                                <option value="Cooking" >Cooking</option>
                                <option value="Travel">Travel</option>
                                <option value="Technology">Technology</option>
                                <option value="Fitness">Fitness</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Gardening">Gardening</option>
                                <option value="Finance">Finance</option>
                                <option value="Art">Art</option>
                                <option value="Science">Science</option>
                                <option value="Fashion">Fashion</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <span>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Short description
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="short_description"
                                    placeholder="Short_description"
                                    required
                                ></textarea>
                            </span>
                            <span>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    long description
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="long_description"
                                    placeholder="Long_description"
                                    required
                                ></textarea>
                            </span>
                            <button className="btn bg-gray-700  text-red-500 hover:bg-gray-800  w-full my-4">ADD</button>
                        </div>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddBlog;