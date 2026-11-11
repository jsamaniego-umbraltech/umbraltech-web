import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactSection } from './ContactSection'

const meta = {
  title: 'Secciones/ContactSection',
  component: ContactSection,
  parameters: { layout: 'fullscreen' },
  args: { send: () => new Promise<void>((resolve) => setTimeout(resolve, 800)) },
} satisfies Meta<typeof ContactSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
