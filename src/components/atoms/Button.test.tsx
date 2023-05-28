/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('has a default type and therefore colour of "primary"', async () => {
    render(<Button label="Button" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('bg-primary');
  });

  it('has a default type and therefore colour of "primary"', async () => {
    render(<Button label="Button" />);

    let button = await screen.getByRole('button');

    expect(button.className).toContain('bg-primary');
  });
});
