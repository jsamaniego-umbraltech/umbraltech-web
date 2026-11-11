import type { Meta, StoryObj } from '@storybook/react-vite'
import { UmbralArc } from './UmbralArc'

const meta = {
  title: 'Componentes/UmbralArc',
  component: UmbralArc,
  decorators: [(Story) => <div style={{ width: 240 }}><Story /></div>],
} satisfies Meta<typeof UmbralArc>

export default meta
type Story = StoryObj<typeof meta>

export const Animado: Story = {}
export const Estatico: Story = { args: { animated: false } }
