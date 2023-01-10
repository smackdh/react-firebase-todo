import React, { Fragment, useState } from "react";
import List from "./Components/Todo/ItemList/List";
import Input from "./Components/Todo/UserInput/Input";

const DUMMY_LIST = [
  { id: 1, title: "Task 1", description: "Some gibberish" },
  { id: 2, title: "Task 2", description: "Some gibberish" },
  { id: 3, title: "Task 3", description: "Some gibberish" },
];

function App() {
  const [itemsList, setItemsList] = useState(DUMMY_LIST);

  const addItemHandler = (item) => {
    setItemsList((oldItemsList) => {
      const updatedItemsList = [...oldItemsList];
      updatedItemsList.unshift({
        id: Math.random().toString(),
        title: item.title,
        description: item.description,
      });
    });
  };

  return (
    <Fragment>
      <Input onAddItem={addItemHandler} />
      <List items={itemsList} />
    </Fragment>
  );
}

export default App;
