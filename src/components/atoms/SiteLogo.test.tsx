/**
 * @vitest-environment jsdom
 */
import { render, cleanup, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import { SiteLogo } from './SiteLogo';

beforeEach(() => {
  cleanup();
});

describe('SiteLogo', () => {
  it('renders without error', () => {
    const { asFragment } = render(<SiteLogo href="test" src="test" alt="test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a link with the href passed in', () => {
    render(<SiteLogo href="myHref" src="someSrc" alt="someAltText" />);

    let link = screen.getByRole('link');

    expect(link.getAttribute('href')).toBe('myHref');
  });

  it('renders an image with the src passed in', () => {
    render(<SiteLogo href="someHref" src="mySrc" alt="someAltText" />);

    let image = screen.getByRole('img');

    expect(image.getAttribute('src')).toBe('mySrc');
  });

  it('renders an image with the alt passed in', () => {
    render(<SiteLogo href="someHref" src="someSrc" alt="myAltText" />);

    let image = screen.getByRole('img');

    expect(image.getAttribute('alt')).toBe('myAltText');
  });
});
