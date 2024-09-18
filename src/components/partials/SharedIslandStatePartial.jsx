import { Island, SharedIslandState } from '@hubspot/cms-components';
import Button from '../islands/SharedStateButton?island';

export default function SharedIslandStatePatial({
  secondIslandMarginTop = '110vh',
}) {
  return (
    <SharedIslandState value={1}>
      <Island
        id={'button-island-1'}
        testIdSuffix="-1"
        hydrateOn="load"
        module={Button}
      />
      <Island
        id={'button-island-2'}
        testIdSuffix="-2"
        hydrateOn="visible"
        module={Button}
        wrapperStyle={{ marginTop: secondIslandMarginTop }}
      />
    </SharedIslandState>
  );
}
