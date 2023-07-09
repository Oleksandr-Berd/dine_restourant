import styled from "styled-components";

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

export const EventsLine = styled.div`
  width: 48px;
  height: 1px;

  margin-left: auto;
  margin-right: auto;

  background-color: ${(props) => props.theme.color.accent};
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
`;

export const EventsLinesBlockStyled = styled.div`
  width: 160px;
  height: 6px;

  background: ${(props) => props.theme.color.accent};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[2]};
  }
`;