import React from 'react';

// import logo from './../../assets/images/background.png';

//styles
import "./Header.scss"

export const Header = () => {
    return (
        <div className="Header">
            {/* <img src={logo} alt="Logo" className="logo" /> */}
                <div className="container">
                    <div className="Header_wrap">
                        <div>Alkoolike</div>
                        <div>Jo Alkoolike</div>
                    </div>
                </div>
        </div>
    )
}
