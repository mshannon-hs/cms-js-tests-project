import { Island } from '@hubspot/cms-components';
import moduleStyles from './module.module.css';
import Button from '../islands/Button?island';
import {
  FieldGroup,
  ModuleFields,
  BooleanField,
  TextField,
  ColorField,
} from '@hubspot/cms-components/fields';

export function Component(props: any) {
  const { fieldValues, hublParameters } = props;
  return (
    <div className={moduleStyles.module}>
      <pre>{JSON.stringify(props)}</pre>
      <div data-test-id="test-param" data-value={hublParameters?.testParam} />
      <div
        data-test-id="island_color"
        data-value={JSON.stringify(fieldValues?.island_color)}
      />
      <div
        data-test-id="island_color_to_override"
        data-value={JSON.stringify(fieldValues?.island_color_to_override)}
      />
      <Island
        module={Button}
        hydrateOn="load"
        {...fieldValues}
        startingClicks={
          hublParameters ? hublParameters.startingClicks : undefined
        }
        testIdSuffix={'-in-module'}
      />
    </div>
  );
}

export const meta = {
  label: `Island Module`,
};

export const fields = (
  <ModuleFields>
    <FieldGroup name="island_field_group" label="Island Field Group">
      <TextField
        label="Island Text"
        name="island_text"
        default="Island Text"
        required={true}
      />
      <BooleanField
        label="Island Boolean"
        name="island_boolean"
        default={false}
      />
    </FieldGroup>
    <ColorField
      label="Island Color"
      name="island_color"
      default={{ color: '#F7761F' }}
    />
    <ColorField
      label="Island Color (to override in template)"
      name="island_color_to_override"
      default={{ color: '#F7761F' }}
    />
  </ModuleFields>
);
