import { useMediaQuery } from 'usehooks-ts'

import * as SC from "./BookingHeroStyled"

import backgroundImageMobile from "../../assets/images/booking/hero-bg-mobile.jpg"
import backgroundImageTablet from "../../assets/images/booking/hero-bg-tablet.jpg"
import backgroundImageDesktop from "../../assets/images/booking/hero-bg-desktop.jpg"

import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg"


const BookingHero = (): JSX.Element => {
    
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)')
    const isDesktop = useMediaQuery('(min-width:1440px)')


    return (<SC.CommonContainer $image={isTablet ? backgroundImageTablet : isDesktop ? backgroundImageDesktop : backgroundImageMobile}>
        {isTablet || isDesktop ? <SC.LogoContainer><LogoSvg /></SC.LogoContainer> : <LogoSvg width={82} height={32}/>}
        
        <SC.Title>Reservations</SC.Title>
        <SC.Text>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</SC.Text>
        {!isTablet && !isDesktop ? <SC.ButtonLink href="#reserve">reserve place</SC.ButtonLink> : null}
        
    </SC.CommonContainer> );
}
 
export default BookingHero;