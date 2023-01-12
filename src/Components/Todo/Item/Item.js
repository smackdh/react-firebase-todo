const Item = (props) => {
  return (
    <div>
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
      </li>
    </div>
  );
};

export default Item;
