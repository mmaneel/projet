import logo from './images/Logo.svg'
import sendIcon from './images/sendMsgIcon.svg'
const AboutUs = () => {
    return ( 
        <div className="aboutUs">
            <div className="main">
                <div className="text">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <button className="btn btn-icon sendMsg">
                    <img src={sendIcon} alt="" />
                </button>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, consequuntur dignissimos itaque commodi nihil rerum eum quis debitis veritatis quibusdam soluta ea provident vero, accusamus vitae tempore modi perspiciatis officia?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quis soluta rem vero odit id! Nisi, dolores voluptate! Eos esse consectetur recusandae autem eligendi cumque ex fugiat laudantium, odio fugit!
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;