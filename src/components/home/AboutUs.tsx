import redytabil from "../../assets/image/redytabil.jpg";
import picake from "../../assets/image/piecake.jpg";
import itemsmenu from "../../assets/image/menuitems.jpg";

const AboutUs = () => {
    return (
        <section className="bg-white pt-low">
            <div className="max-w-[1170px] mx-auto bg-[#F6F6F6] p-4 rounded-2xl ">
                <div className=" bg-white m-6 p-4 rounded-2xl">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 p-4">
                        {/* Text Section */}
                        <div className="lg:w-1/2 space-y-6">
                            <p className="text-c-sec italic font-semibold">
                                Enjoy your time in our Place
                            </p>
                            <h2 className="text-3xl lg:text-4xl font-bold">
                                About Our Restaurant
                            </h2>
                            <hr className="border-t-2 border-dotted border-gray-400 my-4" />
                            <p className="text-gray-600 leading-relaxed">
                                Qed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium totam aperiam. Eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto beatae vitae dicta
                                sunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam
                                condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis
                                vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec
                                lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam
                                porta facilisis.
                            </p>
                            <button className="btn-sec">Read more About Us</button>
                        </div>

                        {/* Image Section */}
                        <div className="relative lg:w-1/2 flex justify-center items-center">
                            {/* Background dotted box */}
                            <div className="absolute w-[380px] h-[380px] rounded-2xl border border-dotted border-[#bda9a9e1] -top-6 -left-6"></div>

                            {/* Main Image */}
                            <img
                                src={redytabil}
                                alt="our tables"
                                className="w-[500px] h-[350px] rounded-xl object-cover relative z-10 shadow-md"
                            />

                            {/* Small Overlay Images */}
                            <img
                                src={picake}
                                alt="cake"
                                className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[130px] rounded-xl object-cover shadow-lg z-20"
                            />
                            <img
                                src={itemsmenu}
                                alt="menu items"
                                className="absolute top-[-40px] right-[-40px] w-[200px] h-[130px] rounded-xl object-cover shadow-lg z-20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
