import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";
function App() {
  const [inputList, setInputList] = useState("apple");
  const [items, setItems] = useState([]);
  // const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItem, setEditItem] = useState(null);
  const itemEvent = function (e) {
    setInputList(e.target.value);
  };
  const listItems = () => {
    setItems((item) => {
      return [...item, inputList];
    });
    setInputList("");
  };
  function submitHandler(e) {
    e.preventDefault();
  }
  const deleteItem = (id) => {
    console.log("deleted");
    setItems((item) => {
      return item.filter((arr, index) => {
        return index != id;
      });
    });
  };
  const editItems = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setInputList(newEditItem.name);
    console.log(newEditItem);
    setEditItem(id);
  };
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>TODO App</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className="input">
            <input
              type="text"
              placeholder="enter todo"
              onChange={itemEvent}
              value={inputList}
            />
            <button type="submit" onClick={listItems}>
              {" "}
              Enter
            </button>
          </div>
          <div className="description">
            <ol>
              {items.map((item, index) => {
                return (
                  <TodoList
                    key={index}
                    id={index}
                    text={item}
                    onSelect={deleteItem}
                  />
                );
              })}
            </ol>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
