import React, { Component } from 'react';

import {ProfileInfos} from "./ProfileInfos"
import { Status } from "../profile/Status"




export class MainContainer extends Component {
    state = {  } 
    render() { 
        return (
            <div className="mainContainer">
                <Status />
                <ProfileInfos />
            </div>
        );
    }
}
 
