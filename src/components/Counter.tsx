import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(1);
  return <div>Counter</div>;
};

export default Counter;
