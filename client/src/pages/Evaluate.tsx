import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function Evaluate() {
  const [, setLocation] = useLocation();
  const [url, setUrl] = useState("");
  const [pageType, setPageType] = useState<"homepage" | "airbnb" | "landing">("homepage");

  const evaluateMutation = trpc.evaluate.evaluatePage.useMutation({
    onSuccess: (data) => {
      toast.success(`Evaluation complete! Score: ${data.overallScore}/100`);
      // Navigate to results - we'll need to get the ID from the database
      // For now, just show success
    },
    onError: (error) => {
      toast.error(`Evaluation failed: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter a URL");
      return;
    }
    evaluateMutation.mutate({ url, pageType });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container max-w-4xl py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Page Optimizer
          </h1>
          <p className="text-xl text-gray-600">
            Get AI-powered insights to optimize your web pages
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Evaluate Your Page</CardTitle>
            <CardDescription>
              Enter a URL and let our AI analyze it for performance, content, design, and conversion optimization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="url">Page URL</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pageType">Page Type</Label>
                <Select value={pageType} onValueChange={(v) => setPageType(v as typeof pageType)}>
                  <SelectTrigger id="pageType">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="homepage">Homepage</SelectItem>
                    <SelectItem value="landing">Landing Page</SelectItem>
                    <SelectItem value="airbnb">Airbnb Listing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={evaluateMutation.isPending}
              >
                {evaluateMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Evaluate Page"
                )}
              </Button>
            </form>

            {evaluateMutation.data && (
              <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200">
                <h3 className="text-2xl font-bold mb-4">Evaluation Complete!</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  {evaluateMutation.data.overallScore}/100
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600">Performance</div>
                    <div className="text-xl font-semibold">{evaluateMutation.data.categoryScores.performance}/20</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Content</div>
                    <div className="text-xl font-semibold">{evaluateMutation.data.categoryScores.content}/25</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Design</div>
                    <div className="text-xl font-semibold">{evaluateMutation.data.categoryScores.design}/25</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Conversion</div>
                    <div className="text-xl font-semibold">{evaluateMutation.data.categoryScores.conversion}/20</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Strengths</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {evaluateMutation.data.strengths.map((s, i) => (
                        <li key={i} className="text-sm">{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Top Issues</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {evaluateMutation.data.issues.slice(0, 5).map((issue, i) => (
                        <li key={i} className="text-sm">
                          <span className="font-medium">{issue.issue}</span> - {issue.recommendation}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Recommendations</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {evaluateMutation.data.recommendations.slice(0, 5).map((rec, i) => (
                        <li key={i} className="text-sm">{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

