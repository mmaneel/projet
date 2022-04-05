import React, { Component } from 'react';
import albert from './images/albert.png'




export class ProfileInfos extends Component {
    state = {
        imgSrc:'/home/codename0/Project_HBird/Hbird-betta/src/components/profile/images/albert.png'
     } 

    render() { 
        return (
            <div className="profile">
                <div className="info">
                    <img src={albert} alt="why the hell" />
                    <h4 className='name'>khorchf</h4>
                </div>
                <div className="controls">
                    <button className='edit'>//</button>
                    
                    <button className='fullProfile'>View Full Profile</button>
                </div>
            </div>
        );
    }
}
 
