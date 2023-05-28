/**
 * @vitest-environment jsdom
 */
import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Button } from './Button';

beforeEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('Button', () => {
  it('renders a button with the label passed in', async () => {
    render(<Button label="some button label" />);

    let button = await screen.getByRole('button');

    expect(button.innerHTML).toBe('some button label');
  });

  it('calls the onClick handler when clicked', async () => {
    let onClick = vi.fn();
    render(<Button label="Button" onClick={onClick} />);

    let button = await screen.getByRole('button');

    button.click();

    expect(onClick).toHaveBeenCalled();
  });

  it('has a colour of "primary" when type is primary', async () => {
    render(<Button label="Button" type="primary" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('bg-primary');
    expect(button.className).toContain('hover:bg-primary-accent');
  });

  it('has a colour of "secondary" when type is secondary', async () => {
    render(<Button label="Button" type="secondary" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('bg-secondary');
    expect(button.className).toContain('hover:bg-secondary-accent');
  });

  it('has a colour of "tertiary" when type is tertiary', async () => {
    render(<Button label="Button" type="tertiary" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('bg-tertiary');
    expect(button.className).toContain('hover:bg-tertiary-accent');
  });

  it('has a default type and therefore colour of "primary"', async () => {
    render(<Button label="Button" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('bg-primary');
    expect(button.className).toContain('hover:bg-primary-accent');
  });

  it('is small size by when size set to small', async () => {
    render(<Button label="Button" size="small" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('w-24 h-8');
  });

  it('is medium size by when size set to medium', async () => {
    render(<Button label="Button" size="medium" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('w-32 h-10');
  });

  it('is large size by when size set to large', async () => {
    render(<Button label="Button" size="large" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('w-40 h-12');
  });

  it('is medium size by default', async () => {
    render(<Button label="Button" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('w-32 h-10');
  });

  it('is disabled when disabled prop is true', async () => {
    render(<Button label="Button" disabled />);

    let button = await screen.getByRole('button');

    expect(button.hasAttribute('disabled')).toBeTruthy();
  });

  it('is not disabled by default', async () => {
    render(<Button label="Button" />);

    let button = await screen.getByRole('button');

    expect(button.hasAttribute('disabled')).toBeFalsy();
  });

  it('has a disabled colour of "primary-accent" when type is primary', async () => {
    render(<Button label="Button" type="primary" disabled />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('bg-primary-accent');
  });

  it('has a disabled colour of "secondary-accent" when type is secondary', async () => {
    render(<Button label="Button" type="secondary" disabled />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('bg-secondary-accent');
  });

  it('has a disabled colour of "tertiary-accent" when type is tertiary', async () => {
    render(<Button label="Button" type="tertiary" disabled />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('bg-tertiary-accent');
  });
});
