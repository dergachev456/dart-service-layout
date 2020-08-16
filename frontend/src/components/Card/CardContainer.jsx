import React, { Component } from 'react'
import Card from './Card'

export default class CardContainer extends Component {
    state = {
        isOpened: false
    }
    componentDidMount() {
        this.setState({ isOpened: this.props.isOpened })
    }
    switchCard = () => {
        this.setState(prev =>({ isOpened: !prev.isOpened}))
    }

    render() {
        const { isOpened } = this.state;
        const { text, image, icon, title } = this.props;
        return (
            <Card
                icon={icon}
                text={text}
                image={image}
                title={title}
                isOpened={isOpened}
                switchCard={this.switchCard}
            />
        )
    }
}
