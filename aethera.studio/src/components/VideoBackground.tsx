import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  src: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE_DURATION = 0.5; // seconds
    let animationFrameId: number;

    const updateOpacity = () => {
      if (!video) return;

      const currentTime = video.currentTime;
      const duration = video.duration;

      if (!duration) {
        animationFrameId = requestAnimationFrame(updateOpacity);
        return;
      }

      let newOpacity = 1;

      // Start fade
      if (currentTime < FADE_DURATION) {
        newOpacity = currentTime / FADE_DURATION;
      } 
      // End fade
      else if (currentTime > duration - FADE_DURATION) {
        newOpacity = (duration - currentTime) / FADE_DURATION;
      }

      setOpacity(Math.max(0, Math.min(1, newOpacity)));
      animationFrameId = requestAnimationFrame(updateOpacity);
    };

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(err => console.error("Video play failed:", err));
        }
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    animationFrameId = requestAnimationFrame(updateOpacity);

    return () => {
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute top-[300px] right-0 bottom-0 left-0 overflow-hidden z-0">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        autoPlay
        className="w-full h-full object-cover"
        style={{ opacity, transition: 'none' }}
      />
      {/* Top Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
    </div>
  );
};
