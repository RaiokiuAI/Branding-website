import { Cta, Ic, Icon, JsonLd, PageHero, SectionHead } from '@/components/ui';
import { pageJsonLd, pageMeta } from '@/lib/site';

const path = '/security/';
const title = 'AI agent security, guardrails & observability | RaiokiuAI';
const description = 'Run AI agents in production with guardrails, per-turn tracing, cost tracking, encrypted secrets, role-based access and PII-masked logs.';

export const metadata = pageMeta({
  path, title, description,
  ogTitle: 'Guardrails, telemetry and tenancy, already in place',
  keywords: ['AI guardrails', 'LLM observability', 'AI agent security', 'PII redaction', 'LLM cost tracking', 'enterprise AI platform', 'secure chatbot'],
});

const blocks: { icon: React.ReactNode; title: string; kv: [string, string][] }[] = [
  { icon: Icon.shield, title: 'Guardrails', kv: [['Limits', 'caps on tool calls and iterations per turn'], ['Timeout', 'graceful fallback answer on slow turns'], ['Budget', 'run budget with per-node timeouts'], ['Load', 'back-pressure instead of meltdown']] },
  { icon: Icon.chart, title: 'Observability', kv: [['Traces', 'trace per turn, span per node'], ['Latency', 'per-message timing & tool calls'], ['Cost', 'tokens & spend per flow and agent'], ['APM', 'logs and metrics for every service']] },
  { icon: Icon.lock, title: 'Security & tenancy', kv: [['Teams', 'admin · write · read access control'], ['Secrets', 'encrypted, never shown to the LLM'], ['Keys', 'hashed team API keys'], ['Logs', 'PII masked']] },
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path, name: 'Security', title, description })} />
      <PageHero
        crumb="Security"
        title="Built for production,"
        accent="not the demo."
        lede="Guardrails, telemetry and tenancy are already in place, so the first real customer isn't your load test."
      />

      <section className="section" aria-label="Production capabilities" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="grid g3">
            {blocks.map((b, i) => (
              <article key={b.title} className={`card reveal${i ? ` d${i}` : ''}`}>
                <Ic>{b.icon}</Ic>
                <h2 style={{ fontSize: 24 }}>{b.title}</h2>
                <dl className="kv">{b.kv.map(([k, v]) => <div key={k} style={{ display: 'contents' }}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="quality-title" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <SectionHead eyebrow="Quality" id="quality-title" title="Know what every conversation did.">
            <p>Rule-based evaluation runs automatically on idle sessions, so quality is measured on every conversation, not a sample.</p>
          </SectionHead>
          <div className="grid g2">
            <article className="card reveal"><h3>Your rules, scored</h3><p>Define checks in plain language, such as &quot;Did the agent confirm the address?&quot;, and score every chat and call against them.</p></article>
            <article className="card reveal d1"><h3>PII redaction</h3><p>Phone, card and ID numbers are removed from transcripts and audio, with a beep or silence.</p></article>
            <article className="card reveal"><h3>Cost you can see</h3><p>Token and spend tracking per flow and per agent, through a single AI gateway key.</p></article>
            <article className="card reveal d1"><h3>Graceful under pressure</h3><p>Double-texts cancel stale runs, and slow turns still return a useful answer.</p></article>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
