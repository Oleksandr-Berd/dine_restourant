import * as SC from "./EnjoyablePlaceStyled"

import enjoyableImage from "../../assets/images/homepage/enjoyable-place-mobile@2x.jpg"

const EnjoyablePlace = () => {
    return (<SC.CommonContainer>
        <SC.Image src={enjoyableImage} alt="enjoyableImage"  width={327} height={400}/>
        <SC.FiguresContainer>
            <SC.Circle></SC.Circle>
            <SC.Line></SC.Line>
        </SC.FiguresContainer>
        <SC.Title>Enjoyable place
            for all the family</SC.Title>
        <SC.Text>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</SC.Text>
    </SC.CommonContainer>);
}

export default EnjoyablePlace;