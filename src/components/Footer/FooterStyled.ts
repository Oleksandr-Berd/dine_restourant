import styled from "styled-components"
import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg";


export const CommonContainer = styled.footer`
  padding-top: 80px;
  padding-bottom: 78px;
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  background-color: ${props => props.theme.color.backgroundDark};
  color: ${props => props.theme.color.textSecondary};
`;

export const AddressContainer = styled.div`
  width: ${props => props.theme.percentage[7]};
  
  margin-left: auto;
  margin-right: auto;
  margin-top: 42px;
  margin-bottom: ${props => props.theme.space[8]};

  text-align: center;
  font-size: 14px;
  line-height: 2;
  font-weight: ${props => props.theme.weight.normal};
  letter-spacing: 2px;
`;

export const Address = styled.address`
font-style: normal;
`

export const Tel = styled.a`
text-decoration: none;
  color: ${(props) => props.theme.color.textSecondary};
`;

export const Schedule = styled.div`
  text-align: center;
  font-size: 14px;
  line-height: 2;
  font-weight: ${(props) => props.theme.weight.normal};
  letter-spacing: 2px;
`;

export const ScheduleTitle = styled.p`
text-transform: uppercase;
`