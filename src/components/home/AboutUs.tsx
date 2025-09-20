import redytabil from "../../assets/image/redytabil.jpg"
import picake from "../../assets/image/piecake.jpg"
import itemsmenu from "../../assets/image/menuitems.jpg"


const AboutUs = () => {
    return (
        <div className="bg-white">
            <div>
                <div>
                    <p>Enjoy your time in our Place</p>
                    <h2>About Our Restaurant</h2>
                    <div>
                        Qed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.Ut enim ad minima Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.

                        Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam porta facilisis. Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis vitae quisque. Vulputate duis vel et odio hendrerit magna.
                    </div>
                    <div className="btn-sec">Read more About Us </div>
                </div>
                <div>
                    <div>
                        <img src={redytabil} alt="" />
                    </div>
                    <div>
                        <img src={picake} alt="" />
                    </div>
                    <div>
                        <img src={itemsmenu} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;