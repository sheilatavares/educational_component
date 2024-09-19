import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

type InstructorProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  size?: 'small' | 'medium' | 'large';
  nameSize?: 'small' | 'medium' | 'large';
  className?: string;
  instructorName: string;
};

const Instructor = ({
  size,
  className,
  instructorName,
  nameSize,
  ...props
}: InstructorProps) => {
  return (
    <div
      className="d-flex align-items-center"
      role="region"
      aria-labelledby="instructor-name"
    >
      <img
        {...props}
        className={cn(InstructorVariants({ size }), className)}
        alt={`Imagem de ${instructorName}`}
      />
      <div className="text-start ms-3">
        <h3
          id="instructor-name"
          className={cn(InstructorVariants({ nameSize }), className)}
        >
          {instructorName}
        </h3>
        <p className="text-secondary my-0 fs-6">Instrutora</p>
      </div>
    </div>
  );
};

const InstructorVariants = cva('rounded-circle', {
  variants: {
    size: {
      small: 'img-small',
      medium: 'img-medium',
      large: 'img-large',
    },
    nameSize: {
      small: 'fs-5 mb-0',
      medium: 'fs-2 mb-0',
      large: 'fs-1 mb-0',
    },
  },
});

Instructor.displayName = 'Instructor';
export default Instructor;
