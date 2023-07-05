import * as SC from "./EnjoyablePlaceStyled"

import localFood from "../../assets/images/homepage/locally-sourced-mobile@2x.jpg"

const LocalFood = () => {
    return (<SC.CommonContainer>
        <SC.LocalImage src={localFood} alt="enjoyableImage" width={327} height={400} />
        <SC.FiguresContainer>
            <SC.Circle></SC.Circle>
            <SC.Line></SC.Line>
        </SC.FiguresContainer>
        <SC.Title>The most locally sourced food</SC.Title>
        <SC.Text>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</SC.Text>
    </SC.CommonContainer> );
}
 
export default LocalFood;