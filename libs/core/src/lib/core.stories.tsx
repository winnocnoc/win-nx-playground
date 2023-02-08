import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Core } from './core';

const Story: ComponentMeta<typeof Core> = {
  component: Core,
  title: 'Core',
};
export default Story;

const Template: ComponentStory<typeof Core> = (args) => <Core {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
