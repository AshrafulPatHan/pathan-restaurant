import redytabil from "../../assets/image/redytabil.jpg";
import picake from "../../assets/image/piecake.jpg";
import itemsmenu from "../../assets/image/menuitems.jpg";
import CornBig from "../../assets/icon/menu.svg";


const Service = () => {
    return (
        <section className="bg-white py-low">
            <div className="max-w-[1500px] mx-auto bg-[#F6F6F6] p-6 rounded-md border-[1.5px] border-gray-700 border-dotted ">
                <div className="bg-white p-6 rounded-xl border-[1.5px] border-gray-700 border-dotted flex flex-col items-center gap-5 ">
                    <p className="text-c-sec italic">Why people choose us</p>
                    <h3>Prepare For First Class Service</h3>
                    <img src={CornBig} alt="" />
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <div className="relative w-[400px] h-[300px] shadow-sm rounded-lg overflow-hidden">
                            {/* Image Background */}
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src={redytabil}
                                alt="Shoes"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Card Body */}
                            <div className="relative p-6 flex flex-col items-center justify-center h-full text-white">
                                <h2 className="text-xl font-bold mb-2">Dally New fresh menus</h2>
                                <p className="">
                                    Start eating batter
                                </p>
                                <p>01.</p>
                            </div>
                        </div>
                        <div className="relative w-[400px] h-[300px] shadow-sm rounded-lg overflow-hidden">
                            {/* Image Background */}
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src={picake}
                                alt="Shoes"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Card Body */}
                            <div className="relative p-6 flex flex-col items-center justify-center h-full text-white">
                                <h2 className="text-xl font-bold mb-2">Dally New fresh menus</h2>
                                <p className="">
                                    Start eating batter
                                </p>
                                <p>02.</p>
                            </div>
                        </div>
                        <div className="relative w-[400px] h-[300px] shadow-sm rounded-lg overflow-hidden">
                            {/* Image Background */}
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src={itemsmenu}
                                alt="Shoes"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Card Body */}
                            <div className="relative p-6 flex flex-col items-center justify-center h-full text-white">
                                <h2 className="text-xl font-bold mb-2">Dally New fresh menus</h2>
                                <p className="">
                                    Start eating batter
                                </p>
                                <p>03.</p>
                            </div>
                        </div>
                    </div>
                    <img src={CornBig} alt="" />
                    <button className="btn-sec">Get In touch With Us</button>
                </div>
            </div>
        </section>
    );
};

export default Service;

