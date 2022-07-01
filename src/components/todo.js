import React from "react";

const Todo = ({ todo }) => {
  const { id, title, completed } = todo;
  
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return (
    <>
      <div data-testid={`todo-${id}`}>{ text }</div>
      {/* <button name="sheba" onClick={alert("hello sheba")}>
        hello sheba
      </button> */}
    </>
  );
};

export default Todo;
