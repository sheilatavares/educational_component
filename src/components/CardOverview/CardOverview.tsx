import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import Title from './Title';
import Instructor from './Instructor';
import Description from './Description';
import StartDate from './StartDate';
import EnrollButton from './EnrollButton';
import VideoPlayer from './VideoPlayer';
type CardOverviewProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'standard' | 'featured';
  size?: 'small' | 'medium' | 'large';
  courseName: string;
};

const CardOverview = ({
  variant,
  size,
  children,
  className,
  courseName,
  ...props
}: CardOverviewProps) => {
  return (
    <div
      {...props}
      className={cn(CardVariants({ variant, size }), className)}
      role="region"
      aria-label={`Informações do curso ${courseName}`}
    >
      {children}
    </div>
  );
};

const CardVariants = cva('rounded-4 p-4', {
  variants: {
    variant: {
      standard: 'border-standard border-2 bg-light',
      featured: 'border-featured border-2 bg-featured',
    },
    size: {
      small: 'col-md-5',
      medium: 'col-md-8',
      large: 'col-lg-10',
    },
  },
});

CardOverview.Title = Title;
CardOverview.Instructor = Instructor;
CardOverview.Description = Description;
CardOverview.StartDate = StartDate;
CardOverview.EnrollButton = EnrollButton;
CardOverview.VideoPlayer = VideoPlayer;

export default CardOverview;
