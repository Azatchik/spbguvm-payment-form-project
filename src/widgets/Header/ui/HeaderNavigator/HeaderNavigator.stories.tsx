import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { HeaderNavigator } from './HeaderNavigator';

export default {
    title: 'shared/HeaderNavigator',
    component: HeaderNavigator,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderNavigator>;

const Template: ComponentStory<typeof HeaderNavigator> = (args) => <HeaderNavigator {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
