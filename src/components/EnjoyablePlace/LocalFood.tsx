import { useMediaQuery } from "usehooks-ts"

import * as SC from "./EnjoyablePlaceStyled"

import localFoodMobile from "../../assets/images/homepage/locally-sourced-mobile.jpg"
import localFoodTablet from "../../assets/images/homepage/locally-sourced-tablet.jpg"

import Figures from "components/Figures/Figures"
import LocalSquare from "components/Figures/LocalSquare"
import LocalLines from "components/Figures/LocalLines"

const LocalFood = () => {

    const isTablet = useMediaQuery("(min-width:768px)")

    return (<SC.CommonContainerLocalFood>
        <SC.LocalImage src={isTablet ? localFoodTablet : localFoodMobile} alt="enjoyableImage" />
        {isTablet ? <LocalLines/> : null}
        <Figures/>
        <SC.Title>The most locally sourced food</SC.Title>
        <SC.Text>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</SC.Text>

        {isTablet ? <LocalSquare /> : null}
       
    </SC.CommonContainerLocalFood> );
}
 
export default LocalFood;