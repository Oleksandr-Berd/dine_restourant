import * as SC from "./BookingHeroStyled"

import backgroundImageMobile from "../../assets/images/booking/hero-bg-mobile.jpg"
import {ReactComponent as LogoSvg} from "../../assets/images/logo.svg"

const BookingHero = ():JSX.Element => {
    return (<SC.CommonContainer $image={backgroundImageMobile}>
        <LogoSvg />
        <SC.Title>Reservations</SC.Title>
        <SC.Text>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</SC.Text>
        <SC.ButtonLink href="#reserve">reserve place</SC.ButtonLink>
    </SC.CommonContainer> );
}
 
export default BookingHero;