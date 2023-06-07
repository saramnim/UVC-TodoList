import styled from "styled-components";

export const Container = styled.div`
  margin-left: 25%;
  width: 50%;
  padding: 1.5% 0 0 0;
  height: 290px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 20px;
  border: 5px solid black;

  overflow-y: auto;
  font-family: "NeoDunggeunmoPro-Regular";

  @media (max-width: 375) {
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  width: 50%;
  margin-left: 10%;
  min-width: 92.5%;
  display: flex;
`;

export const TextInput = styled.input`
  width: 70%;
  padding: 0 5% 0 5%;

  height: 40px;
  border: none;
  border-radius: 10px 0 0 10px;

  background-color: #c9e5fc;
  font-size: 20px;

  &:focus {
    outline: none;
  }
  font-family: "NeoDunggeunmoPro-Regular";
`;
export const SubmitInput = styled.input`
  width: 20%;
  border: none;
  border-radius: 0 10px 10px 0;

  color: beige;
  background-color: #5a75aa;
  font-size: 1.2rem;
  font-family: "NeoDunggeunmoPro-Regular";
  cursor: pointer;

  &:hover {
    background-color: #5a75ff;
    color: black;
  }
`;

export const UnorderdList = styled.ul`
  width: 33%;
  min-width: 375px;
  padding: 0;
  list-style-type: none;
  margin-left: 17%;
  margin-right: 17%;
  min-width: 92.5%;
`;
export const ListItem = styled.li`
  padding: 2% 2% 2% 5%;
  margin-bottom: 4%;
  border-radius: 10px;
  background-color: gold;
  position: relative;
  cursor: pointer;
`;

export const TodoText = styled.span`
  display: inline-block;
  width: 90%;
  font-size: 17.5px;
  line-height: 22px;
  &:hover {
    opacity: 0.5;
  }
`;
export const TodoDelete = styled.button`
  width: 10%;
  height: 60%;
  border: none;
  border-radius: 0.5rem;

  background-color: transparent;
  font-weight: 900;

  position: absolute;
  right: 0;

  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
