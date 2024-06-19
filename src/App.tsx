import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title="Hello" />
      <Section title="Different Title">This is my section</Section>
      <Counter setCount={setCount}>The Count is {count}</Counter>
      <List
        items={["🍵 Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
