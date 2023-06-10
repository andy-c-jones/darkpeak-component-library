type SiteLogoProps = {
  // The href of the site logo
  href: string;
  // The image source of the site logo
  src: string;
  // The alt text of the site logo
  alt: string;
};

// The site logo component
export const SiteLogo = ({ href, ...props }: SiteLogoProps) => {
  return (
    <a href={href}>
      <img {...props}></img>
    </a>
  );
};
