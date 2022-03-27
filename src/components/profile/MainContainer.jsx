import React, { Component } from 'react';

import {PofileInfos} from "./ProfileInfos"
import { Stats } from "./stats"




class MainContainer extends Component {
    state = {  } 
    render() { 
        return (
            <div className="mainContainer">
                <Stats />
                <PofileInfos />
            </div>
        );
    }
}
 
export default MainContainer;