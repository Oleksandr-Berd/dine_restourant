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

  @media (min-width: 768px) {
    padding-left: 39px;
    padding-right: 40px;

    padding-bottom: 268px;
  }
`;

export const Title = styled.h2`
  margin-top: 44px;
  margin-bottom: 13px;

  font-size: ${(props) => props.theme.size.M};
  font-weight: ${(props) => props.theme.weight.light};
  line-height: 1.25;
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.size.SL};
    font-weight: ${(props) => props.theme.weight.normal};
    line-height: 1.33;
    letter-spacing: -0.6px;
  }
`;

export const Text = styled.p`
  margin-bottom: 19px;

  font-size: ${(props) => props.theme.size.N};
  line-height: 1.63;
  font-weight: ${(props) => props.theme.weight.light};

  @media (min-width: 768px) {
    display: inline-block;
    width: 573px;

    font-weight: ${(props) => props.theme.weight.normal};
    font-size: ${(props) => props.theme.size.XN};
    line-height: 1.5;
  }
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

//tablet

export const LogoContainer = styled.div`
  text-align: left;
`;
