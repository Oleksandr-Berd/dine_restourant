import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  status?: boolean;
  image?: string;
}

export const CommonContainer = styled.div<IProps>`
  padding-top: 80px;
  padding-bottom: 124px;
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  background-color: ${(props) => props.theme.color.backgroundSecondary};

  @media (min-width: 768px) {
    position: relative;
    z-index: 10;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 27px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    margin-bottom: 47px;
  }
`;

export const ItemContainer = styled.div`
  text-align: center;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[4]};

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;

export const ButtonsItem = styled.button<IProps>`
  text-transform: uppercase;

  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: 17px;
  font-weight: ${(props) => props.theme.weight.normal};
  line-height: 1.65;
  letter-spacing: 2.5px;

  background-color: transparent;

  border: none;
`;

export const ImageEvents = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 49px;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
`;

export const TextContainer = styled.div`
  margin-bottom: 27px;

  @media (min-width: 768px){
    width: 450px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 13px;

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.25;
  letter-spacing: -0.4px;

  @media (min-width: 768px) {
    margin-bottom: 19px;

    font-size: ${(props) => props.theme.size.SL};
    line-height: 1;
    letter-spacing: -0.6px;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.normal};
  line-height: 1.63;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size.XN};
    line-height: 1.5;
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
  background-color: ${(props) => props.theme.color.background};
  line-height: 0.94;
  letter-spacing: 2.5px;
`;
