import { Cta, FlowSteps, JsonLd, Meta, PageHero, type Step } from '@/components/ui';
import { pageJsonLd, pageMeta } from '@/lib/site';

const path = '/use-cases/';
const title = 'AI agent use cases: sales, booking, lending, support & voice | raiokiuai';
const description = 'See how teams use raiokiuai AI agents for sales on WhatsApp, appointment booking, lending offers with OTP consent, customer support, voice calling and conversation quality scoring.';

export const metadata = pageMeta({
  path, title, description,
  ogTitle: 'Real customer journeys, ready to build',
  keywords: ['AI agent use cases', 'WhatsApp sales bot', 'appointment booking bot', 'lending chatbot', 'AI customer support', 'voice bot collections', 'call quality AI', 'PII redaction'],
});

const journeys: { id: string; label: string; title: string; text: string; tools: string[]; steps: Step[] }[] = [
  {
    id: 'sales', label: 'Sales & discovery', title: 'From "show me options" to a confirmed order.',
    text: "A sales agent on WhatsApp and in your app recommends products, answers questions, checks availability in the customer's city, books a slot and creates the order, all in one conversation.",
    tools: ['get_recommendations', 'get_pricing', 'check_availability', 'create_order'],
    steps: [
      { dot: '', ai: true, title: 'Understand intent', text: 'budget, preferences, location: from text, image or voice note' },
      { dot: '01', title: 'Flow: recommend', text: 'API → jq → rendered as a WhatsApp carousel or SDK cards' },
      { dot: '02', title: 'Flow: pricing & details', text: 'answers grounded in live data' },
      { dot: '03', title: 'Flow: slots & order', text: 'availability check → fetch slots → slot picker widget' },
      { dot: '', ai: true, title: 'Nudge if idle', text: 'LLM-timed reminder, or a one-tap callback request' },
    ],
  },
  {
    id: 'booking', label: 'Booking', title: 'Details in, appointment out.',
    text: "A scheduling agent captures the customer's details, creates the lead and books a visit or appointment based on their address and availability.",
    tools: ['identify_customer', 'create_lead', 'address_to_slot', 'confirm_booking'],
    steps: [
      { dot: '01', title: 'Identify the customer', text: 'phone lookup, with a guided fallback' },
      { dot: '02', title: 'Capture the request', text: 'structured fields collected conversationally' },
      { dot: '03', title: 'Create lead', text: 'channel-specific lead flows for WhatsApp and app' },
      { dot: '04', title: 'Book the slot', text: 'address → nearest slots → confirm' },
    ],
  },
  {
    id: 'finance', label: 'Financial services', title: 'Offers with consent built in.',
    text: 'Financial-services agents run lending and refinance journeys end to end: OTP consent, a personalised offer, customisation, document upload and a callback, all inside chat.',
    tools: ['send_consent_otp', 'verify_otp', 'fetch_offer', 'customize_offer', 'document_upload'],
    steps: [
      { dot: '01', title: 'Consent', text: 'send and verify OTP through flows' },
      { dot: '02', title: 'Pre-approved offer', text: 'fetch, then let the customer tune amount and tenure' },
      { dot: '', ai: true, title: 'Collect documents', text: 'upload and extract inside the conversation' },
      { dot: '03', title: 'Hand off', text: 'record a callback and send a short journey link' },
    ],
  },
  {
    id: 'support', label: 'Support', title: 'After the sale, before the frustration.',
    text: 'Support agents handle order queries, negotiation within limits, refunds and tickets, and transfer to a human when the conversation needs one.',
    tools: ['order_status', 'negotiate_price', 'refund_initiate', 'raise_ticket'],
    steps: [
      { dot: '01', title: 'Pull context', text: 'orders, reports, refund status' },
      { dot: '', ai: true, title: 'Resolve or negotiate', text: 'grounded answers, with negotiation inside guardrails' },
      { dot: '02', title: 'Act', text: 'start a refund, raise a ticket, update details' },
      { dot: '03', title: 'Escalate', text: 'session marked transferred, then a human takes over' },
    ],
  },
  {
    id: 'voice', label: 'Voice & calling', title: 'Voice bots that know when to pass the call.',
    text: 'Inbound campaign calls, booking confirmations, cancellations, soft collections and post-delivery check-ins. A flow decides when a warm transfer to a human is worth it.',
    tools: ['inbound_call_transfer', 'booking_confirmation', 'soft_collections', 'post_delivery_checkin'],
    steps: [
      { dot: '', ai: true, title: 'Converse in realtime', text: 'multiple languages; amounts spoken the Indian way' },
      { dot: '01', title: 'Detect intent & hang-ups', text: 'positive intent or a short hang-up → escalate' },
      { dot: '02', title: 'Transfer to human', text: 'a flow routes the call to the right queue' },
      { dot: '', ai: true, title: 'Summarise', text: 'transcript → summary → CRM' },
    ],
  },
  {
    id: 'quality', label: 'Quality & insights', title: 'Every conversation, scored.',
    text: 'Transcribe calls, redact PII with a beep or silence, and score chats and calls against your own rules, such as "Did the agent greet the customer?". Flows can also send data-warehouse reports to Slack.',
    tools: ['audio_to_evaluate', 'summary_from_transcript', 'customer_profiling', 'report_to_slack'],
    steps: [
      { dot: '', ai: true, title: 'Transcribe', text: 'Hindi and English, with speaker diarization' },
      { dot: '', ai: true, title: 'Redact', text: 'phone, card and ID numbers removed' },
      { dot: '01', title: 'Rule evaluation', text: 'runs automatically on idle WhatsApp and SDK sessions' },
      { dot: '02', title: 'Report', text: 'data warehouse → LLM → Slack' },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          path, name: 'Use cases', title, description, type: 'CollectionPage',
          extra: [{
            '@type': 'ItemList',
            name: 'raiokiuai use cases',
            itemListElement: journeys.map((j, i) => ({ '@type': 'ListItem', position: i + 1, name: `${j.label}: ${j.title}`, url: `https://raiokiuai.com/use-cases/#${j.id}` })),
          }],
        })}
      />
      <PageHero
        crumb="Use cases"
        title="Real journeys,"
        accent="ready to build."
        lede="The kinds of customer journeys teams build with raiokiuai across sales, service and finance. Each one is an agent plus a handful of flows."
      >
        {journeys.map((j) => <a key={j.id} className="btn btn-ghost btn-sm" href={`#${j.id}`}>{j.label}</a>)}
      </PageHero>

      <section className="section" aria-label="Journeys" style={{ paddingTop: 40 }}>
        <div className="wrap">
          {journeys.map((j, i) => (
            <article className="journey reveal" id={j.id} key={j.id}>
              <div>
                <span className="jn">Journey {String(i + 1).padStart(3, '0')} · {j.label}</span>
                <h2 style={{ fontSize: 'clamp(30px,3.4vw,44px)', marginTop: 16 }}>{j.title}</h2>
                <p>{j.text}</p>
                <Meta items={j.tools} />
              </div>
              <FlowSteps steps={j.steps} />
            </article>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
