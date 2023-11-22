import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <div className="main">
      {/*This code checks if the item's array is not null before calling the length property. If the items array is null, it will return 0 and the length property will not be called.*/}
      {items && items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem", color:"whitesmoke"}}> Your list is empty.</p>
      )}
    </div>
  );
};

export default Content;
