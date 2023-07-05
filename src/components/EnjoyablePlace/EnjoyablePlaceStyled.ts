import styled from "styled-components";

export const CommonContainer = styled.div`
  padding-bottom: 101px;
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  text-align: center;

  background-color: ${(props) => props.theme.color.backgroundSecondary};
`;

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

export const Title = styled.h1`
  margin-bottom: 13px;

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.25;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.normal};
  line-height: 1.63;
`;

export const Image = styled.img`
  transform: translateY(-72px);

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;

export const LocalImage = styled.img`
  margin-bottom: ${(props) => props.theme.space[11]};

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;
