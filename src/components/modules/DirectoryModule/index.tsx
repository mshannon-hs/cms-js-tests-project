import { Island, getSecret, UnstableModule } from '@hubspot/cms-components';
import moduleStyles from '../module.module.css';
import Button from '../../islands/Button?island';
import {
  FieldGroup,
  ModuleFields,
  BooleanField,
  TextField,
  ColorField,
  RichTextField,
} from '@hubspot/cms-components/fields';
import reactIcon from './react-icon.svg';

export function Component(props: any) {
  const { fieldValues, hublParameters, hublData, experimentalHublData } = props;
  return (
    <div className={moduleStyles.module}>
      17
      <UnstableModule name="myMod" path="@hubspot/button" />
      <div>{getSecret('test_secret')}</div>
      <pre>{JSON.stringify(props)}</pre>
      <div data-test-id="test-param" data-value={hublParameters?.testParam} />
      <div data-test-id="nested-rich-text">
        {fieldValues.fieldGroup.nestedRichText}
      </div>
      <div data-test-id="top-level-rich-text">
        {fieldValues.topLevelRichText}
      </div>
      <div data-test-id="hubl-data">{hublData}</div>
      <div data-test-id="experimental-hubl-data">{experimentalHublData}</div>
      <Island
        module={Button}
        hydrateOn="load"
        {...fieldValues}
        testIdSuffix={'-in-module'}
      />
    </div>
  );
}

export const meta = {
  label: `Directory Module`,
  icon: reactIcon,
};

export const fields = (
  <ModuleFields>
    <FieldGroup name="fieldGroup" label="Field Group">
      <TextField label="Text" name="text" default="text" required={true} />
      <BooleanField label="Boolean" name="boolean" default={false} />
      <RichTextField
        label="RichText"
        name="nestedRichText"
        default={`{% set value = "Nested" %}{{value}}`}
      />
    </FieldGroup>
    <ColorField label="Color" name="color" default={{ color: '#F7761F' }} />
    <RichTextField
      label="RichText"
      name="topLevelRichText"
      default={`{% set value = "Top level" %}{{value}}`}
    />
  </ModuleFields>
);

export const experimentalHublData = `{% set experimentalHublData = "value from hubl" %}`;

export const hublDataTemplate = `{% set hublData = "value from hublDataTemplate" %}`;
