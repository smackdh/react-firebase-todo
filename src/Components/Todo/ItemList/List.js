import Item from "../Item/Item";

const List = (props, removeItem) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          description={item.description}
          done={item.completed}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default List;
