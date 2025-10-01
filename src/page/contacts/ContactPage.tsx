
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import map from "../../assets/icon/map-pin.svg";
import Call from "../../assets/icon/phone-call.svg";
import mail from "../../assets/icon/mail.svg";


const ContactPage = () => {
    return (
        <div className="max-w-screen overflow-x-hidden">
            <Navbar />
            <div className="bg-white">
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
                {/* section 3 map */}
                <div className="bg-black flex flex-col lg:flex-row gap-6 justify-center mx-auto mb-h p-6 w-[70vw] h-[450px] rounded-lg ">
                    <div className="bg-primary2 p-4 w-[310px] h-[400px] rounded-lg text-white flex-center gap-4 ">
                        <h5 className="text-c-sec text-2xl mb-3">NewYork Forked</h5>
                        <p>USA 27TH Brooklyn NY</p>
                        <p>+489756412322</p>
                        <p>yourmail@domain.com</p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d74216.90276894011!2d90.554368!3d23.6847104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1759304234877!5m2!1sen!2sbd"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-[50vw] rounded-xl h-[400px] "
                        ></iframe>
                    </div>
                </div>
                {/* section 4 contact */}
                <div>
                    <div></div>
                    <div>
                        <div>

                        <img src="https://i.ibb.co.com/Ps6Q2k1p/benjamin-voros-ph-IFd-C6l-A4-E-unsplash.jpg" alt="image" />
                        </div>
                        <div>
                            <h4>Call For Reservations</h4>
                            <p>Opening Hours</p>
                            <div>
                                <p>Sunday to Tuesday</p>
                                <p>09:00</p>
                                <p>22:00</p>
                            </div>
                            <div>
                                <p>Friday to Saturday</p>
                                <p>11:00</p>
                                <p>19:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;