import type { Meta, StoryObj } from '@storybook/react-vite'
import { Services } from './Services'

const meta = {
  title: 'Secciones/Services',
  component: Services,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Services>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
