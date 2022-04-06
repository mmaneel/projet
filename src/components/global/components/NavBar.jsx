import Logo from '../images/Logo.svg'


export const NavBar = () => {

    
    
    return ( 
        <div className="NavBar">
            <a href='#' className="logo">
                <img src={Logo} alt="" />
            </a>
            <div className="navigations">
                <button className='btn btn-nav btn-nav-active'>Home</button>
                <button className='btn btn-nav'>About</button>
                <button className='btn btn-nav  '>Categories</button>
            </div>
            <div className="login">
                <button className="btn btn-login">Login</button>
                <button className="btn btn-orange btn-register">Register</button>
            </div>
        </div>
     );
}
 
