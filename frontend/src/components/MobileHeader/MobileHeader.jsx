import React from 'react'
import Portal from '../Portal'
import './MobileHeader.scss'
import { HeaderLinks } from '../Header/Header'
export default function MobileHeader(props) {
    const {switchMobileHeader} = props;
    return (
        <Portal>
            <div className="mobile-header">
                <HeaderLinks />
                <button onClick={switchMobileHeader} className="mobile-header__close">&#10006;</button>
            </div>
        </Portal>
    )
}
