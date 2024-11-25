import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FooterContact } from './FooterContact';

export default {
    title: 'shared/FooterContact',
    component: FooterContact,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FooterContact>;

const Template: ComponentStory<typeof FooterContact> = (args) => <FooterContact {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
