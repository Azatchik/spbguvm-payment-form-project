import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Cover } from './Cover';

export default {
    title: 'shared/Cover',
    component: Cover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Cover>;

const Template: ComponentStory<typeof Cover> = (args) => <Cover {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
