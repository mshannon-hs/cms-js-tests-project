import { useState } from 'react';
import BaseButton from './BaseButton';

export default function Button({ testIdSuffix = '', startingClicks = 1 }) {
  const [clicks, setClicks] = useState(startingClicks);
  return (
    <>
      <div>startingClicks = {startingClicks}</div>
      <BaseButton
        clicks={clicks}
        onClick={() => setClicks((prev) => ++prev)}
        testIdSuffix={testIdSuffix}
      />
    </>
  );
}
