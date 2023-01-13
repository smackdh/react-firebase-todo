import React, { useState } from "react";

const Item = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const [newTitle, setnewTitle] = useState("");
  const [description, setDescription] = useState("");

  function updateHandler(e) {
    console.log(e);
  }

  const viewTemplate = (
    <li>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.toggleCompleted(props.id)}
      />
      <button type="button" onClick={props.removeItem}>
        Delete
      </button>
      <button type="button" onClick={() => setisEditing(true)}>
        Edit
      </button>
    </li>
  );

  const editTemplate = (
    <li>
      <h1 htmlFor={props.id}>{props.title}</h1>
      <input id={props.id} type="text" />
      <p>Editing</p>
      <button type="button" onClick={updateHandler}>
        Save
      </button>
      <button type="button" onClick={() => setisEditing(false)}>
        Cancel
      </button>
    </li>
  );

  return <div>{isEditing ? editTemplate : viewTemplate}</div>;
};

export default Item;
