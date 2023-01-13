import React, { Fragment, useState, useCallback, useEffect } from "react";
import List from "./Components/Todo/ItemList/List";
import Input from "./Components/Todo/UserInput/Input";

const DUMMY_LIST = [
  { id: 1, title: "Task 1", description: "Some gibberish", completed: false },
  { id: 2, title: "Task 2", description: "Some gibberish", completed: false },
  { id: 3, title: "Task 3", description: "Some gibberish", completed: false },
];

const url = "https://react-http-c8445-default-rtdb.firebaseio.com/items.json";

function App() {
  const [itemsList, setItemsList] = useState([]);

  const fetchItemsHandler = useCallback(async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(console.log("Well fuck..."));
      }

      const data = await response.json();
      console.log(`This is the data:\n${data}`);

      const loadedItems = [];

      for (const key in data) {
        loadedItems.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          completed: data[key].description,
        });
      }
      setItemsList(loadedItems);
    } catch (error) {
      console.log("God damn it...");
    }
  }, []);

  function removeItemHandler(item) {
    const updatedItemsList = [...itemsList];
    updatedItemsList.splice(item, 1);
    setItemsList(updatedItemsList);
  }

  // add fetch on first load with useEffect.

  async function addItemHandler(item) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();

    // setItemsList((previousItems) => {
    //   const updatedItemsList = [...previousItems];
    //   updatedItemsList.unshift({
    //     id: Math.random().toString(),
    //     title: item.title,
    //     description: item.description,
    //   });
    //   return updatedItemsList;
    // });
  }

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

  const editItemHandler = (id, newTitle, newDescription) => {
    const updatedItemList = itemsList.map((item) => {
      if (id === item.id) {
        return { ...item, title: newTitle, description: newDescription };
      }
      return item;
    });
    setItemsList(updatedItemList);
  };

  useEffect(() => {
    fetchItemsHandler();
  }, [fetchItemsHandler]);

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
