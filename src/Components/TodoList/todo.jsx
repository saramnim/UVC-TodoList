import React, { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoIds] = useState(0);
  const [todoDone, setTodoDone] = useState(false);

  const handleDelete = (deleteId) => {
    setTodos(
      todos.filter((item) => {
        return item.todoId !== deleteId;
      })
    );
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

  return (
    <>
      <form
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
          setTodoIds(todoId + 1);
        }}
      >
        <input type="text" placeholder="할 일을 쓰세요." name="todoText" />
        <input type="submit" value="추가" />
      </form>
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              <span
                style={{
                  textDecoration: item.todoDone ? "line-through" : "none",
                }}
                onClick={() => handleToggle(item.todoId)}
              >
                {item.todoText}
              </span>
              <span onClick={() => handleDelete(item.todoId)}> X </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// Create - add make
// Read - get Show
//
//
