import { useSharedIslandReducer } from '@hubspot/cms-components';
import BaseButton from './BaseButton';

export default function Button({ testIdSuffix }) {
  const [clicks, dispatch] = useSharedIslandReducer();

  return (
    <BaseButton
      clicks={clicks}
      onClick={() => dispatch({ type: 'click' })}
      testIdSuffix={testIdSuffix}
    />
  );
}
