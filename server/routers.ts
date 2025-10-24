import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { evaluatePage } from "./evaluator";
import { createEvaluation, getEvaluationsByUrl, getUserEvaluations, getEvaluationById } from "./db";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  evaluate: router({
    // Public endpoint for AI agents to evaluate pages
    evaluatePage: publicProcedure
      .input(
        z.object({
          url: z.string().url(),
          pageType: z.enum(["homepage", "airbnb", "landing"]),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Fetch the page content (simplified - in production use Puppeteer)
        const response = await fetch(input.url);
        const htmlContent = await response.text();

        // Evaluate the page
        const result = await evaluatePage({
          url: input.url,
          pageType: input.pageType,
          htmlContent,
        });

        // Save to database
        await createEvaluation({
          userId: ctx.user?.id,
          url: input.url,
          pageType: input.pageType,
          overallScore: result.overallScore,
          performanceScore: result.categoryScores.performance,
          contentScore: result.categoryScores.content,
          designScore: result.categoryScores.design,
          conversionScore: result.categoryScores.conversion,
          completenessScore: result.categoryScores.completeness,
          issues: JSON.stringify(result.issues),
          strengths: JSON.stringify(result.strengths),
          recommendations: JSON.stringify(result.recommendations),
        });

        return result;
      }),

    // Get evaluation history for a URL
    getByUrl: publicProcedure
      .input(z.object({ url: z.string().url() }))
      .query(async ({ input }) => {
        const evals = await getEvaluationsByUrl(input.url);
        return evals.map(e => ({
          ...e,
          issues: JSON.parse(e.issues),
          strengths: JSON.parse(e.strengths),
          recommendations: JSON.parse(e.recommendations),
        }));
      }),

    // Get user's evaluation history
    getMyEvaluations: protectedProcedure.query(async ({ ctx }) => {
      const evals = await getUserEvaluations(ctx.user.id);
      return evals.map(e => ({
        ...e,
        issues: JSON.parse(e.issues),
        strengths: JSON.parse(e.strengths),
        recommendations: JSON.parse(e.recommendations),
      }));
    }),

    // Get single evaluation by ID
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const evaluation = await getEvaluationById(input.id);
        if (!evaluation) return null;
        return {
          ...evaluation,
          issues: JSON.parse(evaluation.issues),
          strengths: JSON.parse(evaluation.strengths),
          recommendations: JSON.parse(evaluation.recommendations),
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
