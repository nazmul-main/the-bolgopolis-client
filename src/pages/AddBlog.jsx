import useAuth from "../Hooks/useAuth";

const AddBlog = () => {
    const { user } = useAuth();
    // console.log(user);
    const { email, photoURL, displayName } = user;
    console.log(email, photoURL, displayName);
    const currentTime = new Date().toLocaleString();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.photo.value;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        console.log(email, photoURL, displayName, title, img, currentTime, category, short_description, long_description);

        const myData = {
            email, photoURL, displayName, title, img, currentTime, category, short_description, long_description
        };
        console.log(myData);

        fetch('http://localhost:5001/api/v1/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
            alert('Product added successfully', {
                position: 'top-center',
            });
        });
    };
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8 md:12 ">
            <form className='px-4 md:px-12 py-4 bg-[#F5EEC8]' onSubmit={handleAddProduct} >
                <div>
                    <h2 className="py-4 text-xl md:text-3xl font-bold text-center">Add Blog</h2>
                    <div className="md:grid grid-cols-2 justify-center gap-7 py-3 mt-5 mb-5">

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                                name="title"
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Image
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                                name="photo"
                                type="text"
                                placeholder="Image URL"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2 read-only:" htmlFor="name">
                                Current time
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                                name="time"
                                type="text"
                                value={currentTime}

                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Category
                            </label>
                            <select
                                id="pricingType" name="category"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                                required
                            >
                                <option value="Select" selected>Select your Catecory</option>
                                <option value="Cooking" >Cooking</option>
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Short description
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
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
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#D0D4CA]"
                                    name="long_description"
                                    placeholder="Long_description"
                                    required
                                ></textarea>
                            </span>
                            <button className="btn bg-[#555843]  hover:bg-[#34362a] text-white    w-full my-4">ADD</button>
                        </div>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddBlog;