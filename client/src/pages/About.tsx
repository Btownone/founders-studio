import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, TrendingUp, Users, Zap, Globe } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-primary">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/founders-studio-logo-v2.png" alt="Founders Studio Logo" className="h-10 w-auto" />
              <span className="hidden sm:inline">Founders Studio</span>
            </Link>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/about" className="text-foreground transition-colors">About Us</Link>
            <a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </div>
          <Link href="/#pricing">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Apply Now
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-secondary/5 border-b border-border/40">
        <div className="container max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Building Assets, <br/>
            <span className="text-primary">Not Just Side Hustles.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Founders Studio exists to help serious entrepreneurs build, own, and scale profitable Etsy print-on-demand businesses through proven systems and expert support.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold">The Founder Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founders Studio was born out of a simple observation: most people starting online businesses fail not because they lack ambition, but because they lack systems.
              </p>
              <p>
                After years of navigating the complexities of e-commerce, our founder realized that the "hustle harder" mentality was a recipe for burnout. The real path to freedom wasn't more work—it was better leverage.
              </p>
              <p>
                We built Founders Studio to provide that leverage. By combining done-for-you setup with high-level education and proprietary AI tools, we help our members skip the technical overwhelm and focus on what matters: building a long-term digital asset.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-muted aspect-square">
             <img 
              src="/images/hero-workshop.png" 
              alt="Founders Studio Workspace" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-secondary/5 border-y border-border/40">
        <div className="container max-w-5xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-display font-bold">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are guided by a commitment to practical execution, transparency, and the long-term success of our members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/60 bg-background">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-display">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                To empower serious individuals to build owned digital assets, master real-world business skills, and achieve financial leverage through sustainable e-commerce systems and expert support.
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Ownership", desc: "We believe in building assets you own, not just platforms you rent.", icon: Shield },
                { title: "Transparency", desc: "No hype, no shortcuts. We share the real numbers and the real work.", icon: Globe },
                { title: "Practical Execution", desc: "Systems that work in the real world, not just in theory.", icon: Zap },
                { title: "Long-Term Growth", desc: "We focus on sustainable business building, not quick wins.", icon: TrendingUp },
              ].map((value, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-border/40 bg-background/50">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm">{value.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-display font-bold">A Global, Specialized Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founders Studio is powered by a cross-functional team of specialists dedicated to your store's success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: "E-Commerce Strategy", desc: "Specialists in niche selection and market analysis." },
              { role: "Technical Operations", desc: "Experts in store setup, API integrations, and fulfillment." },
              { role: "SEO & Optimization", desc: "Dedicated to listing performance and organic traffic growth." },
              { role: "Member Support", desc: "Ensuring you have the guidance and resources to scale." },
            ].map((member, i) => (
              <Card key={i} className="border-border/60 text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg font-display">{member.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <p className="text-muted-foreground italic">
              "This is a real company with real operators, focused on your long-term success."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Ready to Build Your Asset?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We review applications to ensure fit and alignment before onboarding. Applying does not mean you are purchasing immediately.
          </p>
          <Link href="/#pricing">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-14 px-8 text-lg shadow-xl">
              Apply to Join Founders Studio
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border/40">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-display font-bold text-lg text-primary">
            <img src="/images/founders-studio-logo-v2.png" alt="Founders Studio Logo" className="h-8 w-auto" />
            <span className="hidden sm:inline">Founders Studio</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Founders Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
