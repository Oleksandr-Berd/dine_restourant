import { useState } from "react"

import * as SC from "./EventsStyled"

import familyImage from "../../assets/images/homepage/family-gathering-mobile.jpg"
import specialImage from "../../assets/images/homepage/special-events-mobile.jpg"
import socialImage from "../../assets/images/homepage/social-events-mobile.jpg"

import familyImageTablet from "../../assets/images/homepage/family-gathering-tablet.jpg"
import specialImageTablet from "../../assets/images/homepage/special-events-tablet.jpg"
import socialImageTablet from "../../assets/images/homepage/social-events-tablet.jpg"

import familyImageDesktop from "../../assets/images/homepage/family-gathering-desktop.jpg"
import specialImageDesktop from "../../assets/images/homepage/special-events-desktop.jpg"
import socialImageDesktop from "../../assets/images/homepage/social-events-desktop.jpg"


import { EventsLine } from "components/Figures/FiguresStyled"
import { useMediaQuery } from "usehooks-ts"
import SquareGathering from "components/Figures/SquareGathering"
import EventsLinesBlock from "components/Figures/EvenetsLinesBlock"


const Events = (): JSX.Element => {
    const [active, setActive] = useState<string>("family gathering")

    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)')
    const isDesktop = useMediaQuery('(min-width:1440px)')

    const handleActive = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        const target = evt.target as HTMLButtonElement;


        setActive(target.textContent || "");

    }

    const showText = (active: string) => {
        switch (active) {
            case "family gathering":
                return (
                    <SC.TextContainer>
                        <SC.Title>Family Gathering</SC.Title>
                        <SC.Text>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</SC.Text>
                    </SC.TextContainer>
                )
            case "special events":
                return (<SC.TextContainer>
                    <SC.Title>Special Events</SC.Title>
                    <SC.Text>Join us for our special events! Experience unforgettable moments and indulge in extraordinary culinary delights tailored just for you.</SC.Text>
                </SC.TextContainer>)
            case "social events":
                return (
                    <SC.TextContainer>
                        <SC.Title>Social Events</SC.Title>
                        <SC.Text>Get ready for an exciting social event! Connect with like-minded individuals, enjoy delicious food, and create memories that will last a lifetime.</SC.Text>
                    </SC.TextContainer>
                )
        }
    }


    return (<>
        {isDesktop ?

            <SC.CommonContainer>

                <SquareGathering />
                <EventsLinesBlock />
                <SC.ImageEvents src={active === "family gathering" ? familyImageDesktop : active === "special events" ? specialImageDesktop : socialImageDesktop} alt="family" />
                <SC.DesktopContainer>
                    {showText(active)}
                    <SC.LinkButton to="/booking">book a table</SC.LinkButton>
                    <SC.ButtonsContainer>
                        <SC.ItemContainer>
                            {active === "family gathering" ? <EventsLine /> : <EventsLine $empty="true"/>}
                            <SC.ButtonsItem onClick={handleActive} $status={active === "family gathering" ? "true" : "false"}>family gathering</SC.ButtonsItem>
                            
                        </SC.ItemContainer>
                        <SC.ItemContainer>
                            {active === "special events" ? <EventsLine /> : <EventsLine $empty="true" />}
                            <SC.ButtonsItem onClick={handleActive} $status={active === "special events" ? "true" : "false"}>special events</SC.ButtonsItem>
                        </SC.ItemContainer>
                        <SC.ItemContainer>
                            {active === "social events" ? <EventsLine /> : <EventsLine $empty="true" />}
                            <SC.ButtonsItem onClick={handleActive} $status={active === "social events" ? "true" : "false"}>social events</SC.ButtonsItem>
                        </SC.ItemContainer>
                    </SC.ButtonsContainer>
                </SC.DesktopContainer>
            </SC.CommonContainer>
            :
            <SC.CommonContainer>
                {isTablet ? <SquareGathering /> : null}
                {isTablet ? <EventsLinesBlock /> : null}
                {isTablet ?
                    <SC.ImageEvents src={active === "family gathering" ? familyImageTablet : active === "special events" ? specialImageTablet : socialImageTablet} alt="family" />
                    :
                    <SC.ImageEvents src={active === "family gathering" ? familyImage : active === "special events" ? specialImage : socialImage} alt="family" />
                }
                <SC.ButtonsContainer>
                    <SC.ItemContainer>
                        <SC.ButtonsItem onClick={handleActive}>family gathering</SC.ButtonsItem>
                        {active === "family gathering" ? <EventsLine /> : null}
                    </SC.ItemContainer>
                    <SC.ItemContainer>
                        <SC.ButtonsItem onClick={handleActive}>special events</SC.ButtonsItem>
                        {active === "special events" ? <EventsLine /> : null}
                    </SC.ItemContainer>
                    <SC.ItemContainer>
                        <SC.ButtonsItem onClick={handleActive}>social events</SC.ButtonsItem>
                        {active === "social events" ? <EventsLine /> : null}
                    </SC.ItemContainer>
                </SC.ButtonsContainer>
                <>
                    {showText(active)}
                </>

                <SC.LinkButton to="/booking">book a table</SC.LinkButton>
            </SC.CommonContainer>
        }


    </>);
}

export default Events;