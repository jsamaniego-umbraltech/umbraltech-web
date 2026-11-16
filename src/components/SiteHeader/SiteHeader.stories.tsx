import type { Meta, StoryObj } from '@storybook/react-vite'
import { SiteHeader } from './SiteHeader'

const meta = {
  title: 'Secciones/SiteHeader',
  component: SiteHeader,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SiteHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Movil: Story = {
  globals: { viewport: { value: 'mobile1', isRotated: false } },
}
