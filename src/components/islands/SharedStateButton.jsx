import { useSharedIslandState } from '@hubspot/cms-components';
import BaseButton from './BaseButton';

export default function Button({ testIdSuffix }) {
  const [clicks, setClicks] = useSharedIslandState();
  return (
    <BaseButton
      clicks={clicks}
      onClick={() => setClicks(prev => ++prev)}
      testIdSuffix={testIdSuffix}
    />
  );
}
