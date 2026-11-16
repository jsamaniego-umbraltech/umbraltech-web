import type { Meta, StoryObj } from '@storybook/react-vite'
import { PrivacyNotice } from './PrivacyNotice'

const meta = {
  title: 'Páginas/PrivacyNotice',
  component: PrivacyNotice,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof PrivacyNotice>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
