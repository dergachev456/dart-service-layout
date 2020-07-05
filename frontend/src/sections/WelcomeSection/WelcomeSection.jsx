import Header from '../../components/Header/Header'
import './WelcomeSection.scss'
import React, { Component } from 'react'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import video from '../../videos/video.mp4'
import poster from '../../images/backgrounds/poster.png'
import Video from '../../components/Video/Video'
import { CustomLink } from '../../components/CustomLink/CustomLink'

export default class WelcomeSection extends Component {
    state = {
        isMobile: false
    }
    switchMobileHeader = () => {
        this.setState(this.setState(prevState => ({ isMobile: !prevState.isMobile })))
    }

    render() {
        const { isMobile } = this.state;
        const mobile_header = isMobile && <MobileHeader switchMobileHeader={this.switchMobileHeader} />
        return (
            <section className="welcome">
                <div className="welcome__wrapper">
                    <Header switchMobileHeader={this.switchMobileHeader} />
                    <div className="welcome__main">
                        <div className="welcome__info">
                            <span className="welcome__info-title">lorem Ipsum<br /> Dolor sit amet</span>
                            <p className="welcome__info-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                            </p>
                            <div className="welcome__buttons">
                                <CustomLink
                                    className="welcome__buy"
                                    path="/"
                                >
                                    Buy now
                                </CustomLink>
                                <CustomLink
                                    className="welcome__try"
                                    path="/"
                                >
                                    Try for free
                                </CustomLink>
                            </div>
                        </div>
                        <Video
                            video={video}
                            poster={poster}
                            width={600}
                            height={318}
                        />
                    </div>
                </div>
                {
                    mobile_header
                }
            </section>
        )
    }
}

