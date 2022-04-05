import splash from './images/splash.svg'
import Roadmap from './Roadmap'



const PopularPaths = (props) => {
    
    const roadmaps = [...props.roadmaps];
   console.log(roadmaps)
    return ( 
        <div className="popular">
            <div className="popTitle">
                <img src={splash} alt="" />
                <h2>Most Popular Path</h2>
            </div>

            <div className="popNavs">
                <div className="navs">
                    <button className="btn btn-nav btn-nav-active">All Categories</button>
                    <button className="btn btn-nav">Web Dev</button>
                    <button className="btn btn-nav">Design</button>
                    <button className="btn btn-nav">Network</button>
                </div>
            </div>

            <div className="roadmaps">
                
                {roadmaps.map(r => <Roadmap key={r.id} road={r} />)}
                
            </div>
        </div>
     );
}
 
export default PopularPaths;




