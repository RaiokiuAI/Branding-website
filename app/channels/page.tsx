import { Cta, JsonLd, PageHero, SectionHead } from '@/components/ui';
import { pageJsonLd, pageMeta } from '@/lib/site';

const path = '/channels/';
const title = 'WhatsApp AI agent, web chat SDK & multilingual voice bot | raiokiuai';
const description = 'Deploy one AI agent to WhatsApp Business, a web and app chat SDK, and realtime voice in Hindi, Tamil, Telugu and other Indian languages, with native UI on every channel.';

export const metadata = pageMeta({
  path, title, description,
  ogTitle: 'One agent on WhatsApp, web, app and voice',
  keywords: ['WhatsApp AI chatbot', 'WhatsApp Business API bot', 'chat SDK', 'voice AI agent', 'Hindi voice bot', 'multilingual voice assistant', 'Indian language AI', 'conversational IVR'],
});

const bars: [string, string][] = [['30%', '-.1s'], ['60%', '-.3s'], ['90%', '-.5s'], ['70%', '-.2s'], ['100%', '-.7s'], ['55%', '-.4s'], ['80%', '-.6s'], ['40%', '-.8s'], ['65%', '-.15s'], ['35%', '-.55s'], ['75%', '-.35s'], ['45%', '-.65s']];
const langs = ['English', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'ಕನ್ನಡ', 'മലയാളം', 'मराठी', 'ગુજરાતી'];

export default function ChannelsPage() {
  return (
    <>
      <JsonLd data={pageJsonLd({ path, name: 'Channels', title, description })} />
      <PageHero
        crumb="Channels"
        title="One agent,"
        accent="wherever your customers are."
        lede="Build an agent once and map it to WhatsApp numbers, SDK pages or voice lines. Each channel gets native UI, not just plain text."
      />

      <section className="section" aria-label="Channels" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="grid g3">
            <article className="card chan reveal" id="whatsapp">
              <div className="demo" aria-hidden="true">
                <div className="bubble me">I&apos;d like to book a visit this Saturday</div>
                <div className="bubble">Sure! I found 3 open slots near you. Which works best?</div>
                <div className="qr"><span>Sat 10 AM</span><span>Sat 1 PM</span><span>More times</span></div>
              </div>
              <div className="body"><span className="k">01</span><h2 style={{ fontSize: 26 }}>WhatsApp</h2><p className="muted" style={{ marginTop: 10 }}>Works with major business-API providers, with carousels, quick replies, list forms and call buttons. Rapid-fire messages are merged and media links are signed.</p></div>
            </article>
            <article className="card chan reveal d1" id="sdk">
              <div className="demo" aria-hidden="true">
                <div className="bubble">Here are options matching your request:</div>
                <div className="carcards">
                  <div className="carcard"><div className="img" /><b>Option A</b><small>Details · price</small></div>
                  <div className="carcard"><div className="img" /><b>Option B</b><small>Details · price</small></div>
                </div>
                <div className="qr"><span>Compare</span><span>Talk to an expert</span></div>
              </div>
              <div className="body"><span className="k">02</span><h2 style={{ fontSize: 26 }}>Web &amp; app SDK</h2><p className="muted" style={{ marginTop: 10 }}>Real-time messaging with typing indicators, read receipts and cancel. Built-in widgets include cards, slot pickers and AI summaries, with handoff to a human.</p></div>
            </article>
            <article className="card chan reveal d2" id="voice">
              <div className="demo" style={{ justifyContent: 'center', gap: 16 }} aria-hidden="true">
                <div className="wave">{bars.map(([h, d], i) => <i key={i} style={{ height: h, animationDelay: d }} />)}</div>
                <div className="langs">{langs.map((l) => <span key={l}>{l}</span>)}</div>
              </div>
              <div className="body"><span className="k">03</span><h2 style={{ fontSize: 26 }}>Voice</h2><p className="muted" style={{ marginTop: 10 }}>Realtime voice with semantic turn detection and a pre-rendered first message. Amounts are read aloud the Indian way: &quot;four lakh fifty thousand&quot;.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="native-title" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <SectionHead eyebrow="Native everywhere" id="native-title" title="Agents send UI, not walls of text.">
            <p>The same structured response renders as a carousel on WhatsApp, cards in your app and a spoken summary on a call.</p>
          </SectionHead>
          <div className="grid g2">
            <article className="card reveal"><h3>One agent, many numbers</h3><p>Map a single agent to several WhatsApp numbers, SDK pages and voice lines, or give each its own persona.</p></article>
            <article className="card reveal d1"><h3>Human handoff</h3><p>Mark a session as transferred and a human takes over in the same thread, with the full transcript.</p></article>
            <article className="card reveal"><h3>Media in, answers out</h3><p>Photos, voice notes and documents are understood and answered in context.</p></article>
            <article className="card reveal d1"><h3>Indian languages</h3><p>English, Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi and Gujarati across chat and voice.</p></article>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
