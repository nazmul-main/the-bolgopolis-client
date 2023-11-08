
const Myblog = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 py-12 '>
            <div className=" mx-auto py-6 ">
                <h1 className="text-center text-2xl md:4xl lg:text-4xl font-bold">MY BLOG</h1>
                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet nesciunt,  officia doloremque iusto odio temporibus itaque<br /> cumque error earum nemo.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto items-center justify-center gap-5'>
                <div className="bg-stone-200 pb-4 ">
                    <div>
                        <img className=" rounded-md" src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>

                    <div className="px-3 space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold mt-2">Top Branding Surpirse</h2>
                        <p>A top branding surprise can be the unexpected success of a lesser-known brand, which suddenly gains widespread recognition and popularity due to a unique marketing campaign or innovative product. This surprise often challenges the dominance of established brands in the market. It is a testament to the power of creative branding strategies in reshaping consumer preferences.</p>
                        <button className="bg-[#555843]  hover:bg-[#34362a] text-white font-semibold text-xl px-4 py-2 mt-4 rounded-xm mb-4"> Subscribe</button>
                    </div>
                    
                </div>
                <div className="bg-stone-200 pb-4 ">
                    <div>
                        <img className=" rounded-md" src="https://plus.unsplash.com/premium_photo-1686244744785-528e406c3eda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>

                    <div className="px-3 space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold mt-2">Our SEO Marketing</h2>
                        <p className="">Our SEO marketing strategy focuses on optimizing website content and structure to improve search engine rankings, driving organic traffic and increasing online visibility. We employ keyword research, on-page optimization, and backlink building to enhance website performance and attract a targeted audience. Our goal is to boost online presence and drive conversions for our clients.</p>
                        <button className="bg-[#555843]  hover:bg-[#34362a] text-white font-semibold text-xl px-4 py-2 mt-4 rounded-xm mb-4"> Subscribe</button>
                    </div>
                    
                </div>
                <div className="bg-stone-200 pb-4 ">
                    <div>
                        <img className=" rounded-md" src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>

                    <div className="px-3 space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold mt-2">Beatiful Working</h2>
                        <p>Beautiful working suggests a harmonious and efficient work environment where tasks are completed with precision and enthusiasm, fostering a positive and productive atmosphere. It reflects the idea that when work is approached with care and dedication, it can yield not only exceptional results but also a sense of satisfaction and fulfillment.</p>
                        <button className="bg-[#555843]  hover:bg-[#34362a] text-white font-semibold text-xl px-4 py-2 mt-4 rounded-xm mb-4"> Subscribe</button>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Myblog;