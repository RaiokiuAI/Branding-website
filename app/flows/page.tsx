import Link from 'next/link';
import { Arrow, Cta, JsonLd, Meta, PageHero, SectionHead } from '@/components/ui';
import { pageJsonLd, pageMeta } from '@/lib/site';

const path = '/flows/';
const title = 'Flows — visual AI workflow builder for LLMs, APIs & code | raiokiuai';
const description = 'Flows is a visual canvas for AI workflows. Chain LLM, API, jq, Python/JS code and logic nodes, test node by node, and publish as API endpoints, MCP servers or agent tools.';

export const metadata = pageMeta({
  path, title, description,
  ogTitle: 'Flows — connect AI, APIs and logic in one visual workflow',
  keywords: ['AI workflow builder', 'visual workflow automation', 'LLM workflow', 'no-code AI automation', 'MCP server builder', 'API orchestration', 'AI gateway', 'low-code integration'],
});

const palette: { group: string; chips: [string, boolean?][] }[] = [
  { group: 'Core', chips: [['Trigger'], ['LLM', true], ['API'], ['jq Transform'], ['Code · Py / JS']] },
  { group: 'Control flow', chips: [['If / Else'], ['Switch'], ['Wait & Merge'], ['Delay'], ['Sub-workflow']] },
  { group: 'Data & apps', chips: [['Data warehouse'], ['Slack'], ['Sheets'], ['Email']] },
  { group: 'AI services', chips: [['Document intelligence', true], ['Transcription', true], ['PII redaction', true], ['Rule-based QA', true]] },
];

const VARS = '{{variables}}';

export default function FlowsPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path, name: 'Flows', title, description })} />
      <PageHero
        crumb="Flows"
        title="Connect AI, APIs and logic"
        accent="in one flow."
        lede={<>Flows is a visual canvas for AI workflows. Pull upstream outputs into any node as <span className="mono">{VARS}</span>, test one node at a time, and publish when it works.</>}
      >
        <Link className="btn btn-primary" href="/contact/">Start building <Arrow /></Link>
        <a className="btn btn-ghost" href="#ship">Ways to ship</a>
      </PageHero>

      <section className="section" aria-labelledby="nodes-title" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <SectionHead eyebrow="Node library" id="nodes-title" title="Every block you need, nothing you don't.">
            <p>Orange marks AI-powered nodes. Everything else is deterministic, testable and versioned.</p>
          </SectionHead>
          <div className="palette reveal d1">
            {palette.map((p) => (
              <div className="pgroup" key={p.group}>
                <h3>{p.group}</h3>
                <div className="chips">{p.chips.map(([c, ai]) => <span key={c} className={ai ? 'chip ai' : 'chip'}><i />{c}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="build-title" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <SectionHead eyebrow="Build" id="build-title" title="Built for the way teams actually test.">
            <p>Run a single node against live data, inspect the output, then wire it into the next step.</p>
          </SectionHead>
          <div className="grid g2">
            <article className="card reveal"><span className="k">Gateway</span><h3>One key, every model</h3><p>An AI gateway gives you OpenAI, Gemini and Claude models behind a single key, with live model discovery and per-flow spend tracking.</p></article>
            <article className="card reveal d1"><span className="k">Sandbox</span><h3>Sandboxed code</h3><p>Run Python or JavaScript inline in a sandbox with time, memory and import limits.</p></article>
            <article className="card reveal"><span className="k">Variables</span><h3>Data flows downstream</h3><p>Reference any upstream output with <span className="mono">{VARS}</span> and reshape it with jq, without glue code.</p></article>
            <article className="card reveal d1"><span className="k">Versions</span><h3>Publish with confidence</h3><p>Every publish is versioned, so agents and integrations keep calling the version they were tested against.</p></article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="eg-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="journey reveal">
            <div>
              <span className="jn">Example flow</span>
              <h3 id="eg-title">Serviceability check → three best slots.</h3>
              <p>A flow an agent can call mid-conversation: look up the customer, confirm their city is served, fetch open slots and return only the top three.</p>
              <Meta items={['lookup_user', 'is_serviceable', 'fetch_slots', 'top_3']} />
            </div>
            <code className="code" style={{ margin: 0 }}>
              <span className="b">trigger</span>{'(phone)\n → '}<span className="b">api</span>{':  lookup_user        '}<span className="c"># CRM</span>
              {'\n → '}<span className="b">if</span>{':   city in serviceable_cities\n │    └─ else → '}<span className="a">llm</span>{': polite_decline\n → '}
              <span className="b">api</span>{':  fetch_slots(city, pincode)\n → '}<span className="b">jq</span>{':   .slots | sort_by(.eta) | .[:3]\n → '}<span className="b">return</span>{' { slots }'}
            </code>
          </div>
        </div>
      </section>

      <section className="section" id="ship" aria-labelledby="ship-title" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead eyebrow="Ship as" id="ship-title" title="One flow. Three ways to use it." />
          <div className="grid g3">
            <article className="card card-glow reveal"><span className="k">01 · Endpoint</span><h3>API endpoint</h3><p>Every published flow gets a versioned URL, a ready cURL and an execution token. Runs can be sync, or async with a webhook callback.</p></article>
            <article className="card card-glow reveal d1"><span className="k">02 · MCP</span><h3>MCP server</h3><p>Turn a REST API, a cURL or a whole flow into MCP tools, bundle them into a server, and share it across teams.</p></article>
            <article className="card card-glow reveal d2"><span className="k">03 · Tool</span><h3>Agent tool</h3><p>Agents call flows directly. Responses are validated and cached automatically.</p></article>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
