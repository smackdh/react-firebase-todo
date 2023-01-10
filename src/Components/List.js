const List = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>
          <h1>{item.title}</h1>
          <hp>{item.text}</hp>
        </li>
      ))}
    </ul>
  );
};

export default List;
