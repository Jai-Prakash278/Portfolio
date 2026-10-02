import { useState, useEffect, useRef } from 'react';

export const useMouseFrameAnimation = (startFrame: number, endFrame: number) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const frameCount = endFrame - startFrame + 1;
  const targetFrame = useRef(0);
  const currentFrameFloat = useRef(0);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const loadImages = async () => {
      for (let i = startFrame; i <= endFrame; i++) {
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
  }, [startFrame, endFrame, frameCount]);

  useEffect(() => {
    if (!loaded) return;

    let animationFrameId: number;

    const handlePointerMove = (x: number) => {
      const progress = x / window.innerWidth;
      const target = Math.round(progress * (frameCount - 1));
      targetFrame.current = Math.max(0, Math.min(frameCount - 1, target));
    };

    const handleMouseMove = (event: MouseEvent) => {
      handlePointerMove(event.clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        handlePointerMove(event.touches[0].clientX);
      }
    };

    const renderLoop = () => {
      // Smooth interpolation towards target frame
      currentFrameFloat.current += (targetFrame.current - currentFrameFloat.current) * 0.15;
      
      const frameIndex = Math.round(currentFrameFloat.current);
      setCurrentFrame(Math.max(0, Math.min(frameCount - 1, frameIndex)));

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    // Start animation loop
    renderLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [loaded, frameCount]);

  return { currentFrame, images, loaded };
};
