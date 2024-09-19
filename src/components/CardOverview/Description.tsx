import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

type DescriptionProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const Description = ({
  children,
  size,
  className,
  ...props
}: DescriptionProps) => {
  return (
    <div
      {...props}
      className={cn(DescriptionVariants({ size }), className)}
      aria-labelledby="descricao-curso"
    >
      <h4 id="descricao-curso">Sobre o curso</h4>
      {children}
    </div>
  );
};

const DescriptionVariants = cva('p-2 text-start', {
  variants: {
    size: {
      small: 'small-p',
      medium: 'medium-p',
      large: 'large-p',
    },
  },
});

Description.displayName = 'Description';
export default Description;
