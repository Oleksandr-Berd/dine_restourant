import React from 'react';

import * as SC from "./HeroStyled"

import heroMobile from "../../assets/images/homepage/hero-bg-mobile@2x.jpg"
import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg"


const Hero = (): JSX.Element => {



    return (<SC.HeroStyled $image={heroMobile}>
        <SC.HeroContainer>
            <LogoSvg/>
            <SC.SubTitle>Exquisite dining
                since 1989</SC.SubTitle>
            <SC.Text>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</SC.Text>
            <SC.LinkButton to="/booking">book a table</SC.LinkButton>
        </SC.HeroContainer>
    </SC.HeroStyled>);
}

export default Hero;