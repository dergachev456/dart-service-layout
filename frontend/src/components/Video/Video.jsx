import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import React, { Component } from 'react'
import './Video.scss'
export default class Video extends Component {
    state = {
        showText: true
    }

    hideText = () => {
        this.setState({ showText: false });
    }
    render() {
        const { width, height, poster, video } = this.props;
        const {showText} = this.state;
        const text = showText && <span className="video__text">Watch the video</span>;

        return (
            <div onClick={this.hideText} className="video">
                <Player
                    fluid={false} height={height}
                    width={width}
                    poster={poster}>
                    <source src={video} />
                </Player>
                {text}
            </div>
        )
    }
}
