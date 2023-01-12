import React, { useState } from "react";

const Input = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  //HANDLERS
  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`New Task Added\n ${title}: ${description}`);

    if (title.trim().length === 0 || description.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please input a task title and description",
      });
      return;
    }

    const data = {
      title: title,
      description: description,
    };

    props.onAddItem(data);
  };

  //OUTPUT

  return (
    <div>
      {error && (
        <div>
          <h3>{error.title}</h3>
          <p>{error.message}</p>
        </div>
      )}
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
