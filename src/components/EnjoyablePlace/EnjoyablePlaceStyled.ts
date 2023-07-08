import styled from "styled-components";

export const CommonContainer = styled.div`
  padding-bottom: 101px;
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  text-align: center;

  background-color: ${(props) => props.theme.color.backgroundSecondary};

  @media (min-width: 768px) {
    position: relative;
    z-index: 10;

    max-width: 768px;

    margin-left: auto;
    margin-right: auto;

    padding-top: 320px;
    padding-left: 97px;
    padding-right: 98px;
    padding-bottom: 0;
  }
`;

export const CommonContainerLocalFood = styled.div`
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-bottom: 101px;

  text-align: center;

  background-color: ${(props) => props.theme.color.backgroundSecondary};

  @media (min-width: 768px) {
    position: relative;
    z-index: 10;
    overflow: hidden;

    max-width: 768px;

    margin-left: auto;
    margin-right: auto;

    padding-top: 118px;
    padding-bottom: 118px;

    padding-left: 97px;
    padding-right: 98px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 13px;

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.25;

  @media (min-width: 768px) {
    display: inline-block;
    width: 350px;

    margin-bottom: 27px;

    font-size: ${(props) => props.theme.size.SL};
    letter-spacing: -0.5px;
    line-height: 1;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.normal};
  line-height: 1.63;

  @media (min-width: 768px) {
    width: 400px;

    margin-left: auto;
    margin-right: auto;

    font-size: ${(props) => props.theme.size.XN};
    line-height: 1.5;
  }
`;

export const Image = styled.img`
  transform: translateY(-72px);

  margin-left: auto;
  margin-right: auto;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    transform: translateX(18%) translateY(-40%);
  }
`;

export const LocalImage = styled.img`
  margin-bottom: ${(props) => props.theme.space[11]};
  margin-left: auto;
  margin-right: auto;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;
