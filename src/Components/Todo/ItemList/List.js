import Item from "../Item/Item";

const List = (props, removeItem) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          description={item.description}
          completed={item.completed}
          key={item.id}
          toggleCompleted={props.toggle}
          removeItem={props.removeItem}
        />
      ))}
    </ul>
  );
};

export default List;
