type NavItemProps = {
  // The label of the navigation item
  label: string;
  // The href of the navigation item
  href: string;
};

// A single navigation item component to but used in a navigation list
export const NavItem = ({ label, ...props }: NavItemProps) => {
  return (
    <li className="nav-item">
      <a className="nav-link" {...props}>
        {label}
      </a>
    </li>
  );
};
