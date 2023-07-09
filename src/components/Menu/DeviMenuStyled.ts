import styled from "styled-components";

export const MenuContainer = styled.div`
  padding-top: ${(props) => props.theme.space[13]};
  padding-bottom: 102px;
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  background-color: ${(props) => props.theme.color.backgroundDark};
  color: ${(props) => props.theme.color.textSecondary};

  @media (min-width: 768px) {
    position: relative;
    z-index: 10;

    padding-top: 96px;
    padding-left: 97px;
    padding-right: 98px;
    padding-bottom: 96px;
  }

  @media (min-width: 1440px) {
    position: static;

    display: flex;
    flex-direction: row;

    padding-top: 200px;
    padding-bottom: 120px;
    padding-left: 165px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 85px;

  @media (min-width: 768px) {
    margin-bottom: 54px;
  }

  @media (min-width: 1440px) {
    width: 650px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin: 0;

    margin-right: 125px;

    text-align: left;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 13px;

  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.M};
  line-height: 1.25;

  @media (min-width: 768px) {
    margin-bottom: 27px;

    font-size: ${(props) => props.theme.size.SL};
    letter-spacing: -0.5px;
    line-height: 1;
  }
`;

export const TextContainer = styled.div`
  @media (min-width: 768px) {
    padding-top: ${(props) => props.theme.space[3]};

    margin-left: 30px;
  }
`;

export const Text = styled.p`
  font-weight: ${(props) => props.theme.weight.light};
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.63;

  @media (min-width: 768px) {
    text-align: left;

    font-size: ${(props) => props.theme.size.XN};
    font-weight: ${(props) => props.theme.weight.normal};
    line-height: 1.5;
  }
`;

export const ItemContainer = styled.div`
  &:not(:last-child) {
    padding-bottom: ${(props) => props.theme.space[7]};

    margin-bottom: ${(props) => props.theme.space[6]};

    border-bottom: 1px solid ${(props) => props.theme.color.border};

    @media (min-width: 768px) {
      padding-bottom: ${(props) => props.theme.space[6]};

      margin-bottom: ${(props) => props.theme.space[6]};
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: ${(props) => props.theme.space[2]};

  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.XN};
  line-height: 1.2;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const ImageMenu = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => props.theme.space[9]};

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

//desktop

export const ItemsContainerList = styled.div`
margin-top: ${props => props.theme.space[8]}`
