import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  $image?: string;
}

export const HeroStyled = styled.div<IProps>`
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-top: 232px;
  padding-bottom: 152px;

  background-image: url(${(props) => props.$image});
  background-size: cover;

  @media (min-width: 768px) {
    padding-top: 374px;
    padding-bottom: 216px;
    padding-left: ${(props) => props.theme.space[10]};
    padding-right: ${(props) => props.theme.space[10]};
  }

  @media (min-width: 1440px) {
    padding-top: 65px;
    padding-left: 165px;
    padding-bottom: 198px;
  }
`;

export const HeroContainer = styled.div`
  text-align: center;

  color: ${(props) => props.theme.color.textSecondary};

  @media (min-width: 1440px) {
    width: 480px;

    text-align: left;
  }
`;

export const SubTitle = styled.h2`
  margin-top: ${(props) => props.theme.space[9]};

  margin-bottom: 21px;

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.light};
  line-height: 1.5;

  @media (min-width: 768px) {
    width: 300px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 38px;
    margin-bottom: ${(props) => props.theme.space[5]};

    font-size: ${(props) => props.theme.size.SL};
    line-height: 1.33;
    letter-spacing: -0.6px;
  }

  @media (min-width: 1440px) {
    margin: 0;
    margin-top: 153px;
    margin-bottom: 10px;

    width: auto;

    font-size: 80px;
    line-height: 1;
    letter-spacing: -1px;
  }
`;

export const Text = styled.p`
  margin-bottom: 53px;

  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.light};
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size.XN};
    line-height: 1.5;
  }

@media (min-width: 1440px){
  width: 410px;
}
`;

export const LinkButton = styled(NavLink)`
  padding-top: 25px;
  padding-bottom: 23px;
  padding-left: 54px;
  padding-right: 55px;

  text-decoration: none;
  text-transform: uppercase;

  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: 17px;
  font-weight: ${(props) => props.theme.weight.normal};
  color: ${(props) => props.theme.color.textSecondary};
  line-height: 0.94;

  border: 1px solid ${(props) => props.theme.color.backgroundSecondary};
`;
