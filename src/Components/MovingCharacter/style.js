import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin: 7% 0 3% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const moving = keyframes`
  from{
    left: 0px;
  }
  to{
    left: 145px; 
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
  background-color: #fff;
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
