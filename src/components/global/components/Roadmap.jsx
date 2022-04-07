import {Rating} from '../global';
//import './roadmap.scss'






export const Roadmap = (props) => {
    const {title, image, rating, id, Pop} = props.road;
    
    
    const roadmapClass = (Pop)? 'roadmap pop' : 'roadmap';
    
    return (
        <div className={roadmapClass}>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="infos">
                
                    <p className="title">{title}</p>
                
                <Rating rating={rating}/>
                
            </div>
        </div>
    );
}

