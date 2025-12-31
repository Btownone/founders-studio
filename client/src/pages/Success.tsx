import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, PlayCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Success() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSessionId(params.get("session_id"));
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-primary">
            <img src="/images/founders-studio-logo-v2.png" alt="Founders Studio Logo" className="h-10 w-auto" />
            <span className="hidden sm:inline">Founders Studio</span>
          </div>
        </div>
      </nav>

      <main className="flex-1 container py-12 flex items-center justify-center">
        <Card className="max-w-2xl w-full border-primary/20 shadow-2xl shadow-primary/10">
          <CardHeader className="text-center space-y-6 pb-2">
            <div className="mx-auto h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Welcome to Founders Studio!
              </CardTitle>
              <p className="text-xl text-muted-foreground">
                Your payment was successful. You are now officially a founder in our community.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 pt-8">
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" />
                Step 1: Watch Your Onboarding Video
              </h3>
              <p className="text-muted-foreground mb-4">
                This 5-minute video explains exactly what happens next, how to access your portal, and what we need from you to start building your store.
              </p>
              <Button size="lg" className="w-full sm:w-auto gap-2 text-lg h-12" onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}>
                Watch Onboarding Video <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">What happens next?</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start text-muted-foreground">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <span>Check your email for your login credentials and receipt.</span>
                </li>
                <li className="flex gap-3 items-start text-muted-foreground">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <span>Complete the "Store Intake Form" linked in your welcome email.</span>
                </li>
                <li className="flex gap-3 items-start text-muted-foreground">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <span>Join our private Discord community to meet other builders.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex justify-center">
              <Link href="/">
                <Button variant="ghost">Return to Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Founders Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
