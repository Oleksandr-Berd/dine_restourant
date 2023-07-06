import styled from "styled-components"



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