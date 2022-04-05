import {Day} from './day'
import { Road } from './Road';
export const Stats = () =>{

    const roads = [
        {id: 1, color: 'green', name:'Design'},
        {id: 2, color: 'blue', name:'Web Dev'},
        {id: 3, color: 'white', name:'Networking'},
    ]
    const weekDays = [
        {day: 'Sun', id:1, prog:30, road: roads[0]},
        {day: 'Mon', id:2, prog:40, road: roads[2]},
        {day: 'Tue', id:3, prog:80, road: roads[2]},
        {day: 'Wen', id:4, prog:30, road: roads[1]},
        {day: 'Thu', id:5, prog:70, road: roads[1]},
        {day: 'Fri', id:6, prog:0, road: roads[0]},
        {day: 'Sat', id:7, prog:80, road: roads[2]}
    ];

    


    return (
        <div className="stats">
            <div className="title">
                <h3>Time spent on learning</h3>
            </div>
            
            <div className="days">
            {weekDays.map(day => <Day day={day} key={day.id}/>  )}
            </div>

            <div className="enrolledRoadmaps">
                {roads.map(r => <Road key={r.id} road={r}/>)}
            </div>
        </div>
    );
}