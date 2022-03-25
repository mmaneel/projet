import React from 'react';

import passIcon from '../../arcticons_password.png'
import userIcon from '../../Group.png'
import Logo from '../../LOGO.png'

export class LoginFields extends React.Component{

  
    constructor(props){
        super(props);
    }

    handleClick = () => {
        document.getElementById('reg').classList.toggle('hide');
        setTimeout(this.props.onChange, 0);
    }

    render(){

        return <div className="loginFields">

            <h1>Login</h1>
                 <div className="logo">
                <img src={Logo} />
            </div>

            <div className="formGroup">
                

                <div className="formItem">
                    <img src={userIcon} />
                    <input type="text" placeholder='Username' />
                </div>

                <div className="formItem">
                    <img src={passIcon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>

                
                
                <button className="forgotPass">Forgot your password?</button>
            </div>

            <div className="footer">
                <button className="loginBtn" >Log in</button>
            </div>
                </div>   
    }
}


