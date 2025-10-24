import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { useRoute } from "wouter";

export default function Results() {
  const [, params] = useRoute("/results/:id");
  const id = params?.id ? parseInt(params.id) : 0;

  const { data: evaluation, isLoading } = trpc.evaluate.getById.useQuery({ id });

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!evaluation) {
    return <div className="min-h-screen flex items-center justify-center">Evaluation not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container max-w-6xl py-12">
        <h1 className="text-4xl font-bold mb-8">Evaluation Results</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Overall Score: {evaluation.overallScore}/100</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <div className="text-sm text-gray-600">Performance</div>
                <div className="text-2xl font-bold">{evaluation.performanceScore}/20</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Content</div>
                <div className="text-2xl font-bold">{evaluation.contentScore}/25</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Design</div>
                <div className="text-2xl font-bold">{evaluation.designScore}/25</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Conversion</div>
                <div className="text-2xl font-bold">{evaluation.conversionScore}/20</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Completeness</div>
                <div className="text-2xl font-bold">{evaluation.completenessScore}/10</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {evaluation.strengths.map((s: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {evaluation.issues.map((issue: any, i: number) => (
                  <li key={i} className="border-l-4 border-orange-500 pl-3">
                    <div className="font-semibold">{issue.issue}</div>
                    <div className="text-sm text-gray-600">{issue.recommendation}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

