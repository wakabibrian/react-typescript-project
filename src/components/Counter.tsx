import { ReactNode, useState, useReducer } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const initState = { count: 0 };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

const reducer =

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
};

const Counter = ({ children }: ChildrenType) => {
  const [count, setCount] = useState<number>(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <>
      <h1>{children(count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
