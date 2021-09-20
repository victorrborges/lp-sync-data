import styled from "styled-components";
import bg from "./images/bg.svg";

export const PageContainer = styled.div`
  padding: 0;
  width: 100%;
  max-width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: url(${bg}) no-repeat center center;
  padding-bottom: 5vw;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ResponsiveContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  position: relative;

  @media (min-width: 480px) {
    max-width: 728px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
