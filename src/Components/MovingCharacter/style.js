import styled, { keyframes } from "styled-components";

export const moving = keyframes`
  from{
    left: 0px;
  }
  to{
    left: 150px; 
  }
`;

export const Eyes = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Eye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
`;
export const Ball = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: 71.5px;
  left: 0px;

  animation: ${moving} 3s linear infinite;
  animation-direction: alternate;
`;
