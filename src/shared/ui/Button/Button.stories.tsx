import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowPosition, Button, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryWhiteFill = Template.bind({});
PrimaryWhiteFill.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY_WHITE_FILL,
};

export const PrimaryWhiteOutline = Template.bind({});
PrimaryWhiteOutline.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY_WHITE_OUTLINE,
};

export const PrimaryBlueFill = Template.bind({});
PrimaryBlueFill.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY_BLUE_FILL,
};

export const PrimaryBlueOutline = Template.bind({});
PrimaryBlueOutline.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY_BLUE_OUTLINE,
};

export const PrimaryDarkFill = Template.bind({});
PrimaryDarkFill.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY_DARK_FILL,
};

export const PrimaryDarkOutline = Template.bind({});
PrimaryDarkOutline.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY_DARK_OUTLINE,
};

export const SecondaryWhite = Template.bind({});
SecondaryWhite.args = {
    children: 'Button',
    theme: ButtonTheme.SECONDARY_WHITE,
};

export const SecondaryBlue = Template.bind({});
SecondaryBlue.args = {
    children: 'Button',
    theme: ButtonTheme.SECONDARY_BLUE,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Button',
    theme: ButtonTheme.SECONDARY_DARK,
};
