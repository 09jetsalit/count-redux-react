import React, { useState } from "react";
import { increment, decrement, setCount } from "./action/action";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [newValue, setNewValue] = useState(0);

  return (
    <>
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
    <input onChange={(e) => setNewValue(e.target.value)}></input>
    <button onClick={() => dispatch(setCount(newValue))}>setCount</button>
    </>
  );
};

export default App;
