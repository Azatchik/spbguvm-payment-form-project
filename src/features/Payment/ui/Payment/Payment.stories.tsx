import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Payment } from './Payment';

export default {
    title: 'shared/Payment',
    component: Payment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Payment>;

const Template: ComponentStory<typeof Payment> = (args) => <Payment {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
