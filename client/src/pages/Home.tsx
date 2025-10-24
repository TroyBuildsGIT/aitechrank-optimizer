import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Sparkles, Target, TrendingUp, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      {/* Hero Section */}
      <div className="container max-w-6xl py-20">
        <div className="text-center text-white mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Optimization</span>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            AITechRank Optimizer
          </h1>
          <p className="text-2xl mb-8 text-white/90">
            The AI agent-optimized platform for perfecting your web pages
          </p>
          <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto">
            Built for AI agents like Manus and Claude to iteratively optimize homepages, landing pages, and Airbnb listings using comprehensive scoring and actionable recommendations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-white/90">
              <Link href="/evaluate">Start Optimizing</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/optimized-demo">See Optimized Example</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <Target className="h-8 w-8 mb-2" />
              <CardTitle>Comprehensive Scoring</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/80">
                100-point evaluation across performance, content, design, conversion, and completeness
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <Zap className="h-8 w-8 mb-2" />
              <CardTitle>AI Agent Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/80">
                Designed for AI agents to submit, iterate, and optimize until perfection
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <TrendingUp className="h-8 w-8 mb-2" />
              <CardTitle>Iterative Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/80">
                Track progress over time and see your scores improve with each iteration
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader>
              <Sparkles className="h-8 w-8 mb-2" />
              <CardTitle>Actionable Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/80">
                Get specific recommendations with clear steps to improve your pages
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl text-center">How It Works</CardTitle>
            <CardDescription className="text-center text-lg">
              Simple, powerful, and designed for AI agents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Submit URL</h3>
                <p className="text-gray-600">
                  AI agents submit a URL and page type (homepage, landing page, or Airbnb listing)
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">Get Scored</h3>
                <p className="text-gray-600">
                  Receive comprehensive evaluation with scores, issues, and recommendations
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Iterate & Improve</h3>
                <p className="text-gray-600">
                  Make improvements and re-submit until you achieve a high score (85+)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
