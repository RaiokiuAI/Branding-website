import Link from 'next/link';
import { Arrow, Cta, JsonLd, PageHero, SectionHead } from '@/components/ui';
import { pageJsonLd, pageMeta } from '@/lib/site';

const path = '/flows/';
const title = 'Flows: visual AI workflow builder | RaiokiuAI';
const description = 'Chain LLM, API, code and logic nodes on a visual canvas, test node by node, and publish as an API endpoint, MCP server or agent tool.';

export const metadata = pageMeta({
  path, title, description,
  ogTitle: 'Flows — connect AI, APIs and logic in one visual workflow',
  keywords: ['AI workflow builder', 'visual workflow automation', 'LLM workflow', 'no-code AI automation', 'MCP server builder', 'API orchestration', 'AI gateway', 'low-code integration'],
});

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

      <section className="section" aria-labelledby="build-title" style={{ paddingTop: 40 }}>
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
