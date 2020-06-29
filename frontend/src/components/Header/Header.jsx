import React from 'react'
import logo from '../../images/logos/main-logo.png'
import './Header.scss'
import { Link } from 'react-router-dom';

export default function Header(props) {
    const { switchMobileHeader } = props;
    return (
        <header className="header">
            <HeaderLogo />
            <HeaderLinks />
            <button onClick={switchMobileHeader} className="header__burger">&#9776;</button>
        </header>
    )
}

export function HeaderLogo() {
    return (
        <div className="header__logo-wrapper">
            <Link to="/">
                <div className="header__logo-container">
                    <img className="header__logo" src={logo} alt="logo" />
                    <div className="header__logo-text">
                        <span>dart</span>
                        <span>service manager</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export function HeaderLinks() {
    return (
        <>
            <Link to="/" className="header__link" href="/">Home</Link>
            <Link to="/" className="header__link" href="/">Service</Link>
            <Link to="/" className="header__link" href="/">Extension</Link>
            <Link to="/" className="header__link" href="/">Pricing</Link>
            <Link to="/" className="header__link" href="/">Help</Link>
            <Link to="/" className="header__sing-up" href="/">sign up</Link>
        </>
    )
}
