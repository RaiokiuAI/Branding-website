import Link from 'next/link';
import ScrollWords from '@/components/ScrollWords';
import SplitWords from '@/components/SplitWords';
import { Arrow, JsonLd, Prism } from '@/components/ui';
import { SITE, pageJsonLd, pageMeta } from '@/lib/site';

const title = 'RaiokiuAI: AI agents for WhatsApp, web, app & voice';
const description = SITE.description;

export const metadata = pageMeta({ path: '/', title, ogTitle: `RaiokiuAI — ${SITE.tagline}`, description });

const jsonLd = pageJsonLd({
  path: '/',
  name: 'Home',
  title,
  description,
  extra: [
    // `Service`, not `SoftwareApplication`: Google's SoftwareApplication rich result requires
    // `offers` plus ratings/reviews, which we don't publish yet (Ahrefs flagged it as a validation error).
    {
      '@type': 'Service',
      '@id': `${SITE.url}/#service`,
      name: 'RaiokiuAI conversational AI agent platform',
      serviceType: 'Conversational AI agent and workflow automation platform',
      url: `${SITE.url}/`,
      description: 'A platform for building conversational AI agents and visual AI workflows, deployable to WhatsApp, web and app chat, and voice.',
      provider: { '@id': `${SITE.url}/#organization` },
      brand: { '@type': 'Brand', name: SITE.name },
      slogan: SITE.tagline,
      areaServed: { '@type': 'Country', name: 'India' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'RaiokiuAI platform',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI agents', url: `${SITE.url}/agents/` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flows: visual AI workflows', url: `${SITE.url}/flows/` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Channels: WhatsApp, web, app and voice', url: `${SITE.url}/channels/` } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security and observability', url: `${SITE.url}/security/` } },
        ],
      },
    },
  ],
});

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
      {node(10, 28, 'Messaging', 'chat apps')}
      {node(10, 128, 'Web & app', 'embedded chat')}
      {node(10, 228, 'Voice', 'realtime')}
      <g className="node agent"><rect x="232" y="110" width="100" height="80" rx="16" /><text x="248" y="142">Agent</text><text x="248" y="159" className="sub">memory · tools</text><text x="248" y="173" className="sub">guardrails</text></g>
      {node(402, 28, 'API tool', 'your systems')}
      {node(402, 128, 'Workflow', 'logic → action')}
      {node(402, 228, 'Knowledge', 'RAG', 'node accent')}
    </svg>
  );
}

const doing: [string, string][] = [
  ['Conversation', 'AI agents with memory, tools and guardrails.'],
  ['Action', 'Visual workflows connected to your APIs, data and models.'],
  ['Every channel', 'One agent across messaging, web, app and voice.'],
  ['Your languages', 'English and multiple Indian languages.'],
];

const doors: { n: string; k: string; title: string; sub: string; href: string }[] = [
  { n: '01', k: 'Agents', title: 'Conversational AI agents.', sub: 'Memory, tools and guardrails, built in.', href: '/agents/' },
  { n: '02', k: 'Flows', title: 'Visual workflows.', sub: 'Shipped as APIs, MCP servers or agent tools.', href: '/flows/' },
  { n: '03', k: 'Channels', title: 'Every channel.', sub: 'Messaging, web and app chat, and voice.', href: '/channels/' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Act 1 · Poster */}
      <section className="hero grain" aria-labelledby="hero-title">
        <Prism second />
        <div className="mark-wrap" aria-hidden="true"><img className="mark" src="/logo-mark.png" alt="" width={190} height={190} /></div>
        <div className="wrap hero-inner">
          <div>
            <span className="hero-badge reveal"><b>NEW</b> Publish flows as API endpoints &amp; MCP servers</span>
            <h1 id="hero-title"><SplitWords text="Agents that talk." start={0.15} /><br /><SplitWords text="Workflows that act." start={0.4} wordClass="soft" /></h1>
          </div>
          <div className="reveal d2">
            <p className="lede">AI agents for every channel, connected to your systems through visual workflows.</p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/contact/">Get early access <Arrow /></Link>
              <Link className="btn btn-ghost" href="/agents/">See the platform</Link>
            </div>
          </div>
        </div>
        <span className="scroll-cue" aria-hidden="true">Scroll</span>
      </section>

      {/* Act 2 · What we do */}
      <section className="act statement-act" aria-labelledby="do-title">
        <div className="wrap">
          <span className="eyebrow act-eyebrow" id="do-title">What we do</span>
          <ScrollWords className="act-line" text="RaiokiuAI builds AI agents that talk with your customers, and workflows that act on your systems." />
          <div className="ticks reveal">
            {doing.map(([t, d]) => (
              <div className="tick" key={t}><span className="tick-mark" aria-hidden="true" /><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Act 3 · The product, in one picture */}
      <section className="act product-act" aria-labelledby="loop-title">
        <div className="wrap">
          <div className="product-head reveal">
            <span className="eyebrow">How it fits</span>
            <h2 id="loop-title">Channels in. Agent in the middle. Your systems out.</h2>
          </div>
          <div className="product-visual reveal d1"><LoomDiagram /></div>
        </div>
      </section>

      {/* Act 4 · What we provide: the rows are the links */}
      <section className="doors" aria-labelledby="provide-title">
        <div className="wrap doors-head">
          <span className="eyebrow" id="provide-title">What we provide</span>
        </div>
        <div className="hairline" aria-hidden="true" />
        {doors.map((d) => (
          <div key={d.href}>
            <Link className="door" href={d.href}>
              <div className="wrap door-inner">
                <div className="door-main">
                  <span className="door-k">{d.n} · {d.k}</span>
                  <h3 className="door-title">{d.title}</h3>
                  <p className="door-sub">{d.sub}</p>
                </div>
                <span className="door-go" aria-hidden="true"><Arrow /></span>
              </div>
            </Link>
            <div className="hairline" aria-hidden="true" />
          </div>
        ))}
      </section>

      {/* Act 5 · Close */}
      <section className="act close-act" aria-labelledby="close-title">
        <Prism fade={false} />
        <div className="wrap close-inner reveal">
          <span className="eyebrow">Early access</span>
          <h2 id="close-title">Bring us your<br /><span className="soft">next journey.</span></h2>
          <Link className="btn btn-primary btn-lg" href="/contact/">Get early access <Arrow /></Link>
        </div>
      </section>
    </>
  );
}
