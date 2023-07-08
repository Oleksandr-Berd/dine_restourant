import styled from "styled-components";

export const MenuContainer = styled.div`
  padding-top: ${(props) => props.theme.space[13]};
  padding-bottom: 102px;
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  background-color: ${(props) => props.theme.color.backgroundDark};
  color: ${(props) => props.theme.color.textSecondary};

  @media (min-width: 768px) {
    position: relative;
    z-index: 10;

    max-width: 768px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 85px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 13px;

  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.M};
  line-height: 1.25;
`;

export const Text = styled.p`
  font-weight: ${(props) => props.theme.weight.light};
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.63;
`;

export const ItemContainer = styled.div`
  &:not(:last-child) {
    padding-bottom: ${(props) => props.theme.space[7]};

    margin-bottom: ${(props) => props.theme.space[6]};

    border-bottom: 1px solid ${(props) => props.theme.color.border};
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: ${(props) => props.theme.space[2]};

  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.XN};
  line-height: 1.2;
`;

export const ImageMenu = styled.img`
  width: 327px;
  height: 245px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => props.theme.space[9]};
`;
