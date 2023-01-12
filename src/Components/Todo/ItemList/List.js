const List = (props, removeItem) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <input type="checkbox" />
          <button
            type="button"
            aria-pressed="true"
            onClick={() => removeItem(item.id)}
          >
            Remove item
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
