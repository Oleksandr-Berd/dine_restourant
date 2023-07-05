import * as SC from "./EnjoyablePlaceStyled"

import localFood from "../../assets/images/homepage/locally-sourced-mobile@2x.jpg"
import Figures from "components/Figures/Figures"

const LocalFood = () => {

    return (<SC.CommonContainer>
        <SC.LocalImage src={localFood} alt="enjoyableImage" />
        <Figures/>
        <SC.Title>The most locally sourced food</SC.Title>
        <SC.Text>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</SC.Text>
    </SC.CommonContainer> );
}
 
export default LocalFood;