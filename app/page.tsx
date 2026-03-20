const SEDO_URL =
  "https://sedo.com/search/?member=3B-biwdAidcIlKUgkazpFZN9p8-xl4K2wzh-qXXx";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
    </svg>
  );
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <path d="M10 21h4" />
      <path d="M9 9h.01M15 9h.01M10 13a2 2 0 1 0 4 0" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/[0.06]">
      <div className="mb-4 inline-flex rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
    </div>
  );
}

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white md:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-gray-400">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="grid-bg relative min-h-screen overflow-hidden">
      {/* Ambient glow effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <ShieldIcon className="h-8 w-8 text-indigo-400" />
          <span className="text-xl font-bold tracking-tight">
            disputing<span className="text-indigo-400">.ai</span>
          </span>
        </div>
        <a
          href={SEDO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          Buy This Domain
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-16 text-center md:pt-28">
        <div className="animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300">
            <SparkleIcon className="h-4 w-4" />
            Premium .ai Domain Available
          </div>
        </div>

        <h1 className="animate-fade-in-up-delayed mx-auto max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            disputing
          </span>
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            .ai
          </span>
        </h1>

        <p className="animate-fade-in-up-delayed-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Own the defining domain for AI-powered dispute resolution. A
          once-in-a-generation name at the intersection of{" "}
          <span className="text-white font-medium">artificial intelligence</span> and the{" "}
          <span className="text-white font-medium">$20B+ dispute resolution industry</span>.
        </p>

        <div className="animate-fade-in-up-delayed-2 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={SEDO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-lg font-bold text-white transition-all hover:from-indigo-500 hover:to-violet-500"
          >
            Make an Offer
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#why"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-gray-300 transition-all hover:border-white/20 hover:bg-white/10"
          >
            Why This Domain?
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatBlock value="$20B+" label="Dispute Resolution Market" />
            <StatBlock value=".ai" label="Most In-Demand TLD" />
            <StatBlock value="10" label="Characters (Short & Memorable)" />
            <StatBlock value="1" label="Available. Only One." />
          </div>
        </div>
      </section>

      {/* Why section */}
      <section id="why" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Why{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              disputing.ai
            </span>
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            This isn&apos;t just a domain. It&apos;s the front door to an
            entire AI-powered category.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UseCaseCard
            icon={<ShieldIcon className="h-6 w-6" />}
            title="AI Dispute Resolution"
            description="Build the platform that automates arbitration, mediation, and conflict resolution using AI. First-mover advantage starts with the perfect name."
          />
          <UseCaseCard
            icon={<BrainIcon className="h-6 w-6" />}
            title="Legal Tech & Compliance"
            description="Position your AI legal-tech startup with a domain that instantly communicates your value prop. No explanation needed."
          />
          <UseCaseCard
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h20M5 20V10l7-7 7 7v10M9 20v-6h6v6" />
              </svg>
            }
            title="Insurance & Claims"
            description="AI-powered claims disputes is exploding. Own the exact-match domain that captures organic search intent from day one."
          />
          <UseCaseCard
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            }
            title="Global Brand Authority"
            description="The .ai extension signals cutting-edge technology. Combined with 'disputing', it's an unbeatable brand for any dispute-related AI product."
          />
          <UseCaseCard
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            }
            title="SEO Goldmine"
            description="Exact-match domains still dominate search. 'Disputing AI' captures high-intent traffic from anyone searching for AI dispute solutions."
          />
          <UseCaseCard
            icon={
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            }
            title="Instant Credibility"
            description="Skip years of brand-building. disputing.ai is self-explanatory, memorable, and positions you as the category leader from launch day."
          />
        </div>
      </section>

      {/* Social proof / urgency */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/80 to-violet-950/80 p-10 text-center backdrop-blur-sm md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-transparent to-violet-600/5" />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              Limited Availability
            </div>

            <h2 className="text-3xl font-bold md:text-5xl">
              This domain won&apos;t last.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-400">
              Premium .ai domains are being acquired at record pace. The AI dispute
              resolution market is projected to grow 25%+ annually. The right domain
              today is worth 10x tomorrow.
            </p>

            <a
              href={SEDO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-glow mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-10 py-4 text-lg font-bold text-white transition-all hover:from-indigo-500 hover:to-violet-500"
            >
              Secure disputing.ai Now
              <ArrowIcon className="h-5 w-5" />
            </a>

            <p className="mt-4 text-sm text-gray-500">
              Powered by Sedo &mdash; the world&apos;s largest domain marketplace
            </p>
          </div>
        </div>
      </section>

      {/* FAQ-style benefits */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          What you get
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "Full ownership of disputing.ai",
              a: "Complete domain transfer via Sedo's secure escrow process. You own it outright, forever.",
            },
            {
              q: "Instant brand recognition",
              a: 'Two powerful words that tell the world exactly what you do. No need to explain your brand — "disputing.ai" says it all.',
            },
            {
              q: "Massive SEO advantage",
              a: "Exact-match domains rank faster and capture organic traffic from people searching for AI dispute resolution tools.",
            },
            {
              q: "Investment-grade asset",
              a: "Premium .ai domains have appreciated 300-500% over the past 3 years. This is a digital asset that grows in value.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <h3 className="text-lg font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold md:text-6xl">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Own the name.
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Own the category.
          </span>
        </h2>

        <a
          href={SEDO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pulse-glow mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-12 py-5 text-xl font-bold text-white transition-all hover:from-indigo-500 hover:to-violet-500"
        >
          Buy disputing.ai
          <ArrowIcon className="h-6 w-6" />
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-sm text-gray-600">
        <p>
          This domain is listed for sale on{" "}
          <a
            href={SEDO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline transition-colors hover:text-white"
          >
            Sedo
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
