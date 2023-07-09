import { useMediaQuery } from "usehooks-ts"

import * as SC from "./EnjoyablePlaceStyled"

import enjoyableImageMobile from "../../assets/images/homepage/enjoyable-place-mobile.jpg"
import enjoyableImageTablet from "../../assets/images/homepage/enjoyable-place-tablet.jpg"
import enjoyableImageDesktop from "../../assets/images/homepage/enjoyable-place-desktop.jpg"


import Figures from "components/Figures/Figures"
import { SquareStyled } from "components/Figures/FiguresStyled"

const EnjoyablePlace = () => {

    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)')
    const isDesktop = useMediaQuery('(min-width:1440px)')

    return (<SC.CommonContainer>
        <SC.Image src={isTablet ? enjoyableImageTablet : isDesktop ? enjoyableImageDesktop : enjoyableImageMobile} alt="enjoyableImage" />
        {isTablet || isDesktop ?
            <SquareStyled />
            : null}
        {isDesktop ? <SC.DesktopEnjoyablePlaceContainer>  <Figures />
            <SC.Title>Enjoyable place
                for all the family</SC.Title>
            <SC.Text>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</SC.Text></SC.DesktopEnjoyablePlaceContainer> : <>
            <Figures />
            <SC.Title>Enjoyable place
                for all the family</SC.Title>
            <SC.Text>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</SC.Text>
        </>}

    </SC.CommonContainer>);
}

export default EnjoyablePlace;