import { NavItem } from '../atoms/NavItem';

type MainNavProps = {
  /*
   * The navigation items
   */
  navItems: {
    /*
     * The label of the navigation item
     */
    label: string;
    /*
     * The href of the navigation item
     */
    href: string;
  }[];
};

/**
 * The main navigation component
 */
export const MainNav = ({ navItems }: MainNavProps) => {
  return (
    <nav className="flex gap-6 items-center flex-wrap">
      <ul className="flex gap-10 grow-0 flex-wrap">
        {navItems.map((navItem, index) => (
          <NavItem key={index} {...navItem} />
        ))}
      </ul>
    </nav>
  );
};
