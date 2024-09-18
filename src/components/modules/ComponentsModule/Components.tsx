import { Icon, RichText } from '@hubspot/cms-components';

export default function Components() {
  return (
    <div>
      <Icon
        data-test-id="top_level_icon_field"
        fieldPath="top_level_icon_field"
        height={100}
        width={100}
      />
      <Icon
        data-test-id="repeater_icon_field"
        fieldPath="repeater_icon_field[0]"
        height={100}
        width={100}
      />
      <Icon
        data-test-id="nested_repeater_icon_field"
        fieldPath="repeater_field_group[0].nested_repeater_icon"
        height={100}
        width={100}
      />
      <Icon
        data-test-id="nested_icon_field"
        fieldPath="field_group.nested_icon_field"
        height={100}
        width={100}
      />
      <RichText data-test-id="richtext_field" fieldPath="richtext_field" />
    </div>
  );
}
