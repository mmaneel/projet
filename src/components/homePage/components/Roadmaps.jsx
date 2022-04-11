import {Enrolled} from '../index'
import { allRoads } from '../../global/utils/getRoads';
import {Roadmap} from '../../global/global'
import { useState } from 'react';

export const Roadmaps = (props) => {
    const [all, setAll] = useState(false);
    const [btnMsg, setBtnMsg] = useState('See More')
    //const ind = random();
    const roads = showRoads(all);
    //console.log(ind, roads, allRoads())
    const handleClick = (all, msg) => {
        setAll(all);
        setBtnMsg(`${msg}`);
    }
    return ( 
        <div className="homeBody">
            <Navs categories={props.allRoads} />
            <div className="roadmaps">
                <div className="enrolledRoads">
                    <h2>My Roadmaps</h2>
                    <div className="roads">
                        <Enrolled allRoads={props.allRoads}/>
                    </div>
                </div>


                <div className="allRoads">
                    <h2 className='title'>All Roadmaps</h2>
                    <div className="roads">
                        {roads.map(r => <Roadmap road={r}/>)}
                    </div>
                    <div className="button">
                        <button onClick={()=>{
                            handleClick(!all, `${(btnMsg === 'See More')? 'See Less' : 'See More    '}`)
                        }} className="btn">{btnMsg}</button>
                    </div>
                </div>


            </div>
            </div>
     );
}
 





const Navs = (props) => {
   
    const cats = [...new Set(props.categories.map(c => c.cat))]

    return (
        <div className="navs">
            <button className="btn-nav btn-nav-active"> All Categories </button>



            {    cats.map(     cat => <button key={cat} className="btn-nav"> {cat} </button >        )      }




        </div>
    );
}











const random = () => {
    console.log('random: ', Math.random()* allRoads().length)
    return Math.ceil(Math.random()* (allRoads().length-7))
}

const showRoads = (all) => {
    const ind = random();
    const roads = allRoads().slice(ind, ind + 6);
    return all? allRoads(): roads;
}

