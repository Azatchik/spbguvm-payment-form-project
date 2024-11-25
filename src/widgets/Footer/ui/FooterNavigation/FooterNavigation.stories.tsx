import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FooterNavigation } from './FooterNavigation';

export default {
    title: 'shared/FooterNavigation',
    component: FooterNavigation,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FooterNavigation>;

const Template: ComponentStory<typeof FooterNavigation> = (args) => <FooterNavigation {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
