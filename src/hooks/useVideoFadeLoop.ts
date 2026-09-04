import { useEffect, useRef, useState } from "react";

const FADE_SECONDS = 0.5;

/**
 * Drives a hand-rolled loop for a background video: fades in over the
 * first 0.5s, holds at full opacity, fades out over the last 0.5s, then
 * on `ended` rewinds to frame zero and plays again immediately — so the
 * loop point never reads as a hard cut or a flash of blank background.
 *
 * The <video> element must NOT have the `loop` attribute: the manual
 * restart in `handleEnded` is what creates the loop, and the native
 * `loop` attribute would suppress the `ended` event entirely.
 */
export function useVideoFadeLoop() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [opacity, setOpacity] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tick = () => {
      const { currentTime, duration } = video;
      if (duration && !Number.isNaN(duration)) {
        if (currentTime < FADE_SECONDS) {
          setOpacity(currentTime / FADE_SECONDS);
        } else if (currentTime > duration - FADE_SECONDS) {
          setOpacity(Math.max(0, (duration - currentTime) / FADE_SECONDS));
        } else {
          setOpacity(1);
        }
      }
      frameRef.current = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {
        /* autoplay can be blocked until the user interacts once */
      });
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return { videoRef, opacity };
}
