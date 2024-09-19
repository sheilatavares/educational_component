import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: 'standard' | 'featured';
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const Title = ({
  children,
  variant,
  size,
  className,
  ...props
}: TitleProps) => {
  return (
    <h1
      {...props}
      className={cn(TitleVariants({ variant, size }), className)}
      aria-level={2}
    >
      {children}
    </h1>
  );
};

const TitleVariants = cva('text-start mb-3', {
  variants: {
    variant: {
      standard: 'text-standard fw-bold',
      featured: 'text-featured fw-bold',
    },
    size: {
      small: 'fs-6',
      medium: 'fs-2',
      large: 'fs-1',
    },
  },
});

Title.displayName = 'Title';
export default Title;
