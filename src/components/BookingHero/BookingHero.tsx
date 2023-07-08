import * as SC from "./BookingHeroStyled"

import backgroundImageMobile from "../../assets/images/booking/hero-bg-mobile.jpg"
import backgroundImageTablet from "../../assets/images/booking/hero-bg-tablet.jpg"

import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg"

import { useMediaQuery } from 'usehooks-ts'

const BookingHero = (): JSX.Element => {
    
    const isTablet = useMediaQuery('(min-width:768px)');


    return (<SC.CommonContainer $image={isTablet ? backgroundImageTablet : backgroundImageMobile}>
        {isTablet ? <SC.LogoContainer><LogoSvg /></SC.LogoContainer> : <LogoSvg width={82} height={32}/>}
        
        <SC.Title>Reservations</SC.Title>
        <SC.Text>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</SC.Text>
        {!isTablet ? <SC.ButtonLink href="#reserve">reserve place</SC.ButtonLink> : null}
        
    </SC.CommonContainer> );
}
 
export default BookingHero;