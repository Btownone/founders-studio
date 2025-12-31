import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Lock, CheckCircle, LogOut, Menu, X } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
  order: number;
}

interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  videos: Video[];
}

const COURSE_MODULES: Module[] = [
  {
    id: "module-1",
    title: "Etsy Fundamentals",
    description: "Learn the basics of setting up and running an Etsy store",
    icon: "🏪",
    videos: [
      {
        id: "vid-1-1",
        title: "How to Open an Etsy Store (Step-by-Step)",
        description: "Complete walkthrough of creating your Etsy account and store setup",
        duration: "12:34",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 1,
      },
      {
        id: "vid-1-2",
        title: "Understanding Etsy Fees & Pricing",
        description: "Breakdown of all fees and how to price your products for profit",
        duration: "8:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 2,
      },
      {
        id: "vid-1-3",
        title: "Shipping Settings & Profiles",
        description: "Configure shipping options and create shipping profiles",
        duration: "10:20",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 3,
      },
      {
        id: "vid-1-4",
        title: "Shop Policies & Legal Setup",
        description: "Create policies that protect you and build customer trust",
        duration: "9:15",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 4,
      },
    ],
  },
  {
    id: "module-2",
    title: "AI Design Mastery",
    description: "Master AI tools to create stunning product designs in minutes",
    icon: "🎨",
    videos: [
      {
        id: "vid-2-1",
        title: "Introduction to AI Design Tools",
        description: "Overview of Midjourney, DALL-E, and Canva for product design",
        duration: "11:30",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 1,
      },
      {
        id: "vid-2-2",
        title: "Midjourney Prompting Secrets",
        description: "Learn the exact prompts that generate winning designs",
        duration: "15:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 2,
      },
      {
        id: "vid-2-3",
        title: "Batch Creating 100 Designs in 1 Hour",
        description: "Workflow for rapidly creating multiple designs using AI",
        duration: "18:20",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 3,
      },
      {
        id: "vid-2-4",
        title: "Design Trends That Sell",
        description: "What designs are trending and why they convert",
        duration: "13:10",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 4,
      },
    ],
  },
  {
    id: "module-3",
    title: "SEO & Listing Optimization",
    description: "Get your products found with proven SEO strategies",
    icon: "🔍",
    videos: [
      {
        id: "vid-3-1",
        title: "Etsy SEO Fundamentals",
        description: "How Etsy's search algorithm works and what it rewards",
        duration: "14:00",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 1,
      },
      {
        id: "vid-3-2",
        title: "Keyword Research for Etsy",
        description: "Find high-volume, low-competition keywords using tools",
        duration: "12:30",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 2,
      },
      {
        id: "vid-3-3",
        title: "Writing Titles & Tags That Convert",
        description: "Craft titles and tags that rank and drive clicks",
        duration: "11:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 3,
      },
      {
        id: "vid-3-4",
        title: "Photography & Listing Images",
        description: "Create images that stop the scroll and drive conversions",
        duration: "13:20",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 4,
      },
    ],
  },
  {
    id: "module-4",
    title: "Niche Research & Strategy",
    description: "Find profitable niches and dominate your market",
    icon: "🎯",
    videos: [
      {
        id: "vid-4-1",
        title: "What Makes a Profitable Niche",
        description: "Criteria for evaluating niche potential",
        duration: "10:15",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 1,
      },
      {
        id: "vid-4-2",
        title: "Niche Research Tools & Techniques",
        description: "Use data to find underserved niches",
        duration: "16:40",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 2,
      },
      {
        id: "vid-4-3",
        title: "Competitor Analysis Deep Dive",
        description: "Study competitors without copying them",
        duration: "12:50",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 3,
      },
    ],
  },
  {
    id: "module-5",
    title: "Scaling & Growth",
    description: "Take your store from zero to $10k+ per month",
    icon: "📈",
    videos: [
      {
        id: "vid-5-1",
        title: "The Scaling Roadmap",
        description: "Step-by-step plan to grow from $0 to $10k/month",
        duration: "17:30",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 1,
      },
      {
        id: "vid-5-2",
        title: "Paid Ads for Etsy Sellers",
        description: "When and how to use Pinterest, Google, and Facebook ads",
        duration: "19:45",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 2,
      },
      {
        id: "vid-5-3",
        title: "Building an Email List",
        description: "Capture customers and build a direct marketing channel",
        duration: "11:20",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false,
        order: 3,
      },
    ],
  },
];

export default function Academy() {
  const { user, isLoading, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      setLocation("/login");
    }
  }, [user, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-12 w-12 rounded-full bg-primary/20 animate-pulse mx-auto"></div>
          <p className="text-muted-foreground">Loading your academy...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const totalVideos = COURSE_MODULES.reduce((sum, m) => sum + m.videos.length, 0);
  const completedVideos = COURSE_MODULES.reduce(
    (sum, m) => sum + m.videos.filter((v) => v.completed).length,
    0
  );

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      {/* Header */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-primary">
              <img src="/images/founders-studio-logo-v2.png" alt="Founders Studio Logo" className="h-10 w-auto" />
            </a>
            <div className="hidden md:block border-l border-border/40 pl-3">
              <h1 className="font-display font-bold text-lg">Founders Academy</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">{user.email}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                logout();
                setLocation("/");
              }}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 container py-8">
        {/* Progress Bar */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display font-bold">Your Learning Progress</h2>
            <span className="text-sm font-medium text-muted-foreground">
              {completedVideos} of {totalVideos} videos completed
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-500"
              style={{ width: `${(completedVideos / totalVideos) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Course Modules */}
          <div className={`lg:col-span-1 ${mobileMenuOpen ? "block" : "hidden lg:block"}`}>
            <div className="space-y-2 sticky top-24">
              <h3 className="font-display font-bold text-lg mb-4">Course Modules</h3>
              {COURSE_MODULES.map((module) => (
                <button
                  key={module.id}
                  onClick={() => {
                    setSelectedVideo(module.videos[0]);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-3 rounded-lg border border-border/40 hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xl">{module.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm leading-tight group-hover:text-primary transition-colors">
                        {module.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {module.videos.length} lessons
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content - Video Player & Playlist */}
          <div className="lg:col-span-3 space-y-8">
            {selectedVideo ? (
              <>
                {/* Video Player */}
                <div className="space-y-4">
                  <div className="relative w-full bg-black rounded-xl overflow-hidden aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={selectedVideo.videoUrl}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                        {selectedVideo.title}
                      </h2>
                      <p className="text-muted-foreground">{selectedVideo.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Duration: {selectedVideo.duration}</span>
                      <button className="text-primary hover:underline font-medium">
                        Mark as Complete
                      </button>
                    </div>
                  </div>
                </div>

                {/* Course Playlist */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-lg">Course Playlist</h3>
                  <Tabs defaultValue={COURSE_MODULES[0].id} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 h-auto p-1 bg-muted/30">
                      {COURSE_MODULES.map((module) => (
                        <TabsTrigger
                          key={module.id}
                          value={module.id}
                          className="text-xs md:text-sm whitespace-nowrap"
                        >
                          {module.icon} <span className="hidden sm:inline ml-1">{module.title}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {COURSE_MODULES.map((module) => (
                      <TabsContent key={module.id} value={module.id} className="space-y-2 mt-4">
                        {module.videos.map((video) => (
                          <button
                            key={video.id}
                            onClick={() => setSelectedVideo(video)}
                            className={`w-full text-left p-4 rounded-lg border transition-all ${
                              selectedVideo.id === video.id
                                ? "border-primary bg-primary/5"
                                : "border-border/40 hover:bg-muted/50"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1">
                                {video.completed ? (
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                ) : (
                                  <Play className="h-5 w-5 text-primary" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm leading-tight">{video.title}</p>
                                <p className="text-xs text-muted-foreground mt-1">{video.duration}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </>
            ) : (
              <Card className="border-border/60">
                <CardContent className="pt-12 text-center space-y-4">
                  <Play className="h-12 w-12 text-muted-foreground mx-auto opacity-50" />
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">Select a Video to Get Started</h3>
                    <p className="text-muted-foreground">
                      Choose a module from the left sidebar to begin your learning journey.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Founders Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
