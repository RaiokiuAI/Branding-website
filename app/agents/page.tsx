import Link from 'next/link';
import { Arrow, Cta, Ic, Icon, JsonLd, PageHero, SectionHead } from '@/components/ui';
import { pageJsonLd, pageMeta } from '@/lib/site';

const path = '/agents/';
const title = 'Conversational AI agents with memory, tools & guardrails | RaiokiuAI';
const description = 'Build conversational AI agents with a prompt studio, API and workflow tools, RAG knowledge bases, long-term memory, multimodal input and a multi-agent orchestrator.';

export const metadata = pageMeta({
  path, title, description,
  ogTitle: 'AI agents — a complete agent stack, without the plumbing',
  keywords: ['AI agent builder', 'conversational AI platform', 'LLM agents', 'RAG chatbot', 'multi-agent orchestration', 'prompt studio', 'AI agent tools', 'WhatsApp AI agent'],
});

const features: { icon: React.ReactNode; title: string; text?: string; list?: string[] }[] = [
  { icon: Icon.pen, title: 'Prompt studio', text: 'Generate a system prompt from a use case, refine it against templates, and apply it in one click. Dynamic variables personalise every turn.' },
  { icon: Icon.wrench, title: 'Tools from anything', list: ['API tools from a pasted cURL', 'Flows attached as tools', 'Knowledge bases (RAG)', 'CRM events & structured replies'] },
  { icon: Icon.lock, title: 'Secrets stay secret', text: 'Parameters come from the LLM, session variables, encrypted team secrets or system values. The model never sees a key.' },
  { icon: Icon.chat, title: 'Memory that lasts', text: 'Persistent checkpoints keep a conversation going for weeks. Rolling summaries and history compaction keep long WhatsApp threads fast.' },
  { icon: Icon.image, title: 'Multimodal by default', text: 'Customers can send photos, voice notes and documents. Audio is transcribed and everything goes to vision-capable models.' },
  { icon: Icon.bolt, title: 'Engagement on autopilot', list: ['LLM-timed nudges for idle chats', 'Follow-up suggestion chips', 'CRM messages injected into live chats', 'One-tap "call me back" requests'] },
  { icon: Icon.lines, title: 'Structured responses', text: 'JSON-Schema output, carousels, CTAs and quick replies, so agents send UI instead of walls of text.' },
  { icon: Icon.clock, title: 'Never leaves you hanging', text: 'If a customer double-texts, the newer message replaces the in-flight run. A slow turn still gets a graceful answer from partial context.' },
  { icon: Icon.lang, title: 'Multilingual from day one', text: 'Set the languages per agent. Customers can switch between English and Indian languages mid-conversation.' },
];

function OrchestratorDiagram() {
  const n = (x: number, y: number, t: string, sub?: string, cls = 'node') => (
    <g className={cls}>
      <rect x={x} y={y} width="120" height="40" rx="12" />
      <text x={x + 60} y={sub ? y + 18 : y + 24} textAnchor="middle">{t}</text>
      {sub && <text x={x + 60} y={y + 32} textAnchor="middle" className="sub">{sub}</text>}
    </g>
  );
  return (
    <svg viewBox="0 0 460 330" role="img" aria-label="Router sends queries to a planner, which fans out to three specialist agents; their results merge in synthesis">
      <g className="thread">
        <path d="M230 62 V100" /><path d="M230 140 C230 170, 80 160, 80 196" /><path d="M230 140 V196" /><path d="M230 140 C230 170, 380 160, 380 196" />
        <path d="M80 236 C80 270, 230 256, 230 276" /><path d="M230 236 V276" /><path d="M380 236 C380 270, 230 256, 230 276" />
      </g>
      <path className="thread-live" d="M230 140 C230 170, 80 160, 80 196" />
      <path className="thread-live" d="M380 236 C380 270, 230 256, 230 276" style={{ animationDelay: '-1s' }} />
      {n(170, 22, 'Router', undefined, 'node agent')}
      {n(170, 100, 'Planner')}
      {n(20, 196, 'Agent A', 'tools · memory')}
      {n(170, 196, 'Agent B', 'tools · memory')}
      {n(320, 196, 'Agent C', 'tools · memory')}
      {n(170, 276, 'Synthesis', undefined, 'node accent')}
    </svg>
  );
}

export default function AgentsPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path, name: 'AI agents', title, description })} />
      <PageHero
        crumb="Agents"
        title="A complete agent stack,"
        accent="without the plumbing."
        lede="We take care of memory, tools, concurrency, multimodal input and safety limits, so your team can focus on the customer journey."
      >
        <Link className="btn btn-primary" href="/contact/">Build your first agent <Arrow /></Link>
        <a className="btn btn-ghost" href="#orchestrator">Multi-agent orchestrator</a>
      </PageHero>

      <section className="section" aria-labelledby="cap-title" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <SectionHead eyebrow="Capabilities" id="cap-title" title="Everything an agent needs to do real work." />
          <div className="grid g3">
            {features.map((f, i) => (
              <article key={f.title} className={`card reveal${i % 3 ? ` d${i % 3}` : ''}`}>
                <Ic>{f.icon}</Ic>
                <h3>{f.title}</h3>
                {f.text && <p>{f.text}</p>}
                {f.list && <ul>{f.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="orchestrator" aria-labelledby="orch-title" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <SectionHead eyebrow="Multi-agent orchestrator" id="orch-title" title="One front door. Many specialists.">
            <p>The orchestrator puts a single router in front of your agents. It sends each query to the right specialist, or plans a multi-agent answer.</p>
            <ul className="olist">
              <li><b>Router</b><span>Classifies each query as greeting, single agent or complex, and routes by business unit.</span></li>
              <li><b>Planner</b><span>Builds a parallel or sequential plan across agents.</span></li>
              <li><b>Agents</b><span>Each step runs on an agent with its own tools and memory.</span></li>
              <li><b>Synthesis</b><span>Merges results into one coherent reply.</span></li>
            </ul>
          </SectionHead>
          <div className="diagram reveal d1">
            <div className="diagram-cap"><span>Orchestrator</span><span>route → plan → synthesise</span></div>
            <OrchestratorDiagram />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
