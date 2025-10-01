

const Reservation = () => {
    return (
        <div className="reservation-main h-auto lg:h-[600px] flex-center ">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-[400px] h-[500px] bg-[#00000010] backdrop-blur-[4.3px] rounded-2xl border-[1.2px] border-[#fafafa1c] p-6
                flex-center ">
                    <p className="text-c-sec italic">Pizza, Pasta and More</p>
                    <h5 className="text-3xl text-white">Italian Cuisine</h5>
                    <p className="text-center text-white/80 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button className="btn-primary mt-12">Read more</button>
                </div>
                <div className="w-[400px] h-[500px] bg-[#00000010] backdrop-blur-[4.3px] rounded-2xl border-[1.2px] border-[#fafafa1c] p-6
                flex-center ">
                    <p className="text-c-sec italic">Pizza, Pasta and More</p>
                    <h5 className="text-3xl text-white">Italian Cuisine</h5>
                    <p className="text-center text-white/80 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button className="btn-primary mt-12">Read more</button>
                </div>
                <div className="w-[400px] h-[500px] bg-[#00000010] backdrop-blur-[4.3px] rounded-2xl border-[1.2px] border-[#fafafa1c] p-6
                flex-center ">
                    <p className="text-c-sec italic">Pizza, Pasta and More</p>
                    <h5 className="text-3xl text-white">Italian Cuisine</h5>
                    <p className="text-center text-white/80 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <button className="btn-primary mt-12">Read more</button>
                </div>
                
            </div>
        </div>
    );
};

export default Reservation;