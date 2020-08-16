import React from 'react'
import './ToolSection.scss';
import image1 from '../../images/images/tool-image1.png'
import image2 from '../../images/images/tool-image2.png'
import image3 from '../../images/images/tool-image3.png'
import { CustomLink } from '../../components/CustomLink/CustomLink';

export default function ToolSection() {
    return (
        <section className="tool">
            <div className="tool__wrapper">
                <div className="tool__title-container">
                    <h2 className="title">Easy & Useful</h2>
                    <h3 className="tool__subtitle">Project Management Tool</h3>
                    <p className="tool__text text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </div>
                <div className="tool__container">
                    <ToolItem
                        img={image1}
                        title="Title Goes Here"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ToolItem
                        img={image2}
                        title="Title Goes Here"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ToolItem
                        img={image3}
                        title="Title Goes Here"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <CustomLink
                    path="/"
                    className="tool__button"
                >
                    Get started
                </CustomLink>
            </div>
        </section>
    )
}


const ToolItem = ({ img, title, text }) => {
    return (
        <div className="tool__item">
            <img className="tool__item-image" src={img} alt="character" />
            <h3 className="tool__item-title">{title}</h3>
            <p className="tool__item-text">{text}</p>
        </div>
    )
}