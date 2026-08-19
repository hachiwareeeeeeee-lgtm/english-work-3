import { useVideoFadeLoop } from "../hooks/useVideoFadeLoop";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

export default function VideoBackground() {
  const { videoRef, opacity } = useVideoFadeLoop();

  return (
    <div className="absolute z-0" style={{ inset: "auto 0 0 0", top: "300px" }}>
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        autoPlay
        preload="auto"
        className="h-full w-full object-cover"
        style={{ opacity }}
      />

      {/* Fades the video into the white page at both edges so it reads
          as part of the layout rather than a rectangle dropped on top */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
    </div>
  );
}
