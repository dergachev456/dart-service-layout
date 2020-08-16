import React from 'react'
import arrow from '../../images/icons/services/services_arrow.png'
import './Card.scss'
const Card = ({ isOpened, icon, image, text, title, switchCard }) => {
    return (
        <div className="card">
            <div onClick={switchCard} className="card__head">
                <img className="card__icon" src={icon} alt="icon" />
                <span className="card__title">{title}</span>
                <div className="card__arrow-container">
                    <img
                        className={isOpened ? "card__arrow-opened" : 'card__arrow'}
                        src={arrow}
                        alt="arrow"
                    />
                </div>
            </div>
            {
                isOpened && (
                    <div className="card__main">
                        <div className="card__image-container">
                            <img className="card__image" src={image} alt="content" />
                        </div>
                        <p className="card__text">
                            {text}
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default Card;