import React, { Fragment, useState, useCallback, useEffect } from "react";
import List from "./Components/Todo/ItemList/List";
import Input from "./Components/Todo/UserInput/Input";

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

  async function removeItemHandler(itemId) {
    const updatedItemsList = itemsList.filter((item) => item.id !== itemId);
    setItemsList(updatedItemsList);
    const deleteResponse = await fetch(
      `https://react-http-c8445-default-rtdb.firebaseio.com/items/${itemId}.json`,
      {
        method: "DELETE",
      }
    );
    fetchItemsHandler();
  }

  async function addItemHandler(item) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();

    const loadedItems = [...itemsList];

    for (const key in data) {
      loadedItems.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
        completed: data[key].completed,
      });
    }
    setItemsList(loadedItems);
    fetchItemsHandler();
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
    // fetchItemsHandler();
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
      remove={removeItemHandler}
      items={[]}
      toggle={toggleCompletedHandler}
    />
  );

  if (itemsList.length > 0) {
    content = (
      <List
        items={itemsList}
        remove={(id) => removeItemHandler(id)}
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
