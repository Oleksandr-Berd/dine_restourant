import * as SC from "./EnjoyablePlaceStyled"

import enjoyableImage from "../../assets/images/homepage/enjoyable-place-mobile@2x.jpg"
import Figures from "components/Figures/Figures"

const EnjoyablePlace = () => {

    return (<SC.CommonContainer>
        <SC.Image src={enjoyableImage} alt="enjoyableImage"  />
        <Figures />
        <SC.Title>Enjoyable place
            for all the family</SC.Title>
        <SC.Text>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</SC.Text>
    </SC.CommonContainer>);
}

export default EnjoyablePlace;