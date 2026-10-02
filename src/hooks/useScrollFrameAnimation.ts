import { useState, useEffect, useRef } from 'react';

export const useScrollFrameAnimation = (frameCount: number) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const loadImages = async () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const paddedIndex = String(i).padStart(3, '0');
        img.src = `/frames/ezgif-frame-${paddedIndex}.png`;

        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setImages(loadedImages);
            setLoaded(true);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load frame ${i}`);
          // Continue anyway to not block the whole site if one frame fails
          loadedCount++;
          if (loadedCount === frameCount) {
            setImages(loadedImages);
            setLoaded(true);
          }
        };
        loadedImages.push(img);
      }
    };

    loadImages();
  }, [frameCount]);

  useEffect(() => {
    if (!loaded || !containerRef.current) return;

    let animationFrameId: number;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how far we've scrolled through the container
      const startOffset = rect.top;
      const totalScroll = rect.height - viewportHeight;

      // Normalize progress from 0 to 1
      let progress = -startOffset / totalScroll;
      progress = Math.max(0, Math.min(1, progress));

      const frameIndex = Math.floor(progress * (frameCount - 1));

      animationFrameId = requestAnimationFrame(() => {
        setCurrentFrame(frameIndex);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [loaded, frameCount]);

  return { currentFrame, images, loaded, containerRef };
};
