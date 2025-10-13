import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

// Global video manager to handle pausing other videos
class VideoManager {
  private static instance: VideoManager;
  private activeVideo: string | null = null;
  private callbacks: Map<string, () => void> = new Map();

  static getInstance(): VideoManager {
    if (!VideoManager.instance) {
      VideoManager.instance = new VideoManager();
    }
    return VideoManager.instance;
  }

  registerVideo(id: string, pauseCallback: () => void): void {
    this.callbacks.set(id, pauseCallback);
  }

  unregisterVideo(id: string): void {
    this.callbacks.delete(id);
  }

  playVideo(id: string): void {
    if (this.activeVideo && this.activeVideo !== id) {
      const pauseCallback = this.callbacks.get(this.activeVideo);
      if (pauseCallback) {
        pauseCallback();
      }
    }
    this.activeVideo = id;
  }
}

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  thumbnail?: boolean;
}

export const YouTubeEmbed = ({ videoId, title, className = "", thumbnail = false }: YouTubeEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const videoManager = VideoManager.getInstance();

  const getThumbnailUrl = (id: string) => {
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  };

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/);
    return match ? match[1] : url;
  };

  const cleanVideoId = extractVideoId(videoId);

  useEffect(() => {
    const pauseVideo = () => {
      setIsPlaying(false);
      // Also pause the iframe if it exists
      if (videoRef.current) {
        const iframe = videoRef.current;
        iframe.src = iframe.src; // This stops the video
      }
    };

    videoManager.registerVideo(cleanVideoId, pauseVideo);

    return () => {
      videoManager.unregisterVideo(cleanVideoId);
    };
  }, [cleanVideoId, videoManager]);

  const handlePlay = () => {
    videoManager.playVideo(cleanVideoId);
    setIsPlaying(true);
  };

  if (thumbnail) {
    return (
      <div className={`relative group cursor-pointer ${className}`} onClick={handlePlay}>
        <img 
          src={getThumbnailUrl(cleanVideoId)}
          alt={title}
          className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
    );
  }

  if (!isPlaying) {
    return (
      <div className={`relative group cursor-pointer ${className}`} onClick={handlePlay}>
        <img 
          src={getThumbnailUrl(cleanVideoId)}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <Play className="w-10 h-10 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <iframe
        ref={videoRef}
        src={`https://www.youtube.com/embed/${cleanVideoId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&controls=1&iv_load_policy=3&cc_load_policy=0&origin=${window.location.origin}&widget_referrer=${window.location.origin}`}
        title=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
      />
    </div>
  );
};