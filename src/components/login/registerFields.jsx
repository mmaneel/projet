import React from 'react'
import Logo from '../../LOGO.png'
import ReactDOM from 'react-dom';
import {auth} from '../../firebase.config.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export class RegFields extends React.Component{
    
    constructor(props){
        super(props);
        
    }

    state = {
        Email:"",
        password:"",
        Fname:"",
        Lname:"",
        merror:"",

    }

    //Put the Email and Password in a variable to sign up
    handleMailChange = (event)=> {
        this.setState({ Email: event.currentTarget.value});
    }

    handlePassChange = (event)=> {
        this.setState({ password: event.currentTarget.value});
    }

    //Register in the database 
    handleRegClick =(event)=>{
        event.preventDefault();
        //verification size password
        if(this.state.password.length<7){this.setState({merror :"Your passeword is too short"})}
        
        
        else {
            try {
                createUserWithEmailAndPassword(auth,this.state.Email,this.state.password);
            
            }catch(err){
                console.log(err.code)
                this.setState({merror: err.code });
            }
        }
        

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
                    
                    <input onChange={this.handleMailChange} type="email" placeholder='Email' />
                </div>

                <div className="formItem">
                    
                    <input onChange={this.handlePassChange} type="password" placeholder='Password'/>
                </div>
                <p>{this.state.merror}</p>

                
                
               
            </div>

            <div className="footer">
                <button className="loginBtn" onClick={this.handleRegClick}>Register</button>
            </div>
            </div>
            )
    }
}