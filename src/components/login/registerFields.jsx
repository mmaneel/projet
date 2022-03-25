import React from 'react'
import Logo from '../../LOGO.png'
import ReactDOM from 'react-dom';

export class RegFields extends React.Component{
    
    constructor(props){
        super(props);
        
    }
  
    render(){
        return (
            <div className="regFields">
            <h1>Create New Account</h1>

            <div className="logo">
                <img src={Logo} />
            </div>
            <div className="formGroup">
                

                <div className="name">
                    <div className="formItem">
                    
                        <input type="text" placeholder='First Name' />
                    </div>

                    <div className="formItem">
                    
                        <input type="text" placeholder='Last Name' />
                    </div>
               </div>

                <div className="formItem">
                    
                    <input type="email" placeholder='Email' />
                </div>

                <div className="formItem">
                    
                    <input type="password" placeholder='Password'/>
                </div>

                
                
               
            </div>

            <div className="footer">
                <button className="loginBtn">Register</button>
            </div>
            </div>
            )
    }
}