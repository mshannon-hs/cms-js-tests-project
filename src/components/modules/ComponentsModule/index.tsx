import Components from './Components';

export function Component() {
  return <Components />;
}

export const meta = {
  label: `Icon Module`,
};

export const fields = [
  {
    type: 'group',
    id: '0648cd73-92bd-267c-3b17-ea931675ce9d',
    label: 'Field group',
    children: [
      {
        default: {
          name: 'Arrow Turn Down',
          unicode: 'f149',
          type: 'SOLID',
        },
        display_width: null,
        icon_set: 'fontawesome-6.4.2',
        id: 'd9004f20-2f0e-0d09-a49b-811bbb110a4d',
        label: 'Nested Icon',
        locked: false,
        name: 'nested_icon_field',
        required: false,
        type: 'icon',
      },
    ],
    name: 'field_group',
    default: {
      nested_icon_field: {
        name: 'Arrow Turn Down',
        unicode: 'f149',
        type: 'SOLID',
      },
    },
  },
  {
    type: 'icon',
    default: [
      {
        name: 'Alternate Sync',
        unicode: 'f2f1',
        type: 'SOLID',
      },
    ],
    icon_set: 'fontawesome-5.14.0',
    label: 'Repeater Icon',
    name: 'repeater_icon_field',
    occurrence: {
      min: 1,
      default: 1,
    },
  },
  {
    type: 'icon',
    id: '6d279fe3-f549-0440-9733-7d8b8eeb0ede',
    default: {
      name: 'Alternate Level Up',
      unicode: 'f3bf',
      type: 'SOLID',
    },
    icon_set: 'fontawesome-5.14.0',
    label: 'Icon',
    name: 'top_level_icon_field',
  },
  {
    type: 'group',
    id: '39fc1d9f-6333-1e9f-8f13-31d1288ac7cb',
    label: 'Repeater Field group',
    children: [
      {
        type: 'icon',
        id: 'aa419dbd-7729-b5a8-c648-064496c1c6b4',
        default: {
          name: 'Egg',
          unicode: 'f7fb',
          type: 'SOLID',
        },
        icon_set: 'fontawesome-5.14.0',
        label: 'Icon',
        name: 'nested_repeater_icon',
      },
    ],
    name: 'repeater_field_group',
    default: [
      {
        nested_repeater_icon: {
          name: 'Egg',
          unicode: 'f7fb',
          type: 'SOLID',
        },
      },
    ],
    occurrence: {
      min: 1,
      default: 1,
    },
  },
  {
    type: 'richtext',
    default: '{% set value = "richtext-test-value" %}{{ value }}',
    label: 'RichText',
    name: 'richtext_field',
  },
];
