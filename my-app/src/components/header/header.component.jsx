import React from "react";
import './header.styles.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assest/083 crown.svg'


const Header = () => (



    <div className='header'>
        <Link  className='logo-container' to="/">
            <Logo  className='logo' />
        </Link>
        <div className='options'  >  
        
            <Link className='option' to="/shop"  > shop </Link>
            <Link className='option' to="/contact"  > contact </Link>
        
        </div>
        

    </div>

)


export default Header;