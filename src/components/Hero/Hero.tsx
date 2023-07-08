import { useMediaQuery } from 'usehooks-ts';


import * as SC from "./HeroStyled"

import heroMobile from "../../assets/images/homepage/hero-bg-mobile@2x.jpg"
import heroTablet from "../../assets/images/homepage/hero-bg-tablet.jpg"
import heroDesktop from "../../assets/images/homepage/hero-bg-desktop.jpg"

import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg"


const Hero = (): JSX.Element => {

    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)')
    const isDesktop = useMediaQuery('(min-width:1440px)')


    return (<SC.HeroStyled $image={isTablet ? heroTablet : isDesktop ? heroDesktop : heroMobile}>
        <SC.HeroContainer>
            {isTablet ? <LogoSvg /> : <LogoSvg  width={83} height={32}/>}
            
            <SC.SubTitle>Exquisite dining
                since 1989</SC.SubTitle>
            <SC.Text>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</SC.Text>
            <SC.LinkButton to="/booking">book a table</SC.LinkButton>
        </SC.HeroContainer>
    </SC.HeroStyled>);
}

export default Hero;