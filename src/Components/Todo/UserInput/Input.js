import React, { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
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
        <input id="description" type="text" value="{description}" onChange="" />
      </form>
    </div>
  );
};

export default Input;
