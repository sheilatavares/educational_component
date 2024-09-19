import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

type VideoPlayerProps = React.IframeHTMLAttributes<HTMLIFrameElement> & {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  videoUrl: string;
  title: string;
  ariaLabel?: string;
};

const VideoPlayer = ({
  size,
  className,
  videoUrl,
  title,
  ariaLabel,
  ...props
}: VideoPlayerProps) => {
  return (
    <div className={cn('video-container', className)}>
      <div role="region" aria-label={ariaLabel} className="visually-hidden">
        {title}
      </div>
      <iframe
        src={videoUrl}
        title={title}
        {...props}
        className={cn(VideoPlayerVariants({ size }), className)}
        allowFullScreen
        aria-describedby={ariaLabel ? 'video-description' : undefined}
      />
    </div>
  );
};

const VideoPlayerVariants = cva('border-0 rounded', {
  variants: {
    size: {
      small: 'iframe-small',
      medium: 'iframe-medium',
      large: 'iframe-large',
    },
  },
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
