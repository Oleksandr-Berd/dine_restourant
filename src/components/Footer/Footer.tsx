import * as SC from "./FooterStyled"

import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg"

const Footer = (): JSX.Element => {
    return (<SC.CommonContainer>
        {/* <SC.Title>dine</SC.Title> */}
        <LogoSvg/>
        <SC.AddressContainer>
            <SC.Address>Marthwaite, Sedbergh
                Cumbria</SC.Address>
            <SC.Tel href="tel:+00441234567">+00 44 123 4567</SC.Tel>
        </SC.AddressContainer>
        <SC.Schedule>
            <SC.ScheduleTitle>open times</SC.ScheduleTitle>
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
        </SC.Schedule>
    </SC.CommonContainer> );
}
 
export default Footer;