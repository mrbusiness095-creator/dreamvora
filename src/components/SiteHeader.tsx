import { Link } from "@tanstack/react-router";
import { REGISTER_URL } from "@/lib/profiles";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-gold bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="leading-tight">
          <span className="block text-xl font-extrabold tracking-tight text-brand">
            Dream<span className="text-navy">Vora</span>
          </span>
          <span className="block text-[11px] text-muted-foreground">Connect, Learn, Earn</span>
        </Link>

        <span className="order-3 w-full rounded-full bg-primary/15 px-3 py-1 text-center text-xs font-semibold text-primary sm:order-none sm:w-auto">
          ● 2,535 live
        </span>

        <div className="flex items-center gap-2">
          <a
            href={REGISTER_URL}
            className="rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground shadow transition hover:opacity-90"
          >
            💰 Withdraw
          </a>
          <div className="rounded-lg bg-navy px-3 py-1.5 text-navy-foreground">
            <span className="block text-[9px] font-semibold tracking-wide opacity-70">
              CURRENT BALANCE
            </span>
            <span className="block text-sm font-bold">TZS 0.00</span>
          </div>
        </div>
      </div>
    </header>
  );
}
