import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

interface IProps {
  $filled?: string;
  style?: object;
  $isError?: string;
}

export const CommonContainer = styled.div`
  padding-bottom: ${(props) => props.theme.space[9]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  margin-left: auto;
  margin-right: auto;

  text-align: center;

  @media (min-width: 768px) {
    padding-right: 114px;
    padding-left: 114px;
  }

  @media (min-width: 1440px) {
    position: relative;

    margin: 0;
    padding: 0;
  }
`;

export const StyledForm = styled.form`
  transform: translateY(-173px);
  z-index: 10;

  padding-top: 34px;
  padding-right: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[8]};
  padding-bottom: ${(props) => props.theme.space[8]};

  margin-left: auto;
  margin-right: auto;

  text-align: left;

  background-color: ${(props) => props.theme.color.textSecondary};

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: ${(props) => props.theme.space[11]};
    padding-left: ${(props) => props.theme.space[11]};
    padding-right: ${(props) => props.theme.space[11]};
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 0;

    transform: translateX(735px) translateY(-400px); 

    width: 540px;

    margin: 0;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: ${(props) => props.theme.space[7]};
`;

export const ErrorStyled = styled.span<IProps>`
  display: inline-block;

  margin-top: ${(props) => props.theme.space[2]};

  color: ${(props) => props.theme.color.error};
`;

export const NameEmailInput = styled.input<IProps>`
  min-width: 100%;

  padding-bottom: 15px;
  padding-left: ${(props) => props.theme.space[4]};

  font-size: ${(props) => props.theme.size.XN};
  font-family: ${(props) => props.theme.fontFamily.text};
  line-height: 1.4;
  color: ${(props) =>
    props.$isError === "true"
      ? props.theme.color.error
      : props.theme.color.text};

  border: none;
  border-bottom: 1px solid
    ${(props) =>
      props.$filled === "true" && props.$isError === "false"
        ? props.theme.color.backgroundDark
        : props.$filled === "false" && props.$isError === "false"
        ? props.theme.color.border
        : props.theme.color.error};

  &::placeholder {
    color: ${(props) =>
      props.$isError === "true" ? props.theme.color.error : ""};
  }

  &&&:active {
    border: none;
  }
`;

export const TitleContainer = styled.div`
  text-align: left;
`;

export const Title = styled.h6`
  margin-bottom: ${(props) => props.theme.space[2]};

  font-size: ${(props) => props.theme.size.XN};
  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.normal};
  line-height: 1.4;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const DateContainer = styled.div`
  min-width: 83%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    min-width: auto;
  }
`;
export const DateInput = styled.input<IProps>`
  min-width: 25%;
  padding-left: 15px;
  padding-bottom: 15px;

  text-transform: uppercase;

  font-size: ${(props) => props.theme.size.XN};
  font-family: ${(props) => props.theme.fontFamily.text};
  line-height: 1.4;
  color: ${(props) =>
    props.$isError === "true"
      ? props.theme.color.error
      : props.theme.color.text};

  border: none;
  border-bottom: 1px solid
    ${(props) =>
      props.$filled === "true" && props.$isError === "false"
        ? props.theme.color.backgroundDark
        : props.$filled === "false" && props.$isError === "false"
        ? props.theme.color.border
        : props.theme.color.error};

  &::placeholder {
    color: ${(props) =>
      props.$isError === "true" ? props.theme.color.error : ""};
  }

  &:not(:last-child) {
    margin-right: 14px;
  }

  @media (min-width: 768px) {
    min-width: 80px;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;

export const ToggleButton = styled(Dropdown.Toggle)`
  padding-bottom: 14px;

  background: transparent;
  color: ${(props) => props.theme.color.text};

  font-size: ${(props) => props.theme.size.XN};
  line-height: 1.4;

  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${(props) => props.theme.color.border};

  &:after {
    margin-left: 6px;

    color: ${(props) => props.theme.color.accent};
  }

  &&&:hover,
  &&&:focus,
  &&&:active {
    background-color: transparent;
    color: ${(props) => props.theme.color.text};
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${(props) => props.theme.space[7]};

  padding-left: 17px;
  padding-right: 17px;
  padding-bottom: ${(props) => props.theme.space[4]};

  margin-bottom: ${(props) => props.theme.space[8]};

  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.XN};

  border-bottom: 1px solid ${(props) => props.theme.color.border};
`;

export const QuantityButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.color.accent};
  font-size: ${(props) => props.theme.size.XN};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.2;
  letter-spacing: -0.25px;
`;

export const SubmitButton = styled.button`
  min-width: 100%;

  padding-top: 19px;
  padding-bottom: 17px;

  text-transform: uppercase;

  background-color: ${(props) => props.theme.color.backgroundDark};
  color: ${(props) => props.theme.color.textSecondary};
  font-family: ${(props) => props.theme.fontFamily.text};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.65;
  letter-spacing: 2.5px;

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
