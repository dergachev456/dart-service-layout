import Header from '../../components/Header/Header'
import './WelcomeBlock.scss'
import React, { Component } from 'react'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import video from '../../videos/video.mp4'
import poster from '../../images/backgrounds/poster.png'

import Video from '../../components/Video/Video'
export default class WelcomePage extends Component {
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
            <div className="welcome__wrapper">
                <div className="welcome__container">
                    <Header switchMobileHeader={this.switchMobileHeader} />
                    <div className="welcome__main">
                        <div className="welcome__info">
                            <span className="welcome__info-title">lorem Ipsum<br /> Dolor sit amet</span>
                            <span className="welcome__info-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                            </span>
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
            </div>
        )
    }
}

