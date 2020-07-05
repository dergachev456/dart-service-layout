import React from 'react'
import './CountsSection.scss';
import image1 from '../../images/icons/counts-icon1.png'
import image2 from '../../images/icons/counts-icon2.png'
import image3 from '../../images/icons/counts-icon3.png'
import image4 from '../../images/icons/counts-icon4.png'

export default function CountsSection() {
    return (
        <section className="counts">
            <Count
                image={image1}
                bgColor="#80d8ff"
            >
                12000+<br />Business
                </Count>
            <Count
                image={image2}
                bgColor="#82b1ff"
            >
                60000+<br />Downloads
                </Count>
            <Count
                image={image3}
                bgColor="#b388ff"
            >
                30000+<br />Free Installs
                </Count>
            <Count
                image={image4}
                bgColor="#ea80fc"
            >
                40000+<br />Pro Users
            </Count>
        </section>
    )
}

const Count = ({ image, children, bgColor }) => {
    return (
        <div style={{ backgroundColor: bgColor }} className="count">
            <div className="count__content-container">
                <div className="count__content">
                    <div className="count__circle">
                        <img className="count__image" src={image} alt="count icon" />
                    </div>
                    <span className="count__text">{children}</span>
                </div>
            </div>
        </div>
    )
}
