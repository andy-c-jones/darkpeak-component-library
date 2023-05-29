/**
 * @vitest-environment jsdom
 */
import { render, cleanup } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Header } from './Header';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  cleanup();
});

describe('Header', () => {
  it('renders without error', () => {
    const { asFragment } = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[]}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the navigation items', () => {
    const c = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    );

    let navItems = c.container.querySelectorAll('li');

    expect(navItems.length).toBe(2);

    expect(navItems[0].querySelector('a')?.textContent).toBe('Home');
    expect(navItems[0].querySelector('a')?.getAttribute('href')).toBe('/');
    expect(navItems[1].querySelector('a')?.textContent).toBe('About');
    expect(navItems[1].querySelector('a')?.getAttribute('href')).toBe('/about');
  });

  it('renders the user name when logged in', () => {
    const c = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[]}
        user={{ name: 'test' }}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    );

    expect(c.container.querySelector('.welcome')?.textContent).toBe('Welcome, test!');
  });

  it('renders the login button when not logged in', () => {
    const c = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[]}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    );

    expect(c.getAllByRole('button').filter((b) => b.textContent === 'Log in').length).toBe(1);
  });

  it('renders the logout button when logged in', () => {
    const c = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[]}
        user={{ name: 'test' }}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    );

    expect(c.getAllByRole('button').filter((b) => b.textContent === 'Log out').length).toBe(1);
  });

  it('renders the create account button when not logged in', () => {
    const c = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[]}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    );

    console.log(c.container.innerHTML);
    expect(c.getAllByRole('button').filter((b) => b.textContent === 'Sign up').length).toBe(1);
  });

  it('does not render the create account button when logged in', () => {
    const c = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[]}
        user={{ name: 'test' }}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    );

    expect(c.getAllByRole('button').filter((b) => b.textContent === 'Sign Up').length).toBe(0);
  });

  it('calls the onLogin callback when the login button is clicked', async () => {
    const onLogin = vi.fn();

    const c = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[]}
        onLogin={onLogin}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    );

    await userEvent.click(c.getByText('Log in'));

    expect(onLogin).toHaveBeenCalled();
  });

  it('calls the onLogout callback when the logout button is clicked', async () => {
    const onLogout = vi.fn();

    const c = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[]}
        user={{ name: 'test' }}
        onLogin={() => {}}
        onLogout={onLogout}
        onCreateAccount={() => {}}
      />
    );

    await userEvent.click(c.getByText('Log out'));

    expect(onLogout).toHaveBeenCalled();
  });

  it('calls the onCreateAccount callback when the create account button is clicked', async () => {
    const onCreateAccount = vi.fn();

    const c = render(
      <Header
        logoConfig={{ src: 'test', alt: 'test' }}
        navItems={[]}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={onCreateAccount}
      />
    );

    await userEvent.click(c.getByText('Sign up'));

    expect(onCreateAccount).toHaveBeenCalled();
  });
});
