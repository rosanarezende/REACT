import { useState } from "react";

export default function List() {
  const [items, setItems] = useState([
    { id: 0, value: "Item 1" },
    { id: 1, value: "Item 2" },
  ]);
  const [newItem, setNewItem] = useState("");

  function addItem() {
    setItems([...items, { id: items.length, value: newItem }]);
    setNewItem("");
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.value}</p>
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
