import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './button';

export default {
  title: 'ui/Button',
  component: Button,
  args: {
    children: <>Button</>,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Elavated = Template.bind({});
Elavated.args = {
  variant: 'elavated',
  color: 'default',
  rounded: 'md',
  size: 'md',
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  color: 'default',
  rounded: 'md',
  size: 'md',
  disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  color: 'default',
  rounded: 'md',
  size: 'md',
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  color: 'default',
  rounded: 'md',
  size: 'md',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'filled',
  color: 'default',
  rounded: 'md',
  size: 'md',
  disabled: true,
};
