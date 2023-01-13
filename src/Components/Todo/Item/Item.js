import React, { useState } from "react";

const Item = (props) => {
  const [isEditing, setisEditing] = useState(false);

  const viewTemplate = (
    <li>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.toggleCompleted(props.id)}
      />

      <button type="button" onClick={() => setisEditing(true)}>
        Edit
      </button>
    </li>
  );

  const editTemplate = (
    <li>
      <h1>Editing</h1>
      <p>Editing</p>
      <button type="button" onClick={props.removeItem}>
        Delete
      </button>
      <button type="button" onClick={() => setisEditing(false)}>
        Cancel
      </button>
    </li>
  );

  return <div>{isEditing ? editTemplate : viewTemplate}</div>;
};

export default Item;
