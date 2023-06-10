import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../components/organisms/Header';

const meta = {
  title: 'Design System/Organisms/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    logoConfig: {
      href: '/',
      src: 'https://via.placeholder.com/150x50?text=Logo',
      alt: 'Logo'
    },
    user: {
      name: 'Jane Doe'
    }
  }
};

export const LoggedOut: Story = {
  args: {
    navItems: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ],
    logoConfig: {
      href: '/',
      src: 'https://via.placeholder.com/150x50?text=Logo',
      alt: 'Logo'
    }
  }
};
