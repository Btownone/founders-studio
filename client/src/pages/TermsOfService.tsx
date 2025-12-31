import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-primary">
            <img src="/images/founders-studio-logo-v2.png" alt="Founders Studio Logo" className="h-10 w-auto" />
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="container py-12 max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8 text-foreground">Terms of Service</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Services Provided</h2>
            <p className="text-muted-foreground mb-4">
              Founders Studio provides educational resources, mentorship, and "Done-For-You" store setup services for aspiring e-commerce entrepreneurs. We are an independent service provider and are not affiliated with, endorsed by, or connected to Etsy, Inc.
            </p>
            <p className="text-muted-foreground">
              We guarantee the delivery of the agreed-upon assets (store setup, listings, training materials). We do not guarantee specific financial results, sales numbers, or profits, as these depend on market conditions and your own efforts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Intellectual Property</h2>
            <p className="text-muted-foreground">
              Upon full payment, you are granted full ownership of the store assets created specifically for you. However, the educational materials, SOPs, and training videos provided remain the intellectual property of Founders Studio and are for your personal use only. You may not resell, distribute, or share these materials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Refund Policy</h2>
            <p className="text-muted-foreground">
              Due to the digital nature of our products and the manual labor involved in our setup services, all sales are final. We do not offer refunds once the work has commenced. Please review all deliverables and ask questions before purchasing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall Founders Studio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>
        </div>
      </main>

      <footer className="py-12 bg-background border-t border-border/40">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-display font-bold text-lg text-primary">
            <img src="/images/founders-studio-logo-v2.png" alt="Founders Studio Logo" className="h-8 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Founders Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
