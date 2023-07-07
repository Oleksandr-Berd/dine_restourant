import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const CommonContainer = styled.div`
  padding-top: 34px;
  padding-bottom: 34px;
  padding-right: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[8]};

  margin-left: auto;
  margin-right: auto;

  text-align: center;
`;

export const StyledForm = styled.form`
  margin-left: auto;
  margin-right: auto;

  text-align: left;
`;

export const NameEmailInput = styled.input`
  min-width: 100%;

  padding-bottom: 15px;
  padding-left: ${(props) => props.theme.space[4]};
  margin-bottom: 34px;

  font-size: ${(props) => props.theme.size.XN};
  font-family: ${(props) => props.theme.fontFamily.text};
  line-height: 1.4;

  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.border};
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
`;

export const DateContainer = styled.div`
  min-width: 83%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 34px;
`;
export const DateInput = styled.input`
  min-width: 25%;
  padding-left: 15px;
  padding-bottom: 15px;

  text-transform: uppercase;

  font-size: ${(props) => props.theme.size.XN};
  font-family: ${(props) => props.theme.fontFamily.text};
  line-height: 1.4;

  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.border};

  &:not(:last-child) {
    margin-right: 14px;
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
`;
