import styled from "styled-components"

export const CommonContainer = styled.footer`
  padding-top: 80px;
  padding-bottom: 78px;
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};

  text-align: center;

  background-color: ${(props) => props.theme.color.backgroundDark};
  color: ${(props) => props.theme.color.textSecondary};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    padding-top: 64px;
    padding-bottom: 62px;
    padding-left: 39px;
  }

  @media (min-width: 1440px){
    padding-top: 78px;
    padding-left: 165px;
    padding-bottom: 76px;
  }
`;

export const AddressContainer = styled.div`
  width: ${(props) => props.theme.percentage[7]};

  margin-left: auto;
  margin-right: auto;
  margin-top: 42px;
  margin-bottom: ${(props) => props.theme.space[8]};

  text-align: center;
  font-size: 14px;
  line-height: 2;
  font-weight: ${(props) => props.theme.weight.normal};
  letter-spacing: 2px;

  @media (min-width: 768px) {
    margin: 0;
    margin-bottom: ${(props) => props.theme.space[8]};

    text-align: left;
  }

  @media (min-width: 1440px){
    width: 200px;

    margin-left: 193px;
    margin-right: 124px;
  }
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

  @media (min-width: 768px){
    text-align: left;
  }
`;

export const ScheduleTitle = styled.p`
text-transform: uppercase;
`

//tablet

export const CommonAddressContainer = styled.div`
margin-left: 130px;

text-align: left;

@media (min-width: 1440px){
    margin: 0;
}
`