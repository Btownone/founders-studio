import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-display font-bold mb-8 text-foreground">Privacy Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to Founders Studio ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that you provide directly to us when you apply for our services, purchase a package, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Payment information (processed securely by our third-party payment processors)</li>
              <li>Business information related to your store setup needs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Process your transactions and manage your orders</li>
              <li>Communicate with you, including sending updates and support messages</li>
              <li>Improve our website and services based on your feedback</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions or comments about this policy, you may email us at support@foundersstudio.com.
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
