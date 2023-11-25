import Header from "./Header";
import SearchItems from "./SearchItems";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";

function App() {
  // setitems array to save from local storage
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("shoppinglist")));
  }, []);

  const setAndSaveItems = (newItems) => {
    // then now set it to setItems
    setItems(newItems);
    //save to local storage so during refresh it will not go back to default
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    //check the index of the last element which is -1
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    //new item
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    // reassign state is not a good idea ccreate a new array is better.
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //addItem
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Todo List App" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItems search={search} setSearch={setSearch} />

      <Content
        items={
          items &&
          items.filter((item) =>
            item.item.toLowerCase().includes(search.toLocaleLowerCase())
          )
        }
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
