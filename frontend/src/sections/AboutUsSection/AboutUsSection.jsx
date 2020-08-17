import React from 'react'
import './AboutUsSection.scss';
import { CustomLink } from '../../components/CustomLink/CustomLink';

export default function AboutUsSection() {
    return (
        <section className="about">
            <div className="about__wrapper">
                <div className="about__main">
                    <div className="about__info">
                        <h2 className="about__title">What our customers<br/> have to say about us.</h2>
                        <p className="about__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                        <CustomLink
                            path="#"
                            className="about__button"
                        >
                            Get started
                        </CustomLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
