import { useMediaQuery } from "usehooks-ts"

import * as SC from "./ReadyStyled"

import backImage from "../../assets/images/homepage/ready-bg-mobile.jpg"
import backImageTablet from "../../assets/images/homepage/ready-bg-tablet.jpg"
import backImageDesktop from "../../assets/images/homepage/ready-bg-desktop.jpg"



const Ready = (): JSX.Element => {

    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)')
    const isDesktop = useMediaQuery('(min-width:1440px)')

    return (<SC.CommonContainer $image={isTablet ? backImageTablet : isDesktop ? backImageDesktop : backImage}>
        <SC.Title>Ready to make a reservation?</SC.Title>
        <SC.LinkButton to="/booking">book a table</SC.LinkButton>
    </SC.CommonContainer> );
}
 
export default Ready;