import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  min-width: 120px;
`;

export const Image = styled.img`
  width: auto;
  height: 12.5vh;
  cursor: pointer;

  ${({ done }) => done && `
    transform: rotate(-180deg);
    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-property: transform;
  `}

  ${({ done }) => !done && `
    transform: rotate(0deg);
    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-property: transform;
  `}
`;

export const Text = styled.div`
  width: 100%;
  text-align: center;
  color: #374A5E;
  font-size: 18px;
  line-height: 24.52px;
  margin: 1.5vh 0;
`