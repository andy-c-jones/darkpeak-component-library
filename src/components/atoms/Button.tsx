// import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   * Primary buttons should be used for the primary action on each page.
   * Secondary buttons should be used for secondary actions on each page.
   * Tertiary buttons should be used for tertiary actions on each page.
   * @default primary
   */
  type?: 'primary' | 'secondary' | 'tertiary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
}

const sizeMap = {
  small: 'w-24 h-8',
  medium: 'w-32 h-10',
  large: 'w-40 h-12'
};

const colourMap = {
  primary: 'text-white bg-primary-default hover:bg-primary-accent',
  secondary: 'text-black bg-secondary-default hover:bg-secondary-accent',
  tertiary: 'text-white bg-tertiary-default hover:bg-tertiary-accent'
};

const disabledColourMap = {
  primary: 'text-white bg-primary-accent',
  secondary: 'text-black bg-secondary-accent',
  tertiary: 'text-white bg-tertiary-accent'
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type = 'primary', size = 'medium', label, ...props }: ButtonProps) => {
  const colours = props.disabled ? disabledColourMap : colourMap;

  return (
    <button
      type="button"
      className={['rounded-lg', sizeMap[size], colours[type]].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
