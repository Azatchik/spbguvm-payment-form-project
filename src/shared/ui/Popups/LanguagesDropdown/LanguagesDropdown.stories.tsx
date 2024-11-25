import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LanguagesDropdown } from './LanguagesDropdown';

export default {
    title: 'shared/Languages',
    component: LanguagesDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LanguagesDropdown>;

const Template: ComponentStory<typeof LanguagesDropdown> = (args) => <LanguagesDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
