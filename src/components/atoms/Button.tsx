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
}

const sizeMap = {
  small: 'w-24 h-8',
  medium: 'w-32 h-10',
  large: 'w-40 h-12'
};

const typeMap = {
  primary: 'text-white bg-purple-600 hover:bg-purple-400',
  secondary: 'text-black bg-gray-200 hover:bg-gray-100',
  tertiary: 'text-white bg-blue-600 hover:bg-blue-400'
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type = 'primary', size = 'medium', label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={['rounded-lg border border-gray-300', sizeMap[size], typeMap[type]].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
