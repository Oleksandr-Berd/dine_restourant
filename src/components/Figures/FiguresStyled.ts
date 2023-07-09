import styled from "styled-components";

interface IProps{
    empty?:string
}

export const FiguresContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: ${(props) => props.theme.space[9]};
`;

export const Circle = styled.div`
  width: 7px;
  height: 7px;

  margin-right: ${(props) => props.theme.space[2]};

  border-radius: ${(props) => props.theme.radius[5]};
  border: 1px solid ${(props) => props.theme.color.accent};

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;

export const Line = styled.div`
  width: 56px;
  height: 1px;

  background-color: ${(props) => props.theme.color.accent};

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;

export const EventsLine = styled.div<IProps>`
  width: 48px;
  height: 1px;

  margin-left: auto;
  margin-right: auto;

  background-color: ${(props) => props.empty === "true" ? "transparent" : props.theme.color.accent};
  
  @media (min-width: 1440px){
    width: 95px;

    margin-right: ${props => props.theme.space[8]};
  }
`;

export const SquareStyled = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  transform: translateX(-50%) translateY(20%);
  z-index: -1;

  min-width: 895px;
  min-height: 320px;

  background: linear-gradient(to bottom right, #979797, #ffffff);

  border-radius: 0 108px 0 0;

  @media (min-width: 1440px){
    transform: translateX(0%) translateY(85%);
  }
`;

export const SquareGatheringStyled = styled.div`
  position: absolute;
  overflow: hidden;

  top: 0;
  left: 0;
  transform: translateX(-60%) translateY(0);
  z-index: -1;

  min-width: 895px;
  min-height: 320px;

  background: linear-gradient(to bottom right, #979797, #ffffff);

  border-radius: 0 108px 0 0;

  @media (min-width: 1440px) {
    transform: translateX(-40%) translateY(0);
  }
`;

export const LocalSquareStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateX(50%) translateY(10%);
  z-index: -1;

  width: 895px;
  min-height: 320px;

  background: linear-gradient(to top left, #979797, #ffffff);

  border-radius: 108px 0 0 0;

  @media (min-width: 1440px) {
    transform: translateX(0%) translateY(0%);
  }
`;

//LocalLines

export const LocalLinesContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;

  transform: translateY(450%) translateX(-20%);

  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    z-index: 20;
    transform: translateY(450%) translateX(-55%);
  }
`;

export const LocalLine = styled.div`
width: 160px;
height: 6px;

background: ${props => props.theme.color.accent};

&:not(:last-child){
    margin-bottom: ${props => props.theme.space[2]};
}
`

export const EventsLinesBlockContainerStyled = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;

  transform: translateY(55%) translateX(20%);

  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    transform: translateY(160%) translateX(80%);
  }
`;

export const EventsLinesBlockStyled = styled.div`
  width: 160px;
  height: 6px;

  background: ${(props) => props.theme.color.accent};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[2]};
  }
`;

//booking

export const SquareBooking = styled.div`
  width: 993px;
  min-height: 320px;

  background: linear-gradient(to top left, #979797, #ffffff);

  border-radius: 0 0 108px 0;
`;

export const BookingLinesStyled = styled.div`
position: absolute;
bottom: 0;
left: 0;

transform: translateX(655px) translateY(-98px);

  width: 160px;
  height: 6px;

  background: ${(props) => props.theme.color.accent};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[2]};
  }
`;