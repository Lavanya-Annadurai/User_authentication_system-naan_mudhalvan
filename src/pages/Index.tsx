import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Zap, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-security.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-glass rounded-full border border-primary/20">
              <Shield className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium">Secure Authentication Platform</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Secure Access
              </span>
              <br />
              <span className="text-foreground">Made Simple</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience next-generation authentication with enterprise-grade security, 
              seamless user experience, and modern design.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-primary hover-glow transition-spring text-lg px-8 py-4 h-auto"
                asChild
              >
                <a href="/signup" className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 bg-background/10 backdrop-blur text-lg px-8 py-4 h-auto transition-smooth hover:bg-background/20"
                asChild
              >
                <a href="/login" className="flex items-center">
                  <Lock className="mr-2 h-5 w-5" />
                  Sign In
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">SecureAuth</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with modern security standards and user experience in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="bg-gradient-glass shadow-elegant border-border/50 transition-smooth hover:shadow-glow group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-spring">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Enterprise Security</CardTitle>
                <CardDescription className="text-base">
                  Bank-level encryption and security protocols to protect your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    256-bit AES encryption
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Two-factor authentication
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Advanced threat detection
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-gradient-glass shadow-elegant border-border/50 transition-smooth hover:shadow-glow group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-spring">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Lightning Fast</CardTitle>
                <CardDescription className="text-base">
                  Optimized performance for instant authentication and seamless experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Sub-second login times
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Global CDN distribution
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    99.9% uptime guarantee
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-gradient-glass shadow-elegant border-border/50 transition-smooth hover:shadow-glow group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-spring">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Privacy First</CardTitle>
                <CardDescription className="text-base">
                  Your data remains private with zero-knowledge architecture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Zero data collection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    GDPR compliant
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Local data processing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect to Supabase and start building secure authentication in minutes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover-glow transition-spring text-lg px-8 py-4 h-auto"
                asChild
              >
                <a href="/signup" className="flex items-center">
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
