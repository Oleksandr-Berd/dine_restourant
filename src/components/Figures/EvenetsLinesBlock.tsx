import * as SC from "./FiguresStyled"
import { EventsLinesBlockContainerStyled, EventsLinesBlockStyled } from './FiguresStyled';

const EventsLinesBlock = (): JSX.Element => {
    return (<SC.EventsLinesBlockContainerStyled>
        <SC.EventsLinesBlockStyled></SC.EventsLinesBlockStyled>
        <SC.EventsLinesBlockStyled></SC.EventsLinesBlockStyled>
        <SC.EventsLinesBlockStyled></SC.EventsLinesBlockStyled>
        <SC.EventsLinesBlockStyled></SC.EventsLinesBlockStyled>
        <SC.EventsLinesBlockStyled></SC.EventsLinesBlockStyled>
        <SC.EventsLinesBlockStyled></SC.EventsLinesBlockStyled>
    </SC.EventsLinesBlockContainerStyled>);
}

export default EventsLinesBlock;