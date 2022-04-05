import activeStar from './images/activeStar.svg'
import star from './images/star.svg'

const Roadmap = (props) => {
    const {title, image, rating, id, Pop} = props.road;
    const index = [1, 2, 3, 4, 5];
    
    const roadmapClass = (Pop)? 'roadmap pop' : 'roadmap';
    console.log(Pop, roadmapClass)
    return (
        <div className={roadmapClass}>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="infos">
                
                    <p className="title">{title}</p>
                
                <div className="rating">
                    {
                        index.map(ind => {
                            return (ind <= rating)? <img key={ind} src={activeStar} alt=""  />:<img key={ind} src={star} alt="" />;
                        })
                    }
                </div>
                
            </div>
        </div>
    );
}

export default Roadmap;



/*const rating = (props) => {
    const { rating } = props;

    return (
        
            
        </div>
    );
}*/