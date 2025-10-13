import React from "react";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { FloatingOrbs } from "@/components/ui/floating-orbs";
import { FloatingElements } from "@/components/ui/floating-elements";
interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  videoUrl: string;
  description: string;
}
const shortformEdits: PortfolioItem[] = [{
  id: "sf1",
  title: "Creator Brand Story",
  category: "Instagram Reel",
  duration: "0:45",
  views: "2.3M",
  videoUrl: "https://youtube.com/shorts/kUF635B5IN8?feature=share",
  description: "Engaging personal brand story with dynamic cuts and motion graphics"
}, {
  id: "sf2",
  title: "Product Launch Teaser",
  category: "TikTok",
  duration: "0:30",
  views: "1.8M",
  videoUrl: "https://youtube.com/shorts/Yd8LLdarSas?feature=share",
  description: "High-energy product launch with custom animations and color grading"
}, {
  id: "sf3",
  title: "Educational Hook",
  category: "YouTube Short",
  duration: "0:50",
  views: "3.1M",
  videoUrl: "https://youtube.com/shorts/Rnz6QcFCAAU?feature=share",
  description: "Educational content with attention-grabbing hook and retention edits"
}, {
  id: "sf4",
  title: "Behind the Scenes",
  category: "Instagram Reel",
  duration: "0:40",
  views: "1.2M",
  videoUrl: "https://youtube.com/shorts/Hofguws9p0U?feature=share",
  description: "Behind-the-scenes content with seamless transitions and branding"
}];
const longformEdits: PortfolioItem[] = [{
  id: "lf1",
  title: "YouTube Interview Series",
  category: "Interview",
  duration: "45:20",
  views: "850K",
  videoUrl: "https://youtu.be/lj_ouEiF4vo",
  description: "Professional interview editing with multi-camera setup and lower thirds"
}, {
  id: "lf2",
  title: "Educational Webinar",
  category: "Webinar",
  duration: "1:20:15",
  views: "420K",
  videoUrl: "https://youtu.be/DwGxkast9TU",
  description: "Comprehensive webinar edit with screen sharing and presentation graphics"
}, {
  id: "lf3",
  title: "Podcast Video Version",
  category: "Podcast",
  duration: "1:05:30",
  views: "650K",
  videoUrl: "https://youtu.be/SJCDONvbrlo",
  description: "Podcast to video conversion with engaging visual elements and timestamps"
}, {
  id: "lf4",
  title: "Corporate Training",
  category: "Corporate",
  duration: "35:45",
  views: "180K",
  videoUrl: "https://youtu.be/-RYdj69mU-c",
  description: "Professional corporate training video with branded graphics and animations"
}];
const ShortformCard = ({
  item
}: {
  item: PortfolioItem;
}) => <div className="group cursor-pointer bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-elegant">
    <div className="relative overflow-hidden aspect-[9/16]">
      <YouTubeEmbed videoId={item.videoUrl} title={item.title} className="w-full h-full" thumbnail={false} />
    </div>
  </div>;
const LongformCard = ({
  item
}: {
  item: PortfolioItem;
}) => <div className="group cursor-pointer bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-elegant">
    <div className="relative overflow-hidden aspect-video">
      <YouTubeEmbed videoId={item.videoUrl} title={item.title} className="w-full h-full" thumbnail={false} />
    </div>
  </div>;
export const PortfolioSection = () => {
  return <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FloatingOrbs />
      <FloatingElements density="medium" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#6600ff]">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Discover our latest video editing projects showcasing our expertise in creating engaging talking head content
          </p>
        </div>

        {/* Shortform Edits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-[#6600ff]">
              Shortform <span className="text-primary">Edits</span>
            </h3>
            <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
              Engaging short-form content for Instagram Reels, TikTok, and YouTube Shorts
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {shortformEdits.map(item => <ShortformCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* Longform Edits Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Longform <span className="text-primary">Edits</span>
            </h3>
            <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
              Professional long-form content for YouTube, podcasts, and webinars
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            {longformEdits.map(item => <LongformCard key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </section>;
};