import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
`;

export const Title = styled.div`
  color: #33475B;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  height: 5vh;
  line-height: 5vh;
  padding 0 65px 0 15px;
`;

export const Icon = styled.img`
  margin: 1vh auto;
  display: flex;
  height: 12px;

  ${({ shouldRotate, opened }) => shouldRotate && opened && `
    transform: rotate(-180deg);
    transition-timing-function: ease;
    transition-duration: 0.25s;
    transition-property: transform;
  `}

  ${({ shouldRotate, opened }) => shouldRotate && !opened && `
    transform: rotate(0deg);
    transition-timing-function: ease;
    transition-duration: 0.25s;
    transition-property: transform;
  `}

  ${({ downsize }) => downsize && `
    height: 10px;
  `}
`