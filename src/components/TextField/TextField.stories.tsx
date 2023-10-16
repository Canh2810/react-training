import { StoryObj, Meta } from '@storybook/react'

import TextField from '.'
import { TextFieldVariants } from '@types'
import { Search } from '@assets/icons'

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    icon: <Search />,
    placeholder: 'Text Field',
    onChange: () => {},
  },
}

export const Filled: Story = {
  args: {
    variant: TextFieldVariants.Filled,
    icon: <Search />,
    placeholder: 'Text Field',
    onChange: () => {},
  },
}

export const HasErrorMessage: Story = {
  args: {
    icon: <Search />,
    placeholder: 'Text Field',
    errorMessage: 'Field is required',
    onChange: () => {},
  },
}
