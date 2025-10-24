# AITechRank Optimizer

> **AI agent-optimized platform for evaluating and improving web pages**

Transform your homepages, landing pages, and Airbnb listings from good to excellent with AI-powered evaluation and actionable recommendations.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TroyBuildsGIT/aitechrank-optimizer)

## 🎯 Overview

AITechRank Optimizer is a comprehensive evaluation platform designed specifically for AI agents like Manus and Claude to iteratively optimize web pages. Submit a URL, receive a detailed 100-point evaluation, implement recommendations, and re-submit until you achieve excellence (85+ score).

### Key Features

- **🎯 Comprehensive Scoring** - 100-point evaluation across 5 categories
- **🤖 AI Agent Ready** - Designed for programmatic use by AI agents
- **📊 Detailed Analysis** - Get specific issues and actionable recommendations
- **🔄 Iterative Improvement** - Track progress over multiple evaluations
- **⚡ Fast Results** - Complete evaluation in ~60 seconds

## 🚀 Live Demo

- **Homepage**: [View optimized example](https://aitechrank-optimizer.vercel.app)
- **Evaluation Tool**: [Start optimizing](https://aitechrank-optimizer.vercel.app/evaluate)
- **Before/After Demo**: [See transformation](https://aitechrank-optimizer.vercel.app/optimized-demo)

## 📊 Evaluation Criteria

### Performance & Technical (20 points)
- Page load speed
- Mobile responsiveness
- Accessibility compliance
- Technical SEO

### Content Quality (25 points)
- Clarity and readability
- Value proposition strength
- Benefit-focused copy
- Grammar and professionalism

### Design & UX (25 points)
- Visual hierarchy
- Color contrast
- Whitespace usage
- Navigation clarity

### Conversion Optimization (20 points)
- CTA effectiveness
- Trust signals
- Friction reduction
- Social proof

### Content Completeness (10 points)
- Essential sections present
- Contact information
- Legal compliance
- Complete information

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite + Tailwind CSS 4
- **Backend**: Express 4 + tRPC 11
- **Database**: MySQL (via Drizzle ORM)
- **AI**: OpenAI GPT-4 for evaluations
- **Auth**: Manus OAuth
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites

- Node.js 22+
- pnpm 9+
- MySQL database

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/TroyBuildsGIT/aitechrank-optimizer.git
cd aitechrank-optimizer
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=mysql://user:password@host:port/database

# JWT Secret
JWT_SECRET=your-secret-key-here

# OAuth (Manus)
VITE_APP_ID=your-app-id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# Built-in APIs
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-api-key

# App Configuration
VITE_APP_TITLE=AITechRank Optimizer
VITE_APP_LOGO=https://your-logo-url.com/logo.png

# Owner Info
OWNER_OPEN_ID=your-open-id
OWNER_NAME=Your Name
```

4. **Push database schema**
```bash
pnpm db:push
```

5. **Start development server**
```bash
pnpm dev
```

The app will be available at `http://localhost:3000`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git push origin master
```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Configure Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env`
   - Redeploy

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TroyBuildsGIT/aitechrank-optimizer)

## 🤖 API Usage for AI Agents

### Evaluate a URL

```typescript
// Using tRPC client
const result = await trpc.evaluation.evaluate.mutate({
  url: "https://example.com",
  pageType: "homepage"
});

console.log(result.overallScore); // 85
console.log(result.issues); // Array of issues
console.log(result.recommendations); // Array of recommendations
```

### Get Evaluation History

```typescript
const history = await trpc.evaluation.getHistory.query();
```

### Get Specific Evaluation

```typescript
const evaluation = await trpc.evaluation.getById.query({ id: 123 });
```

## 📖 Usage Guide

### For Humans

1. Visit the homepage
2. Click "Start Optimizing"
3. Enter your URL and select page type
4. Wait ~60 seconds for evaluation
5. Review scores, issues, and recommendations
6. Implement fixes
7. Re-submit to track improvement

### For AI Agents

1. Submit URL via API endpoint
2. Receive structured JSON with scores
3. Parse recommendations
4. Implement fixes programmatically
5. Re-submit and iterate until score ≥ 85

## 🎨 Design Philosophy

- **AI-First**: Designed for AI agents to use programmatically
- **Actionable**: Every issue includes specific fix recommendations
- **Iterative**: Built for continuous improvement cycles
- **Transparent**: Clear scoring criteria and methodology
- **Fast**: Complete evaluations in ~60 seconds

## 📈 Scoring Methodology

Each evaluation analyzes:

1. **Technical Performance** - Load speed, mobile responsiveness, accessibility
2. **Content Analysis** - Clarity, value proposition, benefit focus
3. **Design Review** - Visual hierarchy, contrast, whitespace
4. **Conversion Elements** - CTAs, trust signals, friction points
5. **Completeness Check** - Essential sections and information

Scores are weighted by importance and combined into a 100-point scale:
- **90-100**: Excellent - Ready to convert
- **85-89**: Very Good - Minor improvements needed
- **70-84**: Good - Several improvements recommended
- **60-69**: Fair - Significant improvements needed
- **Below 60**: Poor - Major overhaul required

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Built with [Manus AI](https://manus.im)
- Powered by OpenAI GPT-4
- UI components from [shadcn/ui](https://ui.shadcn.com)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/TroyBuildsGIT/aitechrank-optimizer/issues)
- **Website**: [aitechrank.com](https://aitechrank.com)

---

**Made with ❤️ for AI agents and humans alike**

