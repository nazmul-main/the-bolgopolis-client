import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(100deg, black, #4D4855)',
        opacity: 0.8, // Set the opacity to 0.8 if you want a slightly transparent overlay
    };
    


    return (
        <div>
            <Carousel showArrows={true} showStatus={false} showThumbs={false} autoPlay={false} interval={2000} infiniteLoop={true}>
                <div>
                    <div style={overlayStyle}></div>
                    <img
                        className='md:h-[80vh] h-[40vh] object-cover'
                        src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image 1"
                    />
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3">
                        <h1 className="text-xl lg:text-6xl md:text-4xl font-bold text-white">Hello 👋, we are Porto, exploring  
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dce498] to-[#72d7d0]"> fashion</span>, 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> lifestyle</span> and
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> health</span>
.</h1>
                        <p className="text-[8px] md:text-[18px]">Introducing a modern and sleek theme for Ghost. Perfect for <span className="font-bold"> magazine, newsletter, professional and personal blog </span>publishing.</p>
                        <Link to="/allphones">
                            <button className="btn-sm md:btn-md bg-[#555843]  hover:bg-[#34362a] text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-4-12">
                    <div style={overlayStyle}></div>
                    <img
                        className='md:h-[80vh] h-[40vh] object-cover'
                        src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image 2"
                    />
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                       <h1 className="text-xl lg:text-6xl md:text-4xl font-bold text-white">Hello 👋, we are Porto, exploring  
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dce498] to-[#72d7d0]"> fashion</span>, 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> lifestyle</span> and
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> health</span>
.</h1>
                        <p className="text-[8px] md:text-[18px]">Introducing a modern and sleek theme for Ghost. Perfect for <span className="font-bold"> magazine, newsletter, professional and personal blog </span>publishing.</p>
                        <Link to="/allphones">
                            <button className="bg-[#555843]  hover:bg-[#34362a] text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div style={overlayStyle}></div>
                    <img
                        className='md:h-[80vh] h-[40vh] object-cover'
                        src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image 3"
                    />
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                       <h1 className="text-xl lg:text-6xl md:text-4xl font-bold text-white">Hello 👋, we are Porto, exploring  
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dce498] to-[#72d7d0]"> fashion</span>, 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> lifestyle</span> and
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> health</span>
.</h1>
                        <p className="text-[8px] md:text-[18px]">Introducing a modern and sleek theme for Ghost. Perfect for <span className="font-bold"> magazine, newsletter, professional and personal blog </span>publishing.</p>
                        <Link to="/allphones">
                            <button className="bg-[#555843]  hover:bg-[#34362a] text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <div style={overlayStyle}></div>
                    <img
                        className='md:h-[80vh] h-[40vh] object-cover'
                        src="https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image 4"
                    />
                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                       <h1 className="text-xl lg:text-6xl md:text-4xl font-bold text-white">Hello 👋, we are Porto, exploring  
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dce498] to-[#72d7d0]"> fashion</span>, 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> lifestyle</span> and
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> health</span>
.</h1>
                        <p className="text-[8px] md:text-[18px]">Introducing a modern and sleek theme for Ghost. Perfect for <span className="font-bold"> magazine, newsletter, professional and personal blog </span>publishing.</p>
                        <Link to="/allphones">
                            <button className="bg-[#555843]  hover:bg-[#34362a] text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>

                </div>
                <div>
                    <div style={overlayStyle}></div>
                    <img
                        className='md:h-[80vh] h-[40vh] object-cover'
                        src="https://images.unsplash.com/photo-1695192681811-969dc36a801e?auto=format&fit=crop&q=80&w=1452&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image 5"
                    />

                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                       <h1 className="text-xl lg:text-6xl md:text-4xl font-bold text-white">Hello 👋, we are Porto, exploring  
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dce498] to-[#72d7d0]"> fashion</span>, 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> lifestyle</span> and
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> health</span>
.</h1>
                        <p className="text-[8px] md:text-[18px]">Introducing a modern and sleek theme for Ghost. Perfect for <span className="font-bold"> magazine, newsletter, professional and personal blog </span>publishing.</p>
                        <Link to="/allphones">
                            <button className="bg-[#555843]  hover:bg-[#34362a] text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>

                </div>
                <div>
                    <div style={overlayStyle}></div>
                    <img
                        className='md:h-[80vh] h-[40vh] object-cover'
                        src="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Image 6"
                    />

                    <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1 className="text-xl lg:text-6xl md:text-4xl font-bold text-white">Hello 👋, we are Porto, exploring  
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dce498] to-[#72d7d0]"> fashion</span>, 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> lifestyle</span> and
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-[#dce498] to-[#72d7d0]"> health</span>
.</h1>
                        <p className="text-[8px] md:text-[18px]">Introducing a modern and sleek theme for Ghost. Perfect for <span className="font-bold"> magazine, newsletter, professional and personal blog </span>publishing.</p>
                        <Link to="/allphones">
                            <button className="bg-[#555843]  hover:bg-[#34362a] text-white px-4 py-2 mt-4 rounded-full">All Phones</button>
                        </Link>
                    </div>
                </div>
            </Carousel>
        </div>



    );
};

export default Banner;