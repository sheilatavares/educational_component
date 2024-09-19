import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'standard' | 'featured';
  size?: 'small' | 'medium' | 'large';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const EnrollButton = ({
  variant,
  size,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const customEvent = new CustomEvent('enrollButtonClick', {
      detail: { message: 'Evento de inscrição foi disparado' },
    });
    window.dispatchEvent(customEvent);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

const buttonVariants = cva('btn font-weight-bold rounded-pill', {
  variants: {
    variant: {
      standard: 'btn-standard fw-bold',
      featured: 'btn-featured fw-bold',
    },
    size: {
      small: 'font-sm py-1 px-lg-4 px-2',
      medium: 'font-sm px-lg-4 px-2',
      large: 'text-lg py-2 px-5',
    },
  },
});

EnrollButton.displayName = 'EnrollButton';

export default EnrollButton;
