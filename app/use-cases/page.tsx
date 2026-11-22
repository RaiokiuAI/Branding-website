import Link from 'next/link';
import { Arrow, Cta, JsonLd, PageHero, SectionHead } from '@/components/ui';
import { SITE, pageJsonLd, pageMeta } from '@/lib/site';

const path = '/use-cases/';
const title = 'AI agent use cases on every channel | RaiokiuAI';
const description = 'Connect one RaiokiuAI agent to messaging, web and app chat, and voice, then shape it to your use case: answer questions, capture leads, schedule, update records, follow up and hand off to people.';

export const metadata = pageMeta({
  path, title, description,
  ogTitle: 'Any channel. Your use case.',
  keywords: ['AI agent use cases', 'omnichannel AI agent', 'conversational AI use cases', 'AI customer support', 'lead qualification bot', 'appointment scheduling bot', 'voice AI agent'],
});

const channels = ['Messaging', 'Web & app', 'Voice'];

const cases: { id: string; title: string; text: string }[] = [
  { id: 'answer', title: 'Answer', text: 'Answer questions from your own knowledge, documents and data.' },
  { id: 'capture', title: 'Capture', text: 'Collect details in conversation and qualify every lead.' },
  { id: 'schedule', title: 'Schedule', text: 'Book, reschedule and confirm appointments.' },
  { id: 'update', title: 'Update', text: 'Check a status or update a record in your systems.' },
  { id: 'follow-up', title: 'Follow up', text: 'Send reminders, nudges and check-ins at the right time.' },
  { id: 'handoff', title: 'Hand off', text: 'Pass the conversation to the right person, with full context.' },
];

const steps: [string, string, string][] = [
  ['01', 'Pick your channels', 'Messaging, web and app chat, voice, or all of them.'],
  ['02', 'Connect your systems', 'Flows link the agent to your APIs, data and models.'],
  ['03', 'Shape the agent', 'Set its job, tone and languages. Then go live.'],
];

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          path, name: 'Use cases', title, description, type: 'CollectionPage',
          extra: [{
            '@type': 'ItemList',
            name: 'RaiokiuAI use cases',
            itemListElement: cases.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: `${c.title}: ${c.text}`, url: `${SITE.url}/use-cases/#${c.id}` })),
          }],
        })}
      />
      <PageHero
        crumb="Use cases"
        title="Any channel."
        accent="Your use case."
        lede="Connect one agent to every channel your customers use, then shape it around the job you need done."
      />

      <section className="section" aria-labelledby="cases-title" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <SectionHead eyebrow="What agents do" id="cases-title" title="Six jobs. Every channel." />
          <div className="cases reveal d1">
            {cases.map((c, i) => (
              <article className="case" id={c.id} key={c.id}>
                <span className="case-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="case-ch">{channels.map((ch) => <span key={ch}>{ch}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="build-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="Build yours" id="build-title" title="Three steps to your own use case." />
          <ol className="build-steps reveal d1">
            {steps.map(([n, t, d]) => (
              <li key={n}><span className="case-n">{n}</span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ol>
          <div className="ctas reveal" style={{ marginTop: 40 }}>
            <Link className="btn btn-primary" href="/contact/">Tell us your use case <Arrow /></Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
