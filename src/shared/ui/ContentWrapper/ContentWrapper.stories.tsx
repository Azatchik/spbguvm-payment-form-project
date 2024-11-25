import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ContentWrapper } from './ContentWrapper';

export default {
    title: 'shared/ContentWrapper',
    component: ContentWrapper,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ContentWrapper>;

const Template: ComponentStory<typeof ContentWrapper> = (args) => <ContentWrapper {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
