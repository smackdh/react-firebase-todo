import React, { Fragment, useState } from "react";
import List from "./Components/Todo/ItemList/List";
import Input from "./Components/Todo/UserInput/Input";

const DUMMY_LIST = [
  { id: 1, title: "Task 1", text: "Some gibberish" },
  { id: 2, title: "Task 2", text: "Some gibberish" },
  { id: 3, title: "Task 3", text: "Some gibberish" },
];

function App() {
  const [items, setItems] = useState(DUMMY_LIST);

  return (
    <Fragment>
      <Input />
      <List items={items} />
    </Fragment>
  );
}

export default App;
