import styled from "styled-components";

export const CommonContainer = styled.div`
  padding-top: 34px;
  padding-bottom: 34px;
  padding-right: ${(props) => props.theme.space[8]};
  padding-left: ${(props) => props.theme.space[8]};

  text-align: center;
`;

export const NameEmailInput = styled.input`
  min-width: 263px;

  padding-bottom: 15px;
  padding-left: ${(props) => props.theme.space[4]};
  margin-bottom: 34px;

  font-size: ${(props) => props.theme.size.XN};
  font-family: ${props => props.theme.fontFamily.text};
  line-height: 1.4;

  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.border};
`;

export const BookingInput = styled.input`
  /* padding-bottom: 15px;
  padding-left: ${(props) => props.theme.space[4]};

  &:first-child,
  &:nth-child(2) {
    min-width: 263px;

    margin-bottom: 34px;
  } */
`;
