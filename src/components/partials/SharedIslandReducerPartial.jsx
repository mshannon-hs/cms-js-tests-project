import { Island, SharedIslandReducer } from '@hubspot/cms-components';
import Button from '../islands/SharedReducerButton?island';
import clickReducer from '../islands/clickReducer?client';

export default function SharedIslandReducerPartial({
  secondIslandMarginTop = '110vh',
}) {
  return (
    <SharedIslandReducer reducer={clickReducer} value={1}>
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
    </SharedIslandReducer>
  );
}
