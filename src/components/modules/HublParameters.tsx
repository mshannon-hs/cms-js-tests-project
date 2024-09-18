import { ModuleFields, ColorField } from '@hubspot/cms-components/fields';

export function Component(props: any) {
  const { hublParameters } = props;
  return (
    <div>
      <pre>{JSON.stringify(props)}</pre>
      <dl>
        <dt>the answer to life the universe and everything</dt>
        <dd data-test-id="hubl-parameters-answer">
          {hublParameters?.answer || 0}
        </dd>
      </dl>
    </div>
  );
}

export const meta = {
  label: `Hubl Parameters`,
};

export const fields = (
  <ModuleFields>
    <ColorField
      label="Island Color"
      name="island_color"
      default={{ color: '#FFA500' }}
    />
  </ModuleFields>
);
