import React, { useState } from "react";

const Input = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(`New Task Added\n ${title}: ${description}`);
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={setTitleHandler}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={setDescriptionHandler}
        />
        <button type="submit" onClick={formSubmitHandler}>
          {" "}
          Add a task
        </button>
      </form>
    </div>
  );
};

export default Input;
