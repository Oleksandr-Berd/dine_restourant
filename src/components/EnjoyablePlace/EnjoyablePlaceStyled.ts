import styled from "styled-components";

export const CommonContainer = styled.div`
  padding-bottom: 101px;
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  text-align: center;

  background-color: ${(props) => props.theme.color.backgroundSecondary};
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

  width:327px; 
  height:400px;

  margin-left: auto;
  margin-right: auto;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;

export const LocalImage = styled.img`
  width: 327px;
  height: 400px;

  margin-bottom: ${(props) => props.theme.space[11]};
  margin-left: auto;
  margin-right: auto;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;
