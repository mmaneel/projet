import React, { Component } from 'react';
import {Progress} from './progress'



export class AllProgress extends Component {
    state = { 
        progress: [
            {id:1, title: 'web dev'},
            {id:2, title: 'design'},
            {id:3, title: 'networking'},
            {id:4, title: 'networking'}
        ]
     } 
    render() { 
        return (
            <>
            
            <div className="units">
            <h2 className="progressTitle">Latest Progress</h2>  
                {this.state.progress.map(p => <Progress key={p.id} p={p}/>)}
            </div>
            </>
        );
    }
}
 
//export default AllProgress;