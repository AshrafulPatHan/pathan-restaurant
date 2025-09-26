

const PopularBlog = () => {
    return (
        <div className="flex-center py-m">
            <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row justify-between text-white/80 ">
                <div className="w-[50%] ">
                    <div>
                        <img src="" alt="photo" />
                    </div>
                    <div className="w-[80%] ">
                        <p className="text-c-sec">66</p>
                        <p>
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi accusantium."
                        </p>
                        <p className="text-c-sec">Kevin Kowalsky - Restaurant's cheaf</p>
                    </div>
                </div>
                <div className="w-[50%] ">
                    <div className="flex flex-col items-center">
                        <p className="text-c-sec">Our Last Blog</p>
                        <h2 className="text-heading">Our Last News</h2>
                        <p>Upcoming Events & News</p>
                        <div></div>
                        <div>
                            <button className="btn-primary">Read more blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularBlog;