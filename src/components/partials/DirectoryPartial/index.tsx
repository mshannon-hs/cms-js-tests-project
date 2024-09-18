import { Island } from '@hubspot/cms-components';
import partialStyles from '../partial.module.css';
import Button from '../../islands/Button?island';

export default function DirectoryPartial(props: any) {
  return (
    <div className={partialStyles.partial}>
      <pre>{JSON.stringify(props)}</pre>
      <Island hydrateOn="load" module={Button} />
    </div>
  );
}
