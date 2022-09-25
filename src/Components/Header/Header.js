import React from 'react'
import logo from '../../assets/logo.svg'
import './header.scss'
import { useNavigate } from "react-router-dom";


const Header = () => {

    let navigate = useNavigate();

    return (
        <header>
            <div className='header-wrap'>
                <div className='logo'>
                    <img src={logo} alt='logo' onClick={() => {
                        navigate(`/`);
                    }} />
                </div>
                <nav>
                    <ul>
                        <li>Movies</li>
                        <li>TV Shows</li>
                        <li>Suggest me</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;