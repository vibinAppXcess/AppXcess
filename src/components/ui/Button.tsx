import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'whitePrimary' | 'whiteOutline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const baseClasses =
  'relative group px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-teal-600 text-white hover:bg-teal-700',
  outline:
    'border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white',
  whitePrimary:
    'bg-white text-teal-600 hover:bg-teal-50',
  whiteOutline:
    'border-2 border-white text-white hover:bg-white hover:text-teal-600',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  leftIcon,
  rightIcon,
  className = '',
  children,
  ...rest
}) => {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...rest}>
      {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
    </button>
  );
};

export default Button;


