import styled from "styled-components";

interface IProps {
  $image?: string;
}

export const CommonContainer = styled.div<IProps>`
  padding-top: 56px;
  padding-bottom: 228px;
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  background-image: url(${(props) => props.$image});
  background-size: cover;

  color: ${(props) => props.theme.color.textSecondary};
`;

export const Title = styled.h2`
  margin-top: 44px;
  margin-bottom: 13px;

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.light};
  line-height: 1.25;
  letter-spacing: -0.4px;
`;

export const Text = styled.p`
  margin-bottom: 19px;

  font-size: ${(props) => props.theme.size.N};
  line-height: 1.63;
  font-weight: ${(props) => props.theme.weight.light};
`;

export const ButtonLink = styled.a`
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

  border: 1px solid ${(props) => props.theme.color.backgroundSecondary};
`;
