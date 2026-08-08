import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { fmt, usd, type Profile } from "@/lib/profiles";

export function ProfileCard({ p }: { p: Profile }) {
  return (
    <article className="card-surface relative p-4">
      <span className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full bg-navy text-navy-foreground">
        <Check className="size-3.5" />
      </span>

      <div className="flex items-center gap-3">
        <img
          src={`https://i.pravatar.cc/150?img=${p.img}`}
          alt={p.name}
          loading="lazy"
          className="size-14 rounded-full border-2 border-gold object-cover"
        />
        <div>
          <h3 className="text-base font-bold">
            {p.name} {p.emoji}
          </h3>
          <p className="text-xs font-semibold text-primary">● online</p>
          <p className="text-xs text-muted-foreground">★ {p.rating}</p>
        </div>
      </div>

      <p className="mt-3 text-sm">
        <span className="font-bold">CHAT TIME :</span> {p.minutes} minutes
      </p>
      <p className="text-sm">
        <span className="font-bold">WANTS :</span> {p.wants}
      </p>

      <div className="mt-4 flex items-end justify-between gap-3">
        <Link
          to="/chat/$name"
          params={{ name: p.name }}
          className="rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90"
        >
          💬 START CHAT
        </Link>
        <div className="text-right">
          <span className="inline-block rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground">
            TZS {fmt(p.tzs)}
          </span>
          <p className="mt-1 text-[11px] text-muted-foreground">Earn USD {usd(p.tzs)}</p>
        </div>
      </div>
    </article>
  );
}
