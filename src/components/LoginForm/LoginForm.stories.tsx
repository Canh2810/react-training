import { StoryObj, Meta } from '@storybook/react'

import LoginForm from '.'

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
} as Meta

type Story = StoryObj<typeof LoginForm>

export const Default: Story = {}
