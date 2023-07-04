import * as SC from "./HeroStyled"

import heroMobile from "../../assets/images/homepage/hero-bg-mobile@2x.jpg"
import { NavLink } from "react-router-dom";

const Hero = (): JSX.Element => {
    return (<SC.HeroStyled image={heroMobile}>
        <div>
            <h1>dine</h1>
            <h2>Exquisite dining
                since 1989</h2>
            <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
            <NavLink to="/booking">book a table</NavLink>
        </div>
    </SC.HeroStyled> );
}
 
export default Hero;