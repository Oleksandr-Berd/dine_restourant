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

  @media (min-width: 1440px) {
    min-width: 1440px;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 0;

    padding: 0;
    padding-left: 165px;
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

  @media (min-width: 1440px) {
    margin: 0;

    padding: 0;
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

  @media (min-width: 1440px) {
    width: auto;
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

  @media (min-width: 1440px) {
    width: auto;
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

  @media (min-width: 1440px) {
    position: static;
    transform: translateX(0) translateY(-10%);

    margin: 0;
  }
`;

export const LocalImage = styled.img`
  margin-bottom: ${(props) => props.theme.space[11]};
  margin-left: auto;
  margin-right: auto;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;

//desktop

export const DesktopEnjoyablePlaceContainer = styled.div`
width: 445px;

display: flex;
flex-direction: column;
align-items: flex-start;

margin-left: 125px;

text-align: left;


`