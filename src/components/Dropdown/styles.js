import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 5vh;
  max-height: 5vh;
  margin: 1vh 0 5vh;
  background: #F5F8FA;
  border: 1px solid #CBD6E2;
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  ${({ opened }) => opened && `
    max-height: 155px;
    margin: 1vh 0 1vh;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    transition-property: max-height, margin;
  `}

  ${({ opened }) => !opened && `
    max-height: 5vh;
    margin: 1vh 0 5vh;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    transition-property: max-height, margin;
  `}
`;

export const ListContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 1vh;
`;