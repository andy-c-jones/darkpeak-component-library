import { Button } from '../atoms/Button';
import { SiteLogo } from '../atoms/SiteLogo';
import { MainNav } from '../molecules/MainNav';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  logoConfig: {
    href?: string;
    src: string;
    alt: string;
  };
  navItems: {
    label: string;
    href: string;
  }[];
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  logoConfig,
  navItems,
  onLogin,
  onLogout,
  onCreateAccount
}: HeaderProps) => (
  <header>
    <div className="flex items-center gap-12 justify-between">
      <SiteLogo href={logoConfig.href || '/'} src={logoConfig.src} alt={logoConfig.alt} />
      <MainNav navItems={navItems} />
      <div className="flex items-center gap-2 ">
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button type="primary" size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
