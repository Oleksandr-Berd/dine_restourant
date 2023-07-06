import * as SC from "./ReadyStyled"

import backImage from "../../assets/images/homepage/ready-bg-mobile.jpg"

const Ready = (): JSX.Element => {
    return (<SC.CommonContainer image={backImage}>
        <SC.Title>Ready to make a reservation?</SC.Title>
        <SC.LinkButton to="/booking">book a table</SC.LinkButton>
    </SC.CommonContainer> );
}
 
export default Ready;