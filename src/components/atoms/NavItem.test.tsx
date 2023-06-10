/**
 * @vitest-environment jsdom
 */
import { render, cleanup, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import { NavItem } from './NavItem';

beforeEach(() => {
  cleanup();
});

describe('NavItem', () => {
  it('renders without error', () => {
    const { asFragment } = render(<NavItem label="test" href="test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a link with the label passed in', () => {
    render(<NavItem label="some link label" href="test" />);

    let link = screen.getByRole('link');

    expect(link.innerHTML).toBe('some link label');
  });

  it('renders a link with the href passed in', () => {
    render(<NavItem label="some link label" href="test" />);

    let link = screen.getByRole('link');

    expect(link.getAttribute('href')).toBe('test');
  });
});
