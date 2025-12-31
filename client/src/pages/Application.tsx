import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Application() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentSituation: '',
    budget: '',
    timeline: '',
    commitment: '',
    experience: '',
    goals: '',
    concerns: '',
    package: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In production, this will be the GHL Webhook URL
      // For now, we'll log it and simulate success if no URL is present
      const webhookUrl = import.meta.env.VITE_GOHIGHLEVEL_WEBHOOK;
      
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        currentSituation: formData.currentSituation,
        budget: formData.budget,
        timeline: formData.timeline,
        commitment: formData.commitment,
        experience: formData.experience,
        goals: formData.goals,
        concerns: formData.concerns,
        package: formData.package,
        message: formData.message,
        source: 'Founders Studio Application',
        timestamp: new Date().toISOString()
      };

      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error('Webhook submission failed');
        }
      } else {
        console.log('Simulating webhook submission:', payload);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setSubmitted(true);
      setTimeout(() => setLocation('/thank-you'), 2000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-[#2d5a5a] mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
            Application Submitted
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Thank you! We are reviewing your application and will be in touch shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
            Application
          </h1>
          <p className="text-lg text-foreground/80">
            Help us understand your situation so we can determine if Founders Studio is the right fit for you.
          </p>
        </div>

        <Card className="bg-card border-2 border-border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Current Situation</label>
              <select
                name="currentSituation"
                value={formData.currentSituation}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
              >
                <option value="">Select an option</option>
                <option value="no-store">I do not have an Etsy store yet</option>
                <option value="existing-store">I have an existing Etsy store</option>
                <option value="exploring">I am exploring options</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Budget</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
              >
                <option value="">Select an option</option>
                <option value="2500-3500">$2,500 - $3,500</option>
                <option value="5000">$5,000</option>
                <option value="flexible">Flexible, depends on value</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
              >
                <option value="">Select an option</option>
                <option value="asap">ASAP (within 30 days)</option>
                <option value="60-days">Within 60 days</option>
                <option value="flexible">Flexible timeline</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Commitment Level</label>
              <select
                name="commitment"
                value={formData.commitment}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
              >
                <option value="">Select an option</option>
                <option value="very-committed">Very committed - ready to go</option>
                <option value="somewhat-committed">Somewhat committed - exploring</option>
                <option value="just-looking">Just looking</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Experience Level</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
              >
                <option value="">Select an option</option>
                <option value="no-experience">No experience</option>
                <option value="some-experience">Some experience</option>
                <option value="experienced">Experienced seller</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">What are your goals?</label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                required
                rows={3}
                placeholder="What do you want to achieve with your Etsy store?"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">What are your biggest concerns?</label>
              <textarea
                name="concerns"
                value={formData.concerns}
                onChange={handleChange}
                required
                rows={3}
                placeholder="What worries you most about starting or scaling an Etsy store?"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Which package interests you?</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
              >
                <option value="">Select an option</option>
                <option value="complete">Complete ($3,500)</option>
                <option value="pro">Pro ($5,000)</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Anything else?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Optional message"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#2d5a5a]"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-[#2d5a5a] hover:bg-[#1f3f3f] text-white py-6 text-lg font-semibold"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </Card>

        <p className="text-center text-foreground/60 text-sm mt-8">
          We review applications within 24 hours and will reach out to schedule a call.
        </p>
      </div>
    </div>
  );
}
