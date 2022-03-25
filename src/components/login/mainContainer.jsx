import React from 'react'
import {RegFields} from './index';
import {LoginFields} from './index';




export class MainContainer extends React.Component{
    
    state ={
        logActive: true
    }

    constructor(props){
        super(props);
    }

    displayReg = () =>{
        document.getElementById('log').classList.toggle("active-state")
        document.getElementById('reg').classList.toggle("active-state")
        this.setState({logActive: false})
    }

    displayLog = () => {
        document.getElementById('log').classList.toggle("active-state")
        document.getElementById('reg').classList.toggle("active-state")
        this.setState({logActive: true})
    }

    render(){
        const logClasses = `navBtn ${this.state.logActive?'activeState':''}`;
        const regClasses = `navBtn ${!this.state.logActive?'activeState':''}`
        console.groupEnd('login: ' ,logClasses);
        console.log('register: ',regClasses);
        return(
        <>
        <div className="mainContainer">
            <div className="header">
                <button className={logClasses} id="log" onClick={this.displayLog}>Login</button>
                <button className={regClasses} id="reg" onClick={this.displayReg}>Register</button>
                
            </div>
            <hr/>
            <div id="core">
               { this.state.logActive ? <LoginFields active={this.state.logActive} onChange={this.handleChange} />: <RegFields active={!this.state.logActive}/>}
            </div>
            <hr />
        </div>
        </>
        )
    }
}