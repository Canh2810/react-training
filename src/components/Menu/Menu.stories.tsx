import { StoryObj, Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import Menu from '.'
import { MenuVariants } from '@types'
import { LIST_MENU_ITEM } from '@constants'

export default {
  title: 'Components/Menu',
  component: Menu,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {
  args: {
    listItems: LIST_MENU_ITEM,
  },
}

export const Vertical: Story = {
  args: {
    listItems: LIST_MENU_ITEM,
    variant: MenuVariants.Vertical,
  },
}
