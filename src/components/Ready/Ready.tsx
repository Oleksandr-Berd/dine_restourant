import { useMediaQuery } from "usehooks-ts"

import * as SC from "./ReadyStyled"

import backImage from "../../assets/images/homepage/ready-bg-mobile.jpg"
import backImageTablet from "../../assets/images/homepage/ready-bg-tablet.jpg"


const Ready = (): JSX.Element => {

const isTablet = useMediaQuery("(min-width:768px)")

    return (<SC.CommonContainer image={isTablet ? backImageTablet :backImage}>
        <SC.Title>Ready to make a reservation?</SC.Title>
        <SC.LinkButton to="/booking">book a table</SC.LinkButton>
    </SC.CommonContainer> );
}
 
export default Ready;