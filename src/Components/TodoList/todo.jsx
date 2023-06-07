import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  TextInput,
  SubmitInput,
  UnorderdList,
  ListItem,
  TodoText,
  TodoDelete,
} from "./style";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [todoDone, setTodoDone] = useState(false);

  const handleDelete = (deleteId) => {
    window.confirm("정말 삭제할까요?")
      ? setTodos(
          todos.filter((item) => {
            return item.todoId !== deleteId;
          })
        )
      : console.log(`${deleteId} 삭제 취소`);
  };
  // 내가 킁익한 todo만 todoDone의 상태를 바꾼다.
  const handleToggle = (toggleId) => {
    setTodos(
      todos.map((item) => {
        return item.todoId === toggleId
          ? { ...item, todoDone: !item.todoDone }
          : item;
      })
    );
  };
  useEffect(() => {
    const defaultTodo = JSON.parse(localStorage.getItem("todo"));

    if (!defaultTodo) return;

    setTodos(defaultTodo);
    if (defaultTodo.length !== 0) {
      setTodoId(defaultTodo[defaultTodo.length - 1].todoId + 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.todoText.value);
          setTodos([
            ...todos, // 배열의 요소나 객체의 멤버를 그대로 복사, 쉼표는 최신화
            {
              todoId: todoId,
              todoText: e.target.todoText.value,
              todoDone: false,
            },
          ]);
          setTodoId(todoId + 1);
        }}
      >
        <TextInput type="text" placeholder="할 일을 쓰세요." name="todoText" />
        <SubmitInput type="submit" value="추가" />
      </Form>
      <UnorderdList>
        {todos.map((item, index) => {
          return (
            <ListItem
              key={index}
              style={{ backgroundColor: item.todoDone ? "gray" : "gold" }}
            >
              <TodoText
                style={{
                  textDecoration: item.todoDone ? "line-through" : "none",
                }}
                onClick={() => handleToggle(item.todoId)}
              >
                {item.todoDone ? `${item.todoText} 해결!` : `${item.todoText}`}
              </TodoText>
              <TodoDelete onClick={() => handleDelete(item.todoId)}>
                X
              </TodoDelete>
            </ListItem>
          );
        })}
      </UnorderdList>
    </Container>
  );
}

// Create - add make
// Read - get Show
// update - change
// delete - delete
