import { useState } from 'react';

export default function MyIsland() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My Island</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
