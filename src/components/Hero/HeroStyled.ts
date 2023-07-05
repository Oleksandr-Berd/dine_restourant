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
`;

export const HeroContainer = styled.div`
  text-align: center;

  color: ${(props) => props.theme.color.textSecondary};
`;

export const Title = styled.h1`
  margin-bottom: ${(props) => props.theme.space[9]};

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.bold};
`;

export const SubTitle = styled.h2`
  margin-bottom: 21px;

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.light};
  line-height: 1.5;
`;

export const Text = styled.p`
  margin-bottom: 53px;

  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.light};
  line-height: 1.3;
`;

export const LinkButton = styled(NavLink)`
padding-top: 25px;
padding-bottom: 23px;
padding-left: 54px;
padding-right: 55px;

text-decoration: none;
text-transform: uppercase;

font-size: 17px;
font-weight: ${props => props.theme.weight.normal};
color: ${props => props.theme.color.textSecondary};

border: 1px solid ${props => props.theme.color.backgroundSecondary};
`
