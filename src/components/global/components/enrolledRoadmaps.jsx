import { useEffect, useState } from "react";
import {Image} from "../utils/Image";
import {Rating} from '../global'
import { RoadsEnrolled } from "../utils/utils";

export const Enrolled = (props) => {


  




    const [enrolled , setEnrolled] = useState([]);
    const [image, setImage] = useState(null)
    useEffect(()=>{
        //fetching all roadmaps from DB will happen here

        // i'll use an array from props just for testing
        const enrolledRoads = RoadsEnrolled();
        //props.allRoads.filter(r => r.enr == true);
        setEnrolled(enrolledRoads)
        
        
    }, [])

    const calcProgress = (prog) => {
        return {width: `${prog}%`};
    }
    


    return ( 
        <>
            {enrolled.map(r => 
            <div key={r.id} className="roadmap roadmap-enrolled " >
                <div className="image">
                <Image fileName={`${r.id}`} />
                </div>
                <div className="infos">
                <div className="title">
                    <p>{r.title}</p>    
                </div>

                <div className="progContainer">
                    <div className="prog" style={calcProgress(r.prog)}>
                    <div className="percentage"><p>{r.prog}%</p></div>

                    </div>
                </div>

                <Rating rating={r.rating}/>
            </div>
                </div>
            )}
        </>
     );
}
 
