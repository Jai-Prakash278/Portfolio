import { useEffect, useRef, useState } from 'react';

interface Props {
  startFrame: number;
  endFrame: number;
  folderPath: string;
  filePrefix: string;
}

export const CharacterScrollAnimation = ({ startFrame, endFrame, folderPath, filePrefix }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(startFrame);

  const frameCount = endFrame - startFrame + 1;

  // Preload images
  useEffect(() => {
    let loadedCount = 0;

    for (let i = startFrame; i <= endFrame; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `${folderPath}/${filePrefix}${paddedIndex}.png`;
      
      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      
      img.onload = onImageLoad;
      img.onerror = () => {
        console.error(`Failed to load frame ${i}`);
        onImageLoad(); // continue anyway
      };
    }
  }, [startFrame, endFrame, frameCount, folderPath, filePrefix]);

  // Handle scroll to update current frame
  useEffect(() => {
    if (!loaded || !containerRef.current) return;

    let animationFrameId: number;

    const handleScroll = () => {
      const section = containerRef.current?.closest('section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start animating when the top of the section reaches the top of the viewport
      const startOffset = rect.top; 
      
      // The total scrollable distance is the section's height minus the viewport height
      const totalScroll = rect.height - viewportHeight;

      if (totalScroll <= 0) return;

      // Normalized progress from 0 to 1
      let progress = -startOffset / totalScroll;
      progress = Math.max(0, Math.min(1, progress));

      const frameIndexOffset = Math.floor(progress * (frameCount - 1));
      const targetFrame = startFrame + frameIndexOffset;

      animationFrameId = requestAnimationFrame(() => {
        setCurrentFrame(targetFrame);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial setup
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [loaded, frameCount, startFrame]);

  const currentPaddedIndex = String(currentFrame).padStart(3, '0');
  const currentImageSrc = `${folderPath}/${filePrefix}${currentPaddedIndex}.png`;

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-accent/50 text-[10px] uppercase tracking-widest font-bold">
          <div className="w-5 h-5 border-2 border-accent/20 border-t-accent rounded-full animate-spin mr-3"></div>
          Loading Scene...
        </div>
      )}
      {loaded && (
        <img 
          src={currentImageSrc} 
          alt="Character Animation Frame"
          className="w-full h-full object-cover object-[center_top] md:object-center transition-opacity duration-1000 ease-in-out opacity-100"
        />
      )}
    </div>
  );
};
