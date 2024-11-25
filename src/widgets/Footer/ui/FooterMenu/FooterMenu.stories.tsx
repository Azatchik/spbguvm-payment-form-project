import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FooterMenu } from './FooterMenu';

export default {
    title: 'shared/FooterMenu',
    component: FooterMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FooterMenu>;

const Template: ComponentStory<typeof FooterMenu> = (args) => <FooterMenu {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
