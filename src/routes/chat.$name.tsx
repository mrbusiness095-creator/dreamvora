import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactWidget } from "@/components/ContactWidget";
import { PROFILES, REGISTER_URL, fmt } from "@/lib/profiles";

export const Route = createFileRoute("/chat/$name")({
  loader: ({ params }) => {
    const profile = PROFILES.find(
      (p) => p.name.toLowerCase() === params.name.toLowerCase(),
    );
    if (!profile) throw notFound();
    return { profile };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Haipatikani — DreamVora" }, { name: "robots", content: "noindex" }],
      };
    }
    const { profile } = loaderData;
    const title = `Chat na ${profile.name} — DreamVora`;
    const description = `${profile.name} anataka ${profile.wants}. Chat dakika ${profile.minutes} na upate TZS ${fmt(profile.tzs)}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ChatPage,
});

function ChatPage() {
  const { profile } = Route.useLoaderData();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-xl flex-1 px-4 py-10">
        <div className="card-surface p-6 text-center">
          <img
            src={`https://i.pravatar.cc/150?img=${profile.img}`}
            alt={profile.name}
            className="mx-auto size-24 rounded-full border-4 border-gold object-cover"
          />
          <h1 className="mt-4 text-2xl font-extrabold">
            {profile.name} {profile.emoji}
          </h1>

          <p className="mt-4 text-sm font-semibold text-muted-foreground">📍 Malipo</p>
          <p className="text-sm text-muted-foreground">
            📍 Unapata kwa kuchat na {profile.name}
          </p>
          <p className="mt-2 text-3xl font-extrabold text-primary">TZS {fmt(profile.tzs)}</p>
          <p className="mt-1 text-sm">Muda: {profile.minutes} dakika</p>

          <p className="mt-4 text-sm">
            {profile.name} anataka: <strong>{profile.wants}</strong>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Ukichat naye kwa muda uliopangwa, utalipwa kiasi hicho.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={REGISTER_URL}
              className="rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              📝 Jisajili Ili Kuendelea
            </a>
            <Link
              to="/"
              className="rounded-lg bg-navy px-5 py-3 text-sm font-bold text-navy-foreground transition hover:opacity-90"
            >
              🔙 Rudi Nyumbani
            </Link>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            * Unahitaji kujisajili ili kuendelea na mazungumzo
          </p>
        </div>
      </main>
      <SiteFooter />
      <ContactWidget />
    </div>
  );
}
