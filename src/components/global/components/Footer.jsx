import vectorLogo from '../../LandingPage/images/vectorLogo.svg';
import fbIcon from '../../LandingPage/images/fbIcon.svg';
import instaIcon from '../../LandingPage/images/instaIcon.svg';
import twitterIcon from '../../LandingPage/images/twitterIcon.svg';




export const Footer = () => {
    return ( 
        <div className="footer">
            <div className="title">
                <img src={vectorLogo} alt="" />
                HBird
            </div>

            <div className="infos">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam, sapiente suscipit accusantium quae est dolorem molestiae magni.</p>
            </div>

            <div className="sociale">
                <button className="btn btn-icon">
                    <img src={fbIcon} alt="" />
                </button>
                <button className="btn btn-icon">
                    <img src={instaIcon} alt="" />

                </button>
                <button className="btn btn-icon">
                    <img src={twitterIcon} alt="" />

                </button>
            </div>
        </div>
     );
}
 