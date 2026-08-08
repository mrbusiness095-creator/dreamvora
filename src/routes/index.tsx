import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { ProfileCard } from "@/components/ProfileCard";
import { PROFILES } from "@/lib/profiles";

const TITLE = "DreamVora — Chat na Wageni na Pata Pesa Online Tanzania";
const DESC =
  "Chagua mtu wa kuzungumza naye, badilishana lugha na utamaduni, kisha pata fursa za kipato mtandaoni na DreamVora.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

const PER_PAGE = 9;

function Index() {
  const [page, setPage] = useState(1);
  const total = Math.ceil(PROFILES.length / PER_PAGE);
  const items = PROFILES.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="bg-secondary/60 px-4 py-10 text-center">
        <h1 className="mx-auto max-w-3xl text-xl font-extrabold sm:text-2xl">
          🌍 DreamVora: Chat na Wageni na Pata Pesa Online Tanzania
        </h1>
        <p className="mt-2 font-bold text-gold">
          Connect, learn and discover online earning opportunities
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Chagua mtu wa kuzungumza naye, badilishana lugha na utamaduni, kisha fuata maelekezo ya
          DreamVora kuanza.
        </p>
      </section>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProfileCard key={p.name} p={p} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((v) => Math.max(1, v - 1))}
            className="rounded-lg bg-card px-4 py-2 text-sm font-bold shadow disabled:opacity-50"
          >
            ← Prev
          </button>
          <span className="rounded-lg bg-card px-4 py-2 text-sm font-bold shadow">
            {page} / {total}
          </span>
          <button
            type="button"
            disabled={page === total}
            onClick={() => setPage((v) => Math.min(total, v + 1))}
            className="rounded-lg bg-navy px-4 py-2 text-sm font-bold text-navy-foreground shadow disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      </main>

      <SiteFooter />
      <WhatsAppWidget />
    </div>
  );
}
