import { StoryObj, Meta } from '@storybook/react'

import Typography from './'
import { TypoVariants } from '@types'

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    children: 'This is text',
  },
}

export const TextExtraSmall: Story = {
  args: {
    children: 'This is text',
    variant: TypoVariants.TextExtraSmall,
  },
}

export const TextSmall: Story = {
  args: {
    children: 'This is text',
    variant: TypoVariants.TextSmall,
  },
}

export const TextMedium: Story = {
  args: {
    children: 'This is text',
    variant: TypoVariants.TextMedium,
  },
}

export const TextLarge: Story = {
  args: {
    children: 'This is text',
    variant: TypoVariants.TextLarge,
  },
}

export const TexExtraLarge: Story = {
  args: {
    children: 'This is text',
    variant: TypoVariants.TexExtraLarge,
  },
}

export const HeadingSmall: Story = {
  args: {
    children: 'This is text',
    variant: TypoVariants.HeadingSmall,
  },
}

export const HeadingMedium: Story = {
  args: {
    children: 'This is text',
    variant: TypoVariants.HeadingMedium,
  },
}

export const HeadingLarge: Story = {
  args: {
    children: 'This is text',
    variant: TypoVariants.HeadingLarge,
  },
}

export const HeadingExtraLarge: Story = {
  args: {
    children: 'This is text',
    variant: TypoVariants.HeadingExtraLarge,
  },
}
