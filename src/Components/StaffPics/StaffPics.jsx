
const StaffPics = () => {
    return (
        <div className="max-w-screen-xl px-4 mx-auto my-12">
            <div>
                <div className=" mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold text-slate-700  text-center">StaffPicks</h1>
                    <p className="text-gray-500 text-center  ">
                        Staff Picks typically refers to a selection of products, services, or content recommended by the staff of a particular organization or platform. <br /> These recommendations are often considered to be of high quality, popular, or noteworthy .</p>
                </div>
                <div className='md:grid md:grid-cols-6 mx-auto  gap-4 py-12 '>
                    <div className='col-span-4 bg-stone-50 shadow-2xl'>

                        <div>
                            <img src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="px-3 py-2">
                            <p className="text-gray-400 font-bold text">
                                COMPANY
                            </p>

                            <p className="text-xl md:text-2xl font-bold">How to Travel Wight and vloger Welmis  Guteerrez  <br />  Over Come Self-Doubt</p>
                        </div>

                    </div>
                    <div className='col-span-2 bg-stone-300 px-4 py-2 rounded-md '>

                        <div>
                            <h1 className=" text-xl md:text-2xl font-bold text-center text-stone-600 py-2">StaffPicks</h1>
                        </div>
                        <div className="bg-slate-100 px-4 py-4 rounded-md my-2">
                            <p className="text-amber-700 font-semibold text-xl">How to</p>
                            <p className="text-[16px] font">How to Wright the Perfect Email -- <br /> Tips and Ticker</p>
                        </div>
                        <div className="bg-slate-100 px-4 py-4 rounded-md my-2">
                            <p className="text-amber-700 font-semibold text-xl">Gudie</p>
                            <p className="text-[16px] font"> Selet a gude for when you trvel <br /> It was so beatuy</p>
                        </div>
                        <div className="bg-slate-100 px-4 py-4 rounded-md my-2">
                            <p className="text-amber-700 font-semibold text-xl">Manege Transport</p>
                            <p className="text-[16px] font">How to book online transpor<br /> Use mobile and PC</p>
                        </div >
                        <div className="bg-slate-100 px-4 py-4 rounded-md my-2">
                            <p className="text-amber-700 font-semibold text-xl">Save Nibey</p>
                            <p className="text-[16px] font">How to Save Money on your spend time <br />It was so importent__</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default StaffPics;