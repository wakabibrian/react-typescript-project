import Heading from "./components/Heading";
import Section from "./components/Section";
// import Counter from "./components/Counter";
import List from "./components/List";

import { useState } from "react";

interface User {
  id: number;
  username: string;
}

function App() {
  // const [count, setCount] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[] | null>(null);

  return (
    <>
      <Heading title="Hello" />
      <Section title="Different Title">This is my section</Section>
      {/* <Counter setCount={setCount}>The Count is {count}</Counter> */}
      <List
        items={["🍵 Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
