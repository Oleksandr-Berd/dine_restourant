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
`;

export const Title = styled.h1`
margin-bottom: ${props=> props.theme.space[5]};

color: ${props => props.theme.color.textSecondary};
font-size: ${props => props.theme.size.M};
line-height: 1.25;
letter-spacing:-0.4px;

`

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
`;
