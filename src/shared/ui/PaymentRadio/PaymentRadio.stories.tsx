import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PaymentRadio } from './PaymentRadio';

export default {
    title: 'shared/PaymentRadio',
    component: PaymentRadio,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PaymentRadio>;

const Template: ComponentStory<typeof PaymentRadio> = (args) => <PaymentRadio {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
