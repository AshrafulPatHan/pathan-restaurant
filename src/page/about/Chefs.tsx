
import redytabil from "../../assets/image/redytabil.jpg";
import picake from "../../assets/image/piecake.jpg";
import itemsmenu from "../../assets/image/menuitems.jpg";
import CornBig from "../../assets/icon/menu.svg";


const Chefs = () => {
    return (
        <section className="bg-white py-low">
            <div className="max-w-[1500px] mx-auto bg-[#F6F6F6] p-6 rounded-md border-[1.5px] border-gray-700 border-dotted ">
                <div className="bg-white p-6 rounded-xl border-[1.5px] border-gray-700 border-dotted flex flex-col items-center gap-5 ">
                    <p className="text-c-sec italic">Enjoy your time in our Restaurant with pleasure.</p>
                    <h3 className="text-heading text-black">Meet Our Chef's</h3>
                    <img src={CornBig} alt="" />
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                       <div>
                        <div className="w-[430px] h-[280px] ">
                            <img src="https://i.ibb.co.com/My1q5RD7/elone.webp" alt="chefs"
                            className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4>Chefs name</h4>
                            <p>Master chefs in dhaka</p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, deserunt repellendus repellat cumque quaerat atque facilis error nam a. Et?
                            </p>
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

export default Chefs;