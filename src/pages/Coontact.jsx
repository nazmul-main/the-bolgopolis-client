import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Coontact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_qq73p72', 'template_xyo85wg', form.current, 'BwWYSCh22KjBFTByU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div className="min-h-screen">
            <div className="h-[15vh] md:h-[15vh] relative">
                <div className="absolute inset-0 bg-[#555843] bg-opacity-70"></div>
                <div className="bg-[url('https://i.ibb.co/z7Sd3R9/Mass-Circles-1.png')] bg-no-repeat bg-cover h-full">
                    <div className="text-white text-center absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#fff]">Contact</h1>
                    </div>

                </div>
                <div className="md:flex mx-auto items-center  mt-12 bg-[#adafa25a] py-12">
                    <div className="md:w-4/6  px-6">
                        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto ">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="form_name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#555843] peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#555843] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="form_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#555843] peer" placeholder=" " required />
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#555843] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea name="message" id="floating_message" className="block py-2.5 px-0 w-full h-20 text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#555843] peer" placeholder=" " required></textarea>
                                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#555843] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                            </div>


                            <button type="submit" className="text-white bg-[#555843] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                        </form>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold border-gray-300 border-b-2 pb-3 mb-3 text-[#555843]">Social Midea </h2>
                        <div className="md: flex gap-7 mt-4">
                            <a href="https://www.facebook.com/nazmulhossen539/" className="mb-4">
                                <FaFacebook className="text-[#555843] text-4xl hover:text-6xl"></FaFacebook>
                            </a>
                            <a href="https://www.instagram.com/nazmulhossen01/" className="mb-4">
                                <FaInstagram className="text-[#555843] text-4xl hover:text-6xl"></FaInstagram>
                            </a>
                            <a href="https://www.linkedin.com/in/nazmul-hossen-main/" className="mb-4">
                                <FaLinkedin className="text-[#555843] text-4xl hover:text-blu"></FaLinkedin>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Coontact;