import activeStar from '../images/activeStar.svg'
import star from '../images/star.svg'


export const Rating = ({rating}) => {
    const index = [1, 2, 3, 4, 5];

    return ( 
        <div className="rating">
                    {
                        index.map(ind => {
                            return (ind <= rating)? <img key={ind} src={activeStar} alt=""  />:<img key={ind} src={star} alt="" />;
                        })
                    }
        </div>
     );
}
