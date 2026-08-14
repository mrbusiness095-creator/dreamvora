import { Link } from "@tanstack/react-router";
import { CONTACTS, REGISTER_URL } from "@/lib/profiles";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-gold bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <h2 className="text-lg font-extrabold">DreamVora</h2>
          <p className="mt-2 text-sm opacity-80">
            Connect, Learn, Earn.
            <br />
            Get paid to chat with foreigners.
            <br />
            Jifunze lugha na utamaduni, kisha pata fursa za kipato mtandaoni.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-gold">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link to="/" className="opacity-90 hover:opacity-100">
                🏠 Home
              </Link>
            </li>
            <li>
              <a href={REGISTER_URL} className="opacity-90 hover:opacity-100">
                💰 Withdraw
              </a>
            </li>
            <li>
              <a href={`sms:${CONTACTS.sms}`} className="opacity-90 hover:opacity-100">
                ☎️ Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gold">Contact</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>💬 SMS: {CONTACTS.sms}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-4 text-center text-xs opacity-70">
        © {new Date().getFullYear()} DreamVora. All rights reserved.
      </div>
    </footer>
  );
}
