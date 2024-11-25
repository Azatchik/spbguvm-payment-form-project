import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FooterLeft } from './FooterLeft';

export default {
    title: 'shared/FooterLeft',
    component: FooterLeft,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FooterLeft>;

const Template: ComponentStory<typeof FooterLeft> = (args) => <FooterLeft {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
