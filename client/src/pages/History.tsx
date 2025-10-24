import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

export default function History() {
  const { isAuthenticated, loading } = useAuth();
  const { data: evaluations, isLoading } = trpc.evaluate.getMyEvaluations.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  if (loading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Please login to view your evaluation history</p>
            <Button asChild>
              <a href={getLoginUrl()}>Login</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container max-w-6xl py-12">
        <h1 className="text-4xl font-bold mb-8">Your Evaluation History</h1>

        {!evaluations || evaluations.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-600 mb-4">No evaluations yet</p>
              <Button asChild>
                <Link href="/evaluate">Evaluate Your First Page</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {evaluations.map((evaluation: any) => (
              <Card key={evaluation.id}>
                <CardContent className="py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-lg mb-1">{evaluation.url}</div>
                      <div className="text-sm text-gray-600">
                        {new Date(evaluation.createdAt).toLocaleDateString()} • {evaluation.pageType}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">{evaluation.overallScore}/100</div>
                      <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link href={`/results/${evaluation.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

