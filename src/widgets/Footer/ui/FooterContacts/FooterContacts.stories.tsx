import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FooterContacts } from './FooterContacts';

export default {
    title: 'shared/FooterContacts',
    component: FooterContacts,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FooterContacts>;

const Template: ComponentStory<typeof FooterContacts> = (args) => <FooterContacts {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
