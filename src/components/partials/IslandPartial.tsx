import { Island } from '@hubspot/cms-components';
import partialStyles from './partial.module.css';
import Button from '../islands/Button?island';

export default function IslandPartial(props: { startingClicks?: number }) {
  return (
    <div className={partialStyles.partial}>
      <pre>{JSON.stringify(props)}</pre>
      <Island
        hydrateOn="load"
        module={Button}
        startingClicks={props.startingClicks}
      />
    </div>
  );
}
