import Link from 'next/link';
import { Arrow, Cta, JsonLd, Prism, SectionHead } from '@/components/ui';
import { SITE, pageJsonLd, pageMeta } from '@/lib/site';

const title = 'raiokiuai — AI agents for WhatsApp, web & voice, wired to real workflows';
const description = SITE.description;

export const metadata = pageMeta({ path: '/', title, ogTitle: `raiokiuai — ${SITE.tagline}`, description });

const faqs = [
  { q: 'What is raiokiuai?', a: 'raiokiuai is a platform for building conversational AI agents and connecting them to real business actions with visual workflows. One agent can run on WhatsApp, web and app chat, and voice.' },
  { q: 'Do I need to write backend code?', a: 'No. Flows let you connect LLMs, APIs, data and logic on a visual canvas, then attach them to an agent as tools. Developers can still drop into Python or JavaScript code nodes when they need to.' },
  { q: 'Which languages do agents support?', a: 'Agents chat and speak in English and multiple Indian languages, including Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi and Gujarati.' },
  { q: 'Which AI models can I use?', a: 'An AI gateway gives you OpenAI, Gemini and Claude models behind a single key, with per-flow spend tracking.' },
  { q: 'How do I get access?', a: 'raiokiuai is in early access. Request an invite on the early access page and we will reach out.' },
];

