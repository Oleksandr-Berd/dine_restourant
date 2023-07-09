import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  status?: string;
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

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-top: 160px;
    padding-bottom: 160px;
    padding-left: 165px;
    padding-right: 165px;
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

  @media (min-width: 1440px){
    flex-direction: column;
    margin: 0;
  }
`;

export const ItemContainer = styled.div`
  text-align: center;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[4]};

    @media (min-width: 768px) {
      margin-bottom: 0;
    }

    @media (min-width: 1440px) {
      margin-bottom: ${(props) => props.theme.space[3]};
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
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

  transition: color 0.2s ease-in-out;

  @media (min-width: 1440px) {
    color: ${(props) =>
      props.status !== "true" ? "#8E8E8E" : props.theme.color.backgroundDark};
  }
  &:hover,
  &:focus,
  &:active {
    color: ${(props) => props.theme.color.backgroundDark};
    transition: color 0.2s ease-in-out;
  }
`;

export const ImageEvents = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 49px;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);

  @media (min-width: 1440px){
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 27px;

  @media (min-width: 768px) {
    width: 450px;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    margin: 0;
    margin-bottom: 60px;
    margin-left: 125px;
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

  border: 1px solid transparent;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border 0.3s ease-in-out;

  @media (min-width: 1440px) {
    margin-bottom: 79px;
    margin-left: 125px;

    &:active,
    &:hover,
    &:focus {
      color: ${(props) => props.theme.color.backgroundDark};
      background-color: ${(props) => props.theme.color.textSecondary};
      border: 1px solid ${(props) => props.theme.color.backgroundDark};

      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
        border 0.3s ease-in-out;
    }
  }
`;

//desktop

export const DesktopContainer = styled.div`

text-align: left;
`
