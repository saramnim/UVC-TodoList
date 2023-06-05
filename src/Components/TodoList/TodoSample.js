import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(1);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([
            ...todos,
            {
              todoId: todoId,
              todoText: e.target.todoText.value,
            },
          ]);
          setTodoId(todoId + 1);
        }}
      >
        <input type="text" />
        <input type="submit" placeholder="할일 쓰세요" name="todoText" />
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo.todoText}
              <span
                onClick={() => {
                  setTodos(
                    todos.filter((item) => {
                      return item.todoId !== todo.todoId;
                    })
                  );
                }}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
