import { useState } from "react";
import Rating from "../../global/components/Rating";
import _ from 'lodash';
import profile0 from '../images/profile0.svg'
import profile1 from '../images/profile1.svg'
import profile2 from '../images/profile2.svg'
import profile3 from '../images/profile3.svg'

export const Reviews = () => {
    const [ allReviews, setReview] = useState([
            {id: 1, review:'haaaw', rating: 4, profile: {img: profile0, fullName:'fullName0'} }, 
            {id: 2, review:'b3333', rating: 3, profile: {img: profile1, fullName:'fullName1'} },
            {id: 3, review:'meaao', rating: 1, profile: {img: profile2, fullName:'fullName2'} }, 
            {id: 4, review:'9iiiw', rating: 5, profile: {img: profile3, fullName:'fullName3'} },
            {id: 5, review:'9iiiw', rating: 3, profile: {img: profile3, fullName:'fullName4'} }
        ]
    );
    const pages = _.range(1, (Math.ceil(allReviews.length / 2) + 1));
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * 2;
    const [displayReviews, setDisplayReviews] = useState(allReviews.slice(startIndex, startIndex+2));
    
   

    
    return ( 
        <div className="reviews">
            <div className="mainContainer">
                {displayReviews.map(rev => {
                    return( 
                        <div key={rev.id} className="review">
                            <Rating rating={rev.rating}/>
                            <div className="reviewMsg">
                                {rev.review}
                            </div>
                            <div className="profile">
                                <div className="image">
                                    <img src={rev.profile.img} alt="" />
                                </div>
                                <div className="name">
                                    {rev.profile.fullName}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            


            <div className="pagination">
    
                {pages.map(page => 

                <div className={(page == currentPage)?"page-item active":"page-item"} key={page}>

                        <a className="page-link" onClick={()=>{onPageChange({page,allReviews, setCurrentPage, setDisplayReviews})}}>
                           
                        </a>

                    </div> 
                )}

            </div>

        </div>
     );
}
 
const onPageChange= ({page, allReviews, setCurrentPage, setDisplayReviews }) => {
    setDisplayReviews(allReviews.slice(((page - 1) * 2), ((page - 1) * 2)+2))
    setCurrentPage(page)
}