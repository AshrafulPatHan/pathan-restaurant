import redytabil from "../../assets/image/redytabil.jpg";


const AboutOur = () => {
    return (
        <section className="bg-white py-low">
            <div className="max-w-[1500px] mx-auto bg-[#F6F6F6] p-6 rounded-md border-[1.5px] border-gray-700 border-dotted ">
                <div className="bg-white p-6 rounded-xl border-[1.5px] border-gray-700 border-dotted flex flex-col lg:flex-row justify-between ">
                    <div className="w-[99%] sm:w-[50%] ">
                        <p>Enjoy your time in our Place</p>
                        <h3>About Our Restaurant</h3>
                        <hr className="border border-dotted" />
                        <p>
                            ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Ut enim ad minima Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                        </p>
                        <p>
                            Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam porta facilisis. Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna.
                        </p>
                        <button className="btn-sec">Read more About us</button>
                    </div>
                    <div className="relative">
                        <div className="">
                            <img src={redytabil} alt="image" className="w-[614px] h-[400px] rounded-lg " />
                        </div>
                        <div className="absolute z-20 -bottom-10 -right-10 border border-dotted border-[#0000007c] p-4 bg-[#ffffff15] 
                        backdrop-blur-[4.3px] rounded-2xl w-[300px] h-[200px] ">
                            <p>Your website is fully responsive so visitors can view your content from their choice of device.</p>
                            <p>Mark Antony</p>
                            <p>Diamnt CEO</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutOur;