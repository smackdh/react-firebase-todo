const List = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.descriptiong}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
