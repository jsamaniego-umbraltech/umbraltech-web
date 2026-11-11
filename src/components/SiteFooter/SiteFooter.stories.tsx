import type { Meta, StoryObj } from '@storybook/react-vite'
import { SiteFooter } from './SiteFooter'

const meta = {
  title: 'Secciones/SiteFooter',
  component: SiteFooter,
  parameters: { layout: 'fullscreen' },
  args: { year: 2026 },
} satisfies Meta<typeof SiteFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
