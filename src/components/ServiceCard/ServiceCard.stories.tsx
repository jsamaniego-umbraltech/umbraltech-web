import type { Meta, StoryObj } from '@storybook/react-vite'
import { services } from '../../content/services'
import { ServiceCard } from './ServiceCard'

const meta = {
  title: 'Componentes/ServiceCard',
  component: ServiceCard,
  parameters: { layout: 'padded' },
  args: { service: services[0] },
} satisfies Meta<typeof ServiceCard>

export default meta
type Story = StoryObj<typeof meta>

export const SoftwareALaMedida: Story = {}

export const Automatizacion: Story = { args: { service: services[1] } }

export const FacturacionElectronica: Story = { args: { service: services[2] } }

export const SitiosWeb: Story = { args: { service: services[3] } }

export const AnalisisBanca: Story = { args: { service: services[4] } }
