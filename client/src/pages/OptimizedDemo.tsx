import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  Star,
  ArrowRight,
  Shield,
  Users,
  Award
} from "lucide-react";

export default function OptimizedDemo() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold">AITechRank</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <Button asChild size="sm">
              <Link href="/evaluate">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Optimized */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Clear Value Prop */}
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
                <Sparkles className="h-3 w-3 mr-1" />
                AI-Powered Optimization
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Perfect Your Web Pages in{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Minutes, Not Days
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Get AI-powered insights that tell you exactly what to fix. Built for AI agents to iteratively optimize homepages, landing pages, and Airbnb listings until they're perfect.
              </p>

              {/* Single Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/evaluate">
                    Optimize Your Page Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <a href="#demo">See Example Results</a>
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Results in 60 seconds</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Dashboard Preview */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/dashboard-preview.jpg" 
                  alt="AI Optimization Dashboard showing scores and analytics"
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Score: 92/100
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-xs font-bold">M</div>
                    <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs font-bold">C</div>
                    <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center text-xs font-bold">G</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">1,247+</div>
                    <div className="text-gray-600">Pages optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white border-y py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600">92%</div>
              <div className="text-sm text-gray-600">Average score improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">60s</div>
              <div className="text-sm text-gray-600">Average evaluation time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">1,247+</div>
              <div className="text-sm text-gray-600">Pages optimized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">4.9/5</div>
              <div className="text-sm text-gray-600">User satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Optimize</h2>
            <p className="text-xl text-gray-600">Comprehensive evaluation across all critical dimensions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-purple-600 mb-3" />
                <CardTitle>100-Point Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailed evaluation across performance, content, design, conversion, and completeness
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-purple-600 mb-3" />
                <CardTitle>AI Agent Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built for AI agents like Manus and Claude to iterate until perfect
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-purple-600 mb-3" />
                <CardTitle>Track Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  See your scores improve with each iteration and track optimization history
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-purple-600 mb-3" />
                <CardTitle>Actionable Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get specific, prioritized recommendations with clear implementation steps
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple 3-Step Process</h2>
            <p className="text-xl text-gray-600">From evaluation to optimization in minutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Submit Your URL</h3>
              <p className="text-gray-600">
                Enter your homepage, landing page, or Airbnb listing URL. Select the page type for tailored evaluation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Get Instant Analysis</h3>
              <p className="text-gray-600">
                Our AI evaluates your page across 100 criteria in 60 seconds. Receive detailed scores and specific issues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Iterate to Perfection</h3>
              <p className="text-gray-600">
                Implement recommendations and re-submit. Keep improving until you reach 85+ score for excellence.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/evaluate">Start Your Free Evaluation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <CardTitle>Secure & Private</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your data is encrypted and never shared. We respect your privacy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <CardTitle>Trusted by AI Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built specifically for AI agents to achieve optimization goals efficiently.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <CardTitle>Expert-Backed Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Evaluation criteria based on industry best practices and conversion research.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Perfect Your Pages?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join 1,247+ pages that have been optimized with AITechRank. Start your free evaluation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/evaluate">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/history">View Sample Results</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">No credit card required • Results in 60 seconds</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <Sparkles className="h-5 w-5" />
                <span className="font-bold">AITechRank</span>
              </div>
              <p className="text-sm">AI-powered page optimization for perfect web experiences.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/evaluate">Evaluate Page</Link></li>
                <li><Link href="/history">History</Link></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#api">API</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#privacy">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 AITechRank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

