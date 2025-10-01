
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import map from "../../assets/icon/map-pin.svg";
import Call from "../../assets/icon/phone-call.svg";
import mail from "../../assets/icon/mail.svg";


const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <div>
                {/* section 1 */}
                <div className="background-image-cont h-[50vw] lg:h-[30vw] mt-m  flex-center ">
                    <p className="text-c-sec italic">Enjoy your time in our restaurant with pleasure</p>
                    <h3 className="text-heading">Our Restaurants Contacts</h3>
                </div>
                {/* section 2 */}
                <div className="pt-h flex flex-col lg:flex-row gap-8 justify-center mx-auto mb-m ">
                    <div className="w-[430px] h-[200px] flex flex-col lg:flex-row items-center gap-4 bg-[#F6F6F6] hover:bg-white border border-dotted p-4 rounded-md ">
                        <div className="bg-white w-[50px] h-[50px] border border-black/70 border-dotted rounded-md flex-center ">
                            <img src={map} alt="icon" className=" " />
                        </div>
                        <div className="w-[300px] ">
                            <h5 className="text-c-sec text-xl font-bold">Our Location</h5>
                            <p className="text-black/70 text-sm mt-4 mb-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
                            <a href="#" className="text-black/70 mt-4 mb-3 text-xs">USA 27TH Brooklyn NY</a>
                        </div>
                    </div>
                    <div className="w-[430px] h-[200px] flex flex-col lg:flex-row items-center gap-4 bg-[#F6F6F6] hover:bg-white border border-dotted p-4 rounded-md ">
                        <div className="bg-white w-[50px] h-[50px] border border-black/70 border-dotted rounded-md flex-center ">
                            <img src={Call} alt="icon" className="  " />
                        </div>
                        <div className="w-[300px] ">
                            <h5 className="text-c-sec text-xl font-bold">Our Phone</h5>
                            <p className="text-black/70 text-sm mt-4 mb-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
                            <a href="#" className="text-black/70 mt-4 mb-3 text-xs">+489756412322 +123456789222</a>
                        </div>
                    </div>
                    <div className="w-[430px] h-[200px] flex flex-col lg:flex-row items-center gap-4 bg-[#F6F6F6] hover:bg-white border border-dotted p-4 rounded-md ">
                        <div className="bg-white w-[50px] h-[50px] border border-black/70 border-dotted rounded-md flex-center ">
                            <img src={mail} alt="icon" className=" " />
                        </div>
                        <div className="w-[300px] ">
                            <h5 className="text-c-sec text-xl font-bold">Our Mail</h5>
                            <p className="text-black/70 text-sm mt-4 mb-3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
                            <a href="#" className="text-black/70 mt-4 mb-3 text-xs">yourmail@domain.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;