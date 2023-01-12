const Item = (props) => {
  return (
    <div>
      <li>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <input type="checkbox" checked={props.completed} />
      </li>
    </div>
  );
};

export default Item;
