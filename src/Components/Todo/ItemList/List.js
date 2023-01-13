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
          toggleItemCompleted={props.toggle}
          removeItem={props.remove}
          editItem={props.edit}
        />
      ))}
    </ul>
  );
};

export default List;
