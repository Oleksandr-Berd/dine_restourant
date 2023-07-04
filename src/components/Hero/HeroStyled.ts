import styled from "styled-components"

interface IProps {
    image?:string
}

export const HeroStyled = styled.div<IProps>`
  height: 748px;

  background-image: url(${(props) => props.image});
  background-size: cover;
`;