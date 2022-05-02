import { useState, useEffect } from "react";

const List = ({ getItems }) => {

  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setItems(getItems)
    console.log('updating items')
  }, [getItems]);

  useEffect(() => {
    console.log('List Rendered');
  }, [])

  console.log('List return');

  return (
    <div>
      <div>{count}</div>
      <div><button onClick={e => setCount(c => c + 1)}>+</button></div>
      <div>{JSON.stringify(items)}</div>
    </div>
  );

  // return items.length ? <div>null</div> : items.map(item => <div key={item}>{item}</div>)
}

export default List;