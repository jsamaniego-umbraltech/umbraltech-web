import type { Meta, StoryObj } from '@storybook/react-vite'
import { NotFound } from './NotFound'

const meta = {
  title: 'Páginas/NotFound',
  component: NotFound,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof NotFound>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
