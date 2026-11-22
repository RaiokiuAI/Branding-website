import { Cta, JsonLd, PageHero, SectionHead } from '@/components/ui';
import { pageJsonLd, pageMeta } from '@/lib/site';

const path = '/about/';
const title = 'About RaiokiuAI — conversations that act';
const description = 'RaiokiuAI builds the platform that turns AI conversations into real business outcomes for teams serving customers on WhatsApp, web, app and voice.';

export const metadata = pageMeta({
  path, title, description,
  keywords: ['RaiokiuAI', 'about RaiokiuAI', 'conversational AI company India', 'AI agents startup'],
});

const beliefs: [string, string][] = [
  ['Real data', 'Answers grounded in your live systems, not in what the model guesses.'],
  ['Real systems', 'Agents that call your APIs and finish the job, not ones that hand off a link.'],
  ['Real people', 'Customers in their own language, on the channel they already use, with a human one tap away.'],
  ['Real outcomes', 'Every conversation traced, scored and costed, so results are measured rather than assumed.'],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path, name: 'About', title, description, type: 'AboutPage' })} />
      <PageHero
        crumb="About"
        title="Intelligence is everywhere."
        accent="Outcomes aren't."
        lede="The gap between a chatbot that talks and an agent that gets something done is where customers drop off. We build for that gap."
      />

      <div className="beam" aria-hidden="true" />

      <section className="section tight">
        <div className="wrap">
          <p className="statement reveal">A conversation is only useful if it ends in something real: <strong>a question answered, a request completed, a call routed to the right person.</strong></p>
        </div>
      </section>

      <section className="section" aria-labelledby="believe-title" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <SectionHead eyebrow="What we believe" id="believe-title" title="Four things we won't compromise on." />
          <div className="pillars reveal d1">
            {beliefs.map(([t, d], i) => (
              <div className="pillar" key={t}><span className="n">0{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <SectionHead eyebrow="How we work" id="work-title" title="Built with the teams who run the journeys." />
          <div className="grid g2">
            <article className="card reveal"><h3>Business teams first</h3><p>Prompt studio, visual flows and node-by-node testing mean the people who own the journey can change it.</p></article>
            <article className="card reveal d1"><h3>Developers welcome</h3><p>Code nodes, API endpoints and MCP servers mean engineers are never boxed in.</p></article>
            <article className="card reveal"><h3>Made for India</h3><p>WhatsApp-first, multilingual voice, and amounts spoken in lakhs and crores.</p></article>
            <article className="card reveal d1"><h3>Production by default</h3><p>Guardrails, tracing and tenancy come with every agent, not as an enterprise add-on.</p></article>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
