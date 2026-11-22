import { SITE } from '@/lib/site';

// /llms.txt — a plain-text summary of the site for AI search engines and assistants (https://llmstxt.org).
export const dynamic = 'force-static';

const pages: [string, string, string][] = [
  ['/agents/', 'AI agents', 'Conversational AI agents with a prompt studio, API and workflow tools, RAG knowledge bases, long-term memory, multimodal input and multi-agent orchestration.'],
  ['/flows/', 'Flows', 'A visual canvas for AI workflows that chains LLM, API, code and logic nodes, and publishes them as API endpoints, MCP servers or agent tools.'],
  ['/channels/', 'Channels', 'One agent on WhatsApp, a web and app chat SDK, and realtime voice in English and Indian languages.'],
  ['/use-cases/', 'Use cases', 'What agents do: answer questions, capture leads, schedule, update records, follow up and hand off to people.'],
  ['/security/', 'Security', 'Guardrails, per-turn tracing, cost tracking, encrypted secrets, role-based access and PII-masked logs.'],
  ['/about/', 'About', 'Why RaiokiuAI exists and what the company believes.'],
  ['/contact/', 'Early access', 'Request early access to the platform.'],
];

export function GET() {
  const body = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name} (also written ${SITE.alternateNames.join(', ')}) is an Indian startup building a platform for conversational AI agents that talk to customers on WhatsApp, web, app and voice, and act on business systems through visual workflows. ${SITE.tagline}`,
    '',
    '## Pages',
    '',
    ...pages.map(([path, name, desc]) => `- [${name}](${SITE.url}${path}): ${desc}`),
    '',
    '## Company',
    '',
    `- Website: ${SITE.url}/`,
    `- LinkedIn: ${SITE.social.linkedin}`,
    `- X (Twitter): ${SITE.social.x}`,
    `- Email: ${SITE.email}`,
    `- Status: early access`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
