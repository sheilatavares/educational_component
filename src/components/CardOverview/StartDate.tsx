import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

type StartDateProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: 'standard' | 'featured';
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const StartDate = ({
  children,

  size,
  className,
  ...props
}: StartDateProps) => {
  return (
    <div>
      <h3
        {...props}
        className={cn(StartDateVariants({ size }), className)}
        aria-labelledby="start-date-label"
      >
        Início: {children}
      </h3>
      <p id="start-date-label" className="visually-hidden">
        Data de início do curso
      </p>
    </div>
  );
};

const StartDateVariants = cva('fw-bold text-black mb-2', {
  variants: {
    size: {
      small: 'small-p',
      medium: 'medium-p',
      large: 'large-p',
    },
  },
});

StartDate.displayName = 'StartDate';
export default StartDate;
