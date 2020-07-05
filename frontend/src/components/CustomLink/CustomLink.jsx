import React from 'react'
import './CustomLink.scss'
import {Link} from 'react-router-dom';

export const CustomLink = ({children, path, className }) => {

    return (
        <Link className={`custom-link ${className}`} to={path}>{children}</Link>
    )
}

