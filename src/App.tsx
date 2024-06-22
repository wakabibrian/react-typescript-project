// import Heading from "./components/Heading";
// import Section from "./components/Section";
// import Counter from "./components/Counter";
// import List from "./components/List";

import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number;
  username: string;
}

function App() {
  // const [count, setCount] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("Mounting");
    console.log("Users: ", users);

    return () => {
      console.log("unmounting");
    };
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  ); //Doesn't call the function again (Memorizes a function)

  return (
    <>
      {/* <Heading title="Hello" /> */}
      {/* <Section title="Different Title">This is my section</Section> */}
      {/* <Counter setCount={setCount}>The Count is {count}</Counter> */}
      {/* <List
        items={["🍵 Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      /> */}
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
    </>
  );
}

export default App;
