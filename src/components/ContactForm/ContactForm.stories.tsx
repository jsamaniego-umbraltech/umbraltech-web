import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContactForm } from './ContactForm'

const meta = {
  title: 'Componentes/ContactForm',
  component: ContactForm,
  parameters: { layout: 'padded' },
  args: {
    send: () => new Promise<void>((resolve) => setTimeout(resolve, 800)),
  },
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EnvioFallido: Story = {
  args: { send: () => Promise.reject(new Error('network')) },
}
