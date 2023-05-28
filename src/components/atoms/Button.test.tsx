/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';

// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  it('test 1', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
});
