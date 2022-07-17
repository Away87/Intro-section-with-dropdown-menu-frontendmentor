import React from 'react'

import {
    Container,
    PictureGroup,
    TextContainer,
    Heading,
    Paragraph,
    Button,
    Clients,
    ClientLi,
    ClientImg
} from "./BodyElements.js"

import DesktopImg from  '../../images/image-hero-desktop.png' 
import MobileImg from '../../images/image-hero-mobile.png'
import ClientAudiophile from '../../images/client-audiophile.svg'
import ClientDatabiz from '../../images/client-databiz.svg'
import ClientMaker from '../../images/client-maker.svg'
import ClientMeet from '../../images/client-meet.svg'

const Body = () => {
    return(
        <>
        <Container>
            <PictureGroup>
                <source srcSet={DesktopImg} media="(min-width:640px)"/>
                <img src={MobileImg} />
            </PictureGroup>
            <TextContainer>
                <div>
                    <Heading> Make <span>remote work</span></Heading>
                    <Paragraph>
                    Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                    </Paragraph>
                    <Button>Learn more</Button>
                    <Clients>
                        <ClientLi><ClientImg src={ClientDatabiz} alt="databiz logo"/></ClientLi>
                        <ClientLi><ClientImg src={ClientAudiophile} alt="audiophile logo"/></ClientLi>
                        <ClientLi><ClientImg src={ClientMeet} alt="meet logo"/></ClientLi>
                        <ClientLi><ClientImg src={ClientMaker} alt="maker logo"/></ClientLi>
                    </Clients>
                </div>
            </TextContainer>
        </Container>
        </>
    )
}

export default Body