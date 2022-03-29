import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id}>
          <hr />
          <Todo
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      ))}
    </>
  );
};

export default TodoList;
