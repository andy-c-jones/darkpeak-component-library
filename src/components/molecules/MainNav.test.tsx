/**
 * @vitest-environment jsdom
 */
import { render, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MainNav } from './MainNav';

beforeEach(() => {
  cleanup();
});

describe('MainNav', () => {
  it('renders without error', () => {
    const { asFragment } = render(<MainNav navItems={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the navigation items', () => {
    const c = render(
      <MainNav
        navItems={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]}
      />
    );

    let navItems = c.container.querySelectorAll('li');

    expect(navItems.length).toBe(2);

    expect(navItems[0].querySelector('a')?.textContent).toBe('Home');
    expect(navItems[0].querySelector('a')?.getAttribute('href')).toBe('/');
    expect(navItems[1].querySelector('a')?.textContent).toBe('About');
    expect(navItems[1].querySelector('a')?.getAttribute('href')).toBe('/about');
  });
});
