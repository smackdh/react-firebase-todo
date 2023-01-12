const Item = (props) => {
  return (
    <div>
      <li>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={props.toggleCompleted}
        />
      </li>
    </div>
  );
};

export default Item;
