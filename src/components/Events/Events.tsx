import * as SC from "./EventsStyled"

import familyImage from "../../assets/images/homepage/social-events-mobile.jpg"
import specialImage from "../../assets/images/homepage/special-events-mobile.jpg"
import socialImage from "../../assets/images/homepage/social-events-mobile.jpg"

const Events = () => {



    return (<SC.CommonContainer>
        <SC.ImageEvents src={familyImage} alt="family" />
        <SC.ButtonsContainer>
            <SC.ButtonsItem>family gathering</SC.ButtonsItem>
            <SC.ButtonsItem>special events</SC.ButtonsItem>
            <SC.ButtonsItem>social events</SC.ButtonsItem>

        </SC.ButtonsContainer>
        <SC.TextContainer>
            <SC.Title>Family Gathering</SC.Title>
            <SC.Text>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</SC.Text>
        </SC.TextContainer>
        <SC.LinkButton to="/booking">book a table</SC.LinkButton>
    </SC.CommonContainer> );
}
 
export default Events;