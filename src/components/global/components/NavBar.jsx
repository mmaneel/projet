import Logo from '../images/Logo.svg';
import notiIcon from '../images/notiIcon.svg';
import menuIcon from '../images/menuIcon.svg';
import profileImg from '../images/profile0.svg'
import {Search} from '../global';
import { useState } from 'react';

export const NavBar = () => {

    const [isUserActive, setIsUserActive] = useState(false);

    
    
    return ( 
        <div className="NavBar">
            <a href='#' className="logo">
                <img src={Logo} alt="" />
            </a>
            
            <div className="navigations">
                <div className="nav-cont">
                    <button className='btn btn-nav btn-nav-active'>Home</button>
                </div>
                <div className="nav-cont">
                    <button className='btn btn-nav'>About</button>
                </div>
                <div className="nav-cont">
                    <button className='btn btn-nav  '>Roadmaps</button>

                </div>
                <div className="nav-cont">
                    <button className='btn btn-nav  '>Forum</button>
                </div>
            </div>
            <Search/>
            {isUserActive && <Profile setIsUserActive={setIsUserActive} isUserActive={isUserActive}/>}
            {!isUserActive && <Logins setIsUserActive={setIsUserActive} isUserActive={isUserActive}/>}
        </div>
     );
}
 
const Logins = (props) => {
    return (
        <div className="login">
            <button className="btn btn-login">Login</button>
            <button onClick={()=>{props.setIsUserActive(!props.isUserActive)}} className="btn btn-orange btn-register">Register</button>
        </div>
    );
}

const Profile = (props) => {
    return (
        <div className="profile">
            <ul className='dropdownMenu'>
                <MenuItem icon={notiIcon} class={'noti'} setIsUserActive={props.setIsUserActive} isUserActive={props.isUserActive}/>
                <div className='profileImg'>
                    <img src={profileImg}  />
                </div>
                <MenuItem icon={menuIcon} class={'menu'} setIsUserActive={props.setIsUserActive} isUserActive={props.isUserActive}/>
            </ul>
        </div>
    );
}


const MenuItem = (props) => {
    return (
        <a className='menuItem'>
            <img onClick={()=>{props.setIsUserActive(!props.isUserActive)}} src={props.icon} className={props.class} /> 
        </a>
    )
}