import React from 'react'
import './ServicesSection.scss'
import CardContainer from '../../components/Card/CardContainer'
import  statistics from '../../images/icons/services/services_statistics.png'
import  mail from '../../images/icons/services/services_mail.png'
import  team from '../../images/icons/services/services_team.png'
import  settings from '../../images/icons/services/services_settings.png'
import  feed from '../../images/icons/services/services_feed.png'

import temp_image from '../../images/images/services.png'
export default function ServicesSection() {
    return (
        <section className="services">
            <div className="services__wrapper">
                <h2 className="services__title title">Services</h2>
                <span className="services__text text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</span>
                <div className="services__cards">
                    <CardContainer
                        title="Statistics"
                        icon={statistics}
                        isOpened={true}
                        image={temp_image}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
                    />
                    <CardContainer
                        title="Inbox"
                        icon={mail}
                        isOpened={false}
                        image={temp_image}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
                    />
                    <CardContainer
                        title="Team"
                        icon={team}
                        isOpened={false}
                        image={temp_image}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
                    />
                    <CardContainer
                        title="Settings"
                        icon={settings}
                        isOpened={false}
                        image={temp_image}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
                    />
                    <CardContainer
                        title="Feed"
                        icon={feed}
                        isOpened={false}
                        image={temp_image}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
                    />
                </div>
            </div>
        </section>
    )
}
