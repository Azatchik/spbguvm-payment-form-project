import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CirclesLoader } from './CirclesLoader';

export default {
    title: 'shared/Loader',
    component: CirclesLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof CirclesLoader>;

const Template: ComponentStory<typeof CirclesLoader> = (args) => <CirclesLoader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
