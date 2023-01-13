import React, { Fragment, useState } from "react";
import List from "./Components/Todo/ItemList/List";
import Input from "./Components/Todo/UserInput/Input";

const DUMMY_LIST = [
  { id: 1, title: "Task 1", description: "Some gibberish", completed: false },
  { id: 2, title: "Task 2", description: "Some gibberish", completed: false },
  { id: 3, title: "Task 3", description: "Some gibberish", completed: false },
];

function App() {
  const [itemsList, setItemsList] = useState(DUMMY_LIST);

  function removeItemHandler(item) {
    const updatedItemsList = [...itemsList];
    updatedItemsList.splice(item, 1);
    setItemsList(updatedItemsList);
  }

  const addItemHandler = (item) => {
    setItemsList((previousItems) => {
      const updatedItemsList = [...previousItems];
      updatedItemsList.unshift({
        id: Math.random().toString(),
        title: item.title,
        description: item.description,
      });
      return updatedItemsList;
    });
  };

  const toggleCompletedHandler = (id) => {
    const updatedItemList = itemsList.map((item) => {
      if (id === item.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    console.log(`This is the ID: ${id}`);
    setItemsList(updatedItemList);
  };

  const editItemHandler = (id, newTitle) => {
    const updatedItemList = itemsList.map((item) => {
      if (id === item.id) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setItemsList(updatedItemList);
  };

  let content = (
    <List
      removeItem={removeItemHandler}
      items={[]}
      toggle={toggleCompletedHandler}
    />
  );

  if (itemsList.length > 0) {
    content = (
      <List
        items={itemsList}
        remove={removeItemHandler}
        toggle={toggleCompletedHandler}
        edit={editItemHandler}
      />
    );
  }

  return (
    <Fragment>
      <Input onAddItem={addItemHandler} />
      <section>{content}</section>
    </Fragment>
  );
}

export default App;
