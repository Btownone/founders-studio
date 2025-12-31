import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, ArrowRight, Zap, Rocket, TrendingUp, ShieldCheck, Laptop, Gift } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Home() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      setEmail('');
      setTimeout(() => setEmailSubmitted(false), 3000);
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Now Accepting Applications for January 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8 leading-tight text-primary-foreground">
              Stop Worrying About Tech. <br />
              <span className="text-primary">Start Selling.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Most women quit Etsy because the setup is overwhelming. We eliminated that. Your store is pre-built. Your system is pre-configured. You just start selling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-primary hover:bg-primary/90 text-white" onClick={scrollToPricing}>
                Apply to Launch Your Store <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto rounded-full border-2 hover:bg-accent/50" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                See How It Works
              </Button>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[120px]" />
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Women Quit (The Truth)</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We surveyed 100+ women who quit Etsy. The #1 reason wasn't lack of ideas or creativity. It was tech and setup overwhelm. They'd spend weeks trying to figure out: "Will my computer handle this?", "How do I make these tools work together?", "Why isn't this working?". By the time they figured it out, they'd already quit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Tech Overwhelm", desc: "No more fighting with integrations or confusing settings." },
              { icon: TrendingUp, title: "Analysis Paralysis", desc: "Skip the 'what do I sell?' phase. We give you proven winners." },
              { icon: ShieldCheck, title: "Setup Fatigue", desc: "Don't burn out building. Start at the finish line." }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-sm bg-card/50 hover:bg-card transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4">
                The Solution
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Everything Pre-Configured. <br />
                <span className="text-primary">Everything Works.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                You don't have to figure out software compatibility. You don't have to worry about your computer crashing. You don't have to debug tech issues. We handle all of that. Your store is pre-built. Your system is pre-configured. Your tools are pre-integrated. Everything works together seamlessly. You just focus on selling.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "A Pre-Built Etsy Store", desc: "Not a blank template. Ready to sell." },
                  { title: "A Pre-Configured System", desc: "Everything works together seamlessly." },
                  { title: "Training Videos", desc: "Clear next steps. No confusion." },
                  { title: "Team Support", desc: "We're here when you get stuck." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 scale-105 -z-10" />
              <img 
                src="/images/dashboard-mockup.png" 
                alt="Etsy Store Dashboard" 
                className="rounded-2xl shadow-2xl border border-border bg-card w-full object-cover aspect-[4/3]"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Choose Your Package</h2>
            <p className="text-xl text-muted-foreground">
              Two clear options. Everything you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Complete Package */}
            <Card className="relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-2xl font-bold mb-2">Complete Package</CardTitle>
                <div className="flex justify-center items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold">$3,500</span>
                </div>
                <CardDescription className="text-base">Perfect for starting strong.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Pre-built Etsy store",
                    "Pre-configured system",
                    "Training videos",
                    "6-month support",
                    "Monthly check-ins"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8 pb-10">
                <Button className="w-full text-lg py-6 rounded-xl" onClick={() => setLocation('/apply?plan=complete')}>
                  Apply for Complete
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Package */}
            <Card className="relative overflow-hidden border-2 border-primary shadow-2xl scale-105 z-10">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-2xl font-bold mb-2">Pro Package</CardTitle>
                <div className="flex justify-center items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold">$5,000</span>
                </div>
                <CardDescription className="text-base">For serious scaling.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Pre-built Etsy store",
                    "Pre-configured system",
                    "Training videos",
                    "12-month support",
                    "Priority support",
                    "Hardware included (Optional)"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-primary/10 p-1 rounded-full">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8 pb-10">
                <Button className="w-full text-lg py-6 rounded-xl bg-primary hover:bg-primary/90" onClick={() => setLocation('/apply?plan=pro')}>
                  Apply for Pro
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-white p-1 rounded">
                  <Rocket className="h-5 w-5" />
                </div>
                <span className="font-serif font-bold text-xl">Founders Studio</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Empowering women to build profitable e-commerce businesses through technology and automation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Program</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">How It Works</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Founders Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
