
import play from '../images/play.svg'
import splash from '../images/splash.svg'
//import './intro.scss'

export const Intro = () => {
    return ( 
        <div className='IntroPage'>
         <div className="text">
                <img src={splash} alt="" className="splash" />
                <h1>Never get lost again when studying </h1>

                <p>Did you ever started learning something on internet and 5 hours laters you got suddenly on a video titled “how to feed a Zaki”?</p>
            </div>
            <div className="video">
                    <a href="https://www.youtube.com/watch?v=CAyWN9ba9J8" target='blank' className='btn btn-orange btn-video'>
                        Watch how it works
                        <img src={play} alt="" />
                    </a>
            </div>
        </div>
     ); 
}
 

 