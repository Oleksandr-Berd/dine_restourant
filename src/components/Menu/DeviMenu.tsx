import { useMediaQuery } from "usehooks-ts"

import * as SC from "./DeviMenuStyled"

import salmonImage from "../../assets/images/homepage/salmon-mobile.jpg"
import beefImage from "../../assets/images/homepage/beef-mobile.jpg"
import mousseImage from "../../assets/images/homepage/chocolate-mobile.jpg"

import salmonImageTablet from "../../assets/images/homepage/salmon-desktop-tablet.jpg"
import beefImageTablet from "../../assets/images/homepage/beef-desktop-tablet.jpg"
import mousseImageTablet from "../../assets/images/homepage/chocolate-desktop-tablet.jpg"

import Figures from "components/Figures/Figures"
import { Line } from "components/Figures/FiguresStyled"

const DeviMenu = (): JSX.Element => {

    const isTablet = useMediaQuery("(min-width:768px)")
    const isDesktop = useMediaQuery('(min-width:1440px)')


    return (<SC.MenuContainer>

        {isDesktop ?  
            <SC.TitleContainer>
                <Figures />
        <SC.MainTitle>A few highlights from our menu</SC.MainTitle>
            <SC.Text>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</SC.Text>
        </SC.TitleContainer> : <>  <Figures />
            <SC.TitleContainer>
                <SC.MainTitle>A few highlights from our menu</SC.MainTitle>
                <SC.Text>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</SC.Text>
            </SC.TitleContainer></>}
       
        {isDesktop ? <SC.ItemsContainerList><SC.ItemContainer>
            <SC.ImageMenu src={!isTablet ? salmonImage : salmonImageTablet} alt="salmon" />
            {isTablet ? <Line style={{ width: "32px", marginTop: "18px" }} /> : null}
            <SC.TextContainer>
                <SC.SubTitle>Seared Salmon Fillet</SC.SubTitle>
                <SC.Text>Our locally sourced salmon served
                    with a refreshing buckwheat summer salad.</SC.Text>
            </SC.TextContainer>
        </SC.ItemContainer>
            <SC.ItemContainer>
                <SC.ImageMenu src={!isTablet ? beefImage : beefImageTablet} alt="beef" />
                {isTablet ? <Line style={{ width: "32px", marginTop: "18px" }} /> : null}
                <SC.TextContainer>
                    <SC.SubTitle>Rosemary Filet Mignon</SC.SubTitle>
                    <SC.Text>Our prime beef served to your taste
                        with a delicious choice of seasonal
                        sides.</SC.Text>
                </SC.TextContainer>
            </SC.ItemContainer>
            <SC.ItemContainer>
                <SC.ImageMenu src={!isTablet ? mousseImage : mousseImageTablet} alt="mousse" />
                {isTablet ? <Line style={{ width: "32px", marginTop: "18px" }} /> : null}
                <SC.TextContainer>
                    <SC.SubTitle>Summer Fruit Chocolate Mousse</SC.SubTitle>
                    <SC.Text>Creamy mousse combined with
                        summer fruits and dark chocolate shavings.</SC.Text>
                </SC.TextContainer>
            </SC.ItemContainer></SC.ItemsContainerList> : <>
            <SC.ItemContainer>
                <SC.ImageMenu src={!isTablet ? salmonImage : salmonImageTablet} alt="salmon" />
                {isTablet ? <Line style={{ width: "32px", marginTop: "18px" }} /> : null}
                <SC.TextContainer>
                    <SC.SubTitle>Seared Salmon Fillet</SC.SubTitle>
                    <SC.Text>Our locally sourced salmon served
                        with a refreshing buckwheat summer salad.</SC.Text>
                </SC.TextContainer>
            </SC.ItemContainer>
            <SC.ItemContainer>
                <SC.ImageMenu src={!isTablet ? beefImage : beefImageTablet} alt="beef" />
                {isTablet ? <Line style={{ width: "32px", marginTop: "18px" }} /> : null}
                <SC.TextContainer>
                    <SC.SubTitle>Rosemary Filet Mignon</SC.SubTitle>
                    <SC.Text>Our prime beef served to your taste
                        with a delicious choice of seasonal
                        sides.</SC.Text>
                </SC.TextContainer>
            </SC.ItemContainer>
            <SC.ItemContainer>
                <SC.ImageMenu src={!isTablet ? mousseImage : mousseImageTablet} alt="mousse" />
                {isTablet ? <Line style={{ width: "32px", marginTop: "18px" }} /> : null}
                <SC.TextContainer>
                    <SC.SubTitle>Summer Fruit Chocolate Mousse</SC.SubTitle>
                    <SC.Text>Creamy mousse combined with
                        summer fruits and dark chocolate shavings.</SC.Text>
                </SC.TextContainer>
            </SC.ItemContainer>
        </>}

        
    </SC.MenuContainer>);
}

export default DeviMenu;