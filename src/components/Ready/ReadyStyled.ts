import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  image?: string;
}

export const CommonContainer = styled.div<IProps>`
  padding-top: 84px;
  padding-bottom: 80px;
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  background-image: url(${(props) => props.image});
  background-size: cover;

  @media (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 64px;
    padding-left: 66px;
  }

  @media (min-width:1440px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: 88px;
    padding-bottom: 88px;
    padding-right: 165px;
    padding-left: 165px;
  }
`;

export const Title = styled.h1`
  margin-bottom: ${(props) => props.theme.space[5]};

  color: ${(props) => props.theme.color.textSecondary};
  font-size: ${(props) => props.theme.size.M};
  line-height: 1.25;
  letter-spacing: -0.4px;

  @media (min-width: 768px) {
    margin-bottom: ${(props) => props.theme.space[6]};

    font-size: ${(props) => props.theme.size.SL};
    line-height: 1;
    letter-spacing: -0.5px;
  }
`;

export const LinkButton = styled(NavLink)`
  display: inline-block;

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
  letter-spacing: 2.5px;

  border: 1px solid ${(props) => props.theme.color.backgroundSecondary};

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  @media (min-width: 1440px) {
    &:hover,
    &:focus,
    &:active {
      background-color: ${(props) => props.theme.color.textSecondary};
      color: ${(props) => props.theme.color.backgroundDark};

      transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }
  }
`;
