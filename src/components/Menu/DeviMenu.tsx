import * as SC from "./DeviMenuStyled"

import salmonImage from "../../assets/images/homepage/salmon-mobile@2x.jpg"
import beefImage from "../../assets/images/homepage/beef-mobile@2x.jpg"
import mousseImage from "../../assets/images/homepage/chocolate-mobile@2x.jpg"
import Figures from "components/Figures/Figures"

const DeviMenu = (): JSX.Element => {
    return (<SC.MenuContainer>
        <Figures />
        <SC.TitleContainer>
        <SC.MainTitle>A few highlights from our menu</SC.MainTitle>
            <SC.Text>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</SC.Text>
        </SC.TitleContainer>
        <SC.ItemContainer>
            <SC.ImageMenu src={salmonImage} alt="salmon" />
            <SC.SubTitle>Seared Salmon Fillet</SC.SubTitle>
            <SC.Text>Our locally sourced salmon served
                with a refreshing buckwheat summer salad.</SC.Text>
        </SC.ItemContainer>
        <SC.ItemContainer>
            <SC.ImageMenu src={beefImage} alt="beef" />
            <SC.SubTitle>Rosemary Filet Mignon</SC.SubTitle>
            <SC.Text>Our prime beef served to your taste
                with a delicious choice of seasonal
                sides.</SC.Text>
        </SC.ItemContainer>
        <SC.ItemContainer>
            <SC.ImageMenu src={mousseImage} alt="mousse" />
            <SC.SubTitle>Summer Fruit Chocolate Mousse</SC.SubTitle>
            <SC.Text>Creamy mousse combined with
                summer fruits and dark chocolate shavings.</SC.Text>
        </SC.ItemContainer>
    </SC.MenuContainer>);
}

export default DeviMenu;