import { useMediaQuery } from "usehooks-ts";

import * as SC from "./FooterStyled"

import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg"


const Footer = (): JSX.Element => {
    const isTablet = useMediaQuery('(min-width:768px)')



    return (<SC.CommonContainer>
        <LogoSvg />
        {isTablet ? <SC.CommonAddressContainer>
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
        </SC.CommonAddressContainer>
            :
            <>
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
            </>
        }
        
    </SC.CommonContainer> );
}
 
export default Footer;