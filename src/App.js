import Header from "./Header";
import SearchItems from "./SearchItems";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

function App() {
  // setitems array to save from local storage
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")),
    []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    //check the index of the last element which is -1
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    //new item
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    // reassign state is not a good idea ccreate a new array is better.
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
      <Header title="groceries" />

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