const jsonLd = pageJsonLd({
  path: '/',
  name: 'Home',
  title,
  description,
  extra: [
    {
      '@type': 'SoftwareApplication',
      name: 'raiokiuai',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: `${SITE.url}/`,
      description: 'A platform for building conversational AI agents and visual AI workflows, deployable to WhatsApp, web and app chat, and voice.',
      publisher: { '@id': `${SITE.url}/#organization` },
      featureList: [
        'Conversational AI agents with memory, tools and guardrails',
        'Visual workflow builder with LLM, API, code and logic nodes',
        'WhatsApp, web/app SDK and realtime voice channels',
        'Multilingual chat and voice in Indian languages',
        'Publish workflows as API endpoints and MCP servers',
        'Multi-agent orchestration',
        'Tracing, cost tracking and conversation quality scoring',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
});

const marquee = ['WhatsApp', 'Web chat SDK', 'Realtime voice', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'MCP servers', 'API endpoints', 'RAG knowledge bases', 'Multi-agent orchestration'];

function LoomDiagram() {
  const node = (x: number, y: number, t: string, s: string, cls = 'node') => (
    <g className={cls}><rect x={x} y={y} width="108" height="44" rx="12" /><text x={x + 14} y={y + 20}>{t}</text><text x={x + 14} y={y + 35} className="sub">{s}</text></g>
  );
  return (
    <svg viewBox="0 0 520 300" aria-hidden="true">
      <defs>
        <path id="p1" d="M118 50 C 180 50, 190 150, 232 150" /><path id="p2" d="M118 150 L 232 150" /><path id="p3" d="M118 250 C 180 250, 190 150, 232 150" />
        <path id="q1" d="M332 150 C 370 150, 370 50, 402 50" /><path id="q2" d="M332 150 C 370 150, 370 150, 402 150" /><path id="q3" d="M332 150 C 370 150, 370 250, 402 250" />
      </defs>
      {['p1', 'p2', 'p3', 'q1', 'q2', 'q3'].map((id) => <use key={id} href={`#${id}`} className="thread" />)}
      <use href="#p1" className="thread-live" /><use href="#p3" className="thread-live" style={{ animationDelay: '-.8s' }} /><use href="#q2" className="thread-live" style={{ animationDelay: '-1.2s' }} />
      <g className="beadm">
        {[['p1', '2.8s', '0s'], ['p2', '2.2s', '-.9s'], ['p3', '3.1s', '-1.6s'], ['q1', '2.6s', '-.3s'], ['q3', '2.4s', '-1.2s']].map(([id, dur, begin]) => (
          <circle key={id} r="4" className="bead"><animateMotion dur={dur} begin={begin} repeatCount="indefinite"><mpath href={`#${id}`} /></animateMotion></circle>
        ))}
      </g>
      {node(10, 28, 'WhatsApp', 'rich messages')}
      {node(10, 128, 'Chat SDK', 'web · app')}
      {node(10, 228, 'Voice', 'realtime')}
      <g className="node agent"><rect x="232" y="110" width="100" height="80" rx="16" /><text x="248" y="142">Agent</text><text x="248" y="159" className="sub">memory · tools</text><text x="248" y="173" className="sub">guardrails</text></g>
      {node(402, 28, 'lookup_user', 'API → jq')}
      {node(402, 128, 'fetch_slots', 'if/else → API')}
      {node(402, 228, 'kb_answer', 'RAG', 'node accent')}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="hero grain" aria-labelledby="hero-title">
        <Prism second />
        <svg className="mark" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="21" fill="#fff" />
          <g stroke="#fff" strokeWidth="5" strokeLinecap="round"><path d="M60 39V12M60 81v27M39 60H12M81 60h27M45 45 25 25M75 75l20 20M75 45l20-20M45 75 25 95" /></g>
          <g fill="#FF9254"><circle cx="60" cy="12" r="9" /><circle cx="108" cy="60" r="9" /><circle cx="25" cy="95" r="9" /></g>
        </svg>
        <div className="wrap hero-inner">
          <div>
            <span className="hero-badge reveal"><b>NEW</b> Publish flows as API endpoints &amp; MCP servers</span>
            <h1 id="hero-title" className="reveal d1">Agents that talk.<br /><span className="soft">Workflows that act.</span></h1>
          </div>
          <div className="reveal d2">
            <p className="lede">raiokiuai builds conversational AI agents for WhatsApp, web, app and voice, and wires them to your APIs, data and models through visual workflows.</p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/contact/">Get early access <Arrow /></Link>
              <Link className="btn btn-ghost" href="/flows/">Explore Flows</Link>
            </div>
          </div>
        </div>
        <span className="scroll-cue" aria-hidden="true">Scroll</span>
      </section>

      <div className="beam" aria-hidden="true" />

      <section className="section tight">
        <div className="wrap">
          <p className="statement reveal">Everyone has a chatbot. <strong>We make it do the work: real bookings, real offers, real refunds, in the customer&apos;s own language.</strong></p>
        </div>
      </section>

      <section className="section" aria-labelledby="pillars-title">
        <div className="wrap">
          <SectionHead eyebrow="Why raiokiuai" id="pillars-title" title="From conversation to outcome, in one platform." />
          <div className="pillars reveal d1">
            {[
              ['Conversation', 'Agents with memory, tools and guardrails, built in minutes rather than sprints.'],
              ['Action', 'Visual workflows that call your APIs, databases and models, then return real results.'],
              ['Every channel', 'One agent on WhatsApp, web, app and voice, with native UI on each.'],
              ['Your languages', 'Chat and voice in English and multiple Indian languages, out of the box.'],
            ].map(([t, d], i) => (
              <div className="pillar" key={t}><span className="n">0{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ship-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 id="ship-title" className="big-line reveal">We ship AI <span className="strike">demos</span><br /><span className="grad-text">journeys.</span></h2>
          <div className="grid g3" style={{ marginTop: 56 }}>
            <div className="card reveal"><span className="k">Inside your stack</span><h3>Wired to real systems</h3><p>Paste a cURL or attach a flow, and the agent works with your live data. Secrets stay encrypted and never reach the model.</p></div>
            <div className="card reveal d1"><span className="k">Live in days</span><h3>Business teams can build</h3><p>A visual canvas, a prompt studio and node-by-node testing mean customer journeys ship without backend tickets.</p></div>
            <div className="card reveal d2"><span className="k">Measured</span><h3>Every turn is traced</h3><p>Latency, cost and quality are scored on every conversation, so you know what is working.</p></div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="How it works" id="how-title" title="Build the action. Give it a voice. Ship it everywhere.">
            <p>Flows are the hands and agents are the conversation. Together they turn a customer&apos;s message into a real booking, offer or refund.</p>
          </SectionHead>
          <div className="steps">
            <article className="step reveal">
              <div className="num">01 · FLOWS</div>
              <h3>Build the workflow</h3>
              <p>Drag LLM, API, jq, code, database and condition nodes onto a canvas. Test each node live, then publish a versioned endpoint.</p>
              <code className="code"><span className="b">trigger</span>{'(phone)\n → api: lookup_user\n → if: city serviceable?\n → api: fetch_slots\n → jq: '}<span className="a">top 3 slots</span></code>
            </article>
            <article className="step reveal d1">
              <div className="num">02 · AGENTS</div>
              <h3>Give it to an agent</h3>
              <p>Attach the flow as a tool or paste any cURL. Set the persona, languages and first message, and let the prompt studio refine the rest.</p>
              <code className="code"><span className="b">tool</span>{': fetch_slots\n  phone ← '}<span className="a">dynamic variable</span>{'\n  auth  ← team secret\n  cache ← ttl · jq transform'}</code>
            </article>
            <article className="step reveal d2">
              <div className="num">03 · SHIP</div>
              <h3>Go live everywhere</h3>
              <p>Map the agent to a WhatsApp number, a web or app page, or a voice line. Score every conversation and trace every turn.</p>
              <code className="code">{'whatsapp → '}<span className="b">support-bot</span>{'\nsdk      → '}<span className="b">support-bot</span>{'\nvoice    → '}<span className="b">support-bot</span>{'\nquality  '}<span className="a">rules ✓</span></code>
            </article>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>

      <section className="section" aria-labelledby="platform-title">
        <div className="wrap">
          <SectionHead eyebrow="The platform" id="platform-title" title="Three building blocks. One loop." />
          <div className="tiles">
            <Link className="card card-glow tile reveal" href="/agents/">
              <div>
                <span className="k">Agents</span>
                <h3>A complete agent stack, without the plumbing.</h3>
                <p>Memory, tools, multimodal input, concurrency and safety limits are handled for you.</p>
              </div>
              <div className="visual"><LoomDiagram /></div>
              <span className="link-arrow">Explore agents <span aria-hidden="true">→</span></span>
            </Link>
            <Link className="card card-glow tile reveal d1" href="/flows/">
              <div>
                <span className="k">Flows</span>
                <h3>Connect AI, APIs and logic on one canvas.</h3>
                <p>Ship any flow as an API endpoint, an MCP server or an agent tool.</p>
              </div>
              <span className="link-arrow">Explore Flows <span aria-hidden="true">→</span></span>
            </Link>
            <Link className="card card-glow tile reveal d2" href="/channels/">
              <div>
                <span className="k">Channels</span>
                <h3>One agent, wherever your customers are.</h3>
                <p>WhatsApp, web and app chat, and realtime multilingual voice.</p>
              </div>
              <span className="link-arrow">Explore channels <span aria-hidden="true">→</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="journeys-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="Use cases" id="journeys-title" title="Real journeys, ready to build.">
            <p>The kinds of customer journeys teams build with raiokiuai across sales, service and finance.</p>
          </SectionHead>
          <div className="slots">
            {[
              ['sales', 'Journey 001 · Sales', 'Browse → buy', 'From "show me options" to a confirmed order, in one WhatsApp thread.'],
              ['finance', 'Journey 002 · Finance', 'OTP → offer', 'Consent, a personalised offer and document upload, all inside chat.'],
              ['voice', 'Journey 003 · Voice', 'Call → close', 'Voice bots that know when a warm transfer to a human is worth it.'],
            ].map(([id, k, big, d], i) => (
              <Link key={id} className={`card card-glow slot reveal${i ? ` d${i}` : ''}`} href={`/use-cases/#${id}`}>
                <span className="k">{k}</span>
                <div><div className="big">{big}</div><p>{d}</p></div>
                <span className="link-arrow">Read the journey <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <SectionHead eyebrow="FAQ" id="faq-title" title="Questions, answered." />
          <div className="faq reveal d1">
            {faqs.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <Cta title={<>Bring us your<br />next journey.</>} />
    </>
  );
}
