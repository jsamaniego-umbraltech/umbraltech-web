import type { Meta, StoryObj } from '@storybook/react-vite'
import { demoProjects } from '../../content/portfolio'
import { Portfolio } from './Portfolio'

const meta = {
  title: 'Secciones/Portfolio',
  component: Portfolio,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Portfolio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const UnProyecto: Story = { args: { projects: demoProjects.slice(0, 1) } }
