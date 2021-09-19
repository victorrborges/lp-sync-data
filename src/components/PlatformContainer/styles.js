import styled from "styled-components";
import { ResponsiveContainer } from "../../assets/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 5vh 5vw 2vh;
  min-height: 150px;
  width: 355px;
  min-width: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-radius: 2px;
  border: 2px solid #DFE3EB;
  padding: 6vh 50px 2vh;

  @media screen and (min-width: 587px) {
    &:after {
      content: "";
      flex: auto;
    }
  }

  @media screen and (max-width: 586px) {
    justify-content: center;
  }
`;