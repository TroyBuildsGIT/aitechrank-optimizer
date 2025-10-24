import { invokeLLM, Message, TextContent, ImageContent } from "./_core/llm";

export interface EvaluationResult {
  overallScore: number;
  categoryScores: {
    performance: number;
    content: number;
    design: number;
    conversion: number;
    completeness: number;
  };
  issues: Array<{
    category: string;
    severity: "high" | "medium" | "low";
    issue: string;
    recommendation: string;
  }>;
  strengths: string[];
  recommendations: string[];
}

export interface EvaluationInput {
  url: string;
  pageType: "homepage" | "airbnb" | "landing";
  htmlContent?: string;
  screenshotUrl?: string;
}

const EVALUATION_PROMPT = `You are an expert web page evaluator. Analyze the provided webpage and score it based on these criteria:

## Scoring Categories (Total: 100 points)

### 1. Performance & Technical (20 points)
- Page structure and HTML quality (8 points)
- Mobile responsiveness indicators (6 points)
- SEO basics: title, meta description, headings, alt text (6 points)

### 2. Content Quality (25 points)
- Clarity of value proposition (10 points)
- Content readability and structure (8 points)
- Compelling copy that addresses benefits (7 points)

### 3. Design & User Experience (25 points)
- Visual hierarchy and focal points (8 points)
- Navigation and usability (9 points)
- Visual appeal and professionalism (8 points)

### 4. Conversion Optimization (20 points)
- Call-to-action clarity and prominence (10 points)
- Trust signals (testimonials, reviews, badges) (6 points)
- Friction reduction (4 points)

### 5. Content Completeness (10 points)
- Essential information present (product/service, pricing, contact, about, FAQ)

## Your Task
Analyze the webpage and provide:
1. Scores for each category
2. Overall score (sum of all categories)
3. Top 3-5 strengths
4. Top 5-10 issues with severity levels
5. Specific, actionable recommendations

Be strict but fair. A score of 85+ should indicate truly excellent work.`;

export async function evaluatePage(
  input: EvaluationInput
): Promise<EvaluationResult> {
  const { url, pageType, htmlContent, screenshotUrl } = input;

  // Prepare the evaluation request with multimodal content
  const messages: Message[] = [
    { role: "system", content: EVALUATION_PROMPT },
  ];

  // Build user message with available data
  const userContent: Array<TextContent | ImageContent> = [
    {
      type: "text",
      text: `Evaluate this ${pageType} page: ${url}\n\n${htmlContent ? `HTML Content:\n${htmlContent.slice(0, 15000)}` : ""}`,
    },
  ];

  if (screenshotUrl) {
    userContent.push({
      type: "image_url",
      image_url: { url: screenshotUrl },
    });
  }

  messages.push({
    role: "user",
    content: userContent,
  });

  // Call LLM with structured output
  const response = await invokeLLM({
    messages,
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "page_evaluation",
        strict: true,
        schema: {
          type: "object",
          properties: {
            overallScore: { type: "integer", description: "Total score 0-100" },
            categoryScores: {
              type: "object",
              properties: {
                performance: { type: "integer", description: "Performance score 0-20" },
                content: { type: "integer", description: "Content score 0-25" },
                design: { type: "integer", description: "Design score 0-25" },
                conversion: { type: "integer", description: "Conversion score 0-20" },
                completeness: { type: "integer", description: "Completeness score 0-10" },
              },
              required: ["performance", "content", "design", "conversion", "completeness"],
              additionalProperties: false,
            },
            issues: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  category: { type: "string", description: "Category name" },
                  severity: { type: "string", enum: ["high", "medium", "low"] },
                  issue: { type: "string", description: "Description of the issue" },
                  recommendation: { type: "string", description: "How to fix it" },
                },
                required: ["category", "severity", "issue", "recommendation"],
                additionalProperties: false,
              },
            },
            strengths: {
              type: "array",
              items: { type: "string" },
              description: "List of strengths found",
            },
            recommendations: {
              type: "array",
              items: { type: "string" },
              description: "Prioritized list of recommendations",
            },
          },
          required: ["overallScore", "categoryScores", "issues", "strengths", "recommendations"],
          additionalProperties: false,
        },
      },
    },
  });

  const content = response.choices[0].message.content;
  const contentStr = typeof content === 'string' ? content : JSON.stringify(content);
  const result = JSON.parse(contentStr || "{}");
  return result as EvaluationResult;
}

