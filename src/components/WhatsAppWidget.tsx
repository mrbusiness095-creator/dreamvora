import { useState } from "react";
import { MessageCircle, Phone, MessageSquare, Users, X } from "lucide-react";
import { CONTACTS } from "@/lib/profiles";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[17rem] overflow-hidden rounded-2xl bg-card shadow-xl ring-1 ring-border">
          <div className="bg-navy px-4 py-3 text-navy-foreground">
            <p className="text-sm font-bold">Customer care</p>
            <p className="text-[11px] opacity-80">Chagua njia ya kuwasiliana nasi</p>
          </div>
          <ul className="divide-y divide-border">
            <li>
              <a
                href={`https://wa.me/255${CONTACTS.customerService.slice(1)}`}
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-muted"
              >
                <Phone className="size-5 text-whatsapp" />
                <span className="text-sm">
                  <span className="block font-semibold">Customer service</span>
                  <span className="block text-muted-foreground">{CONTACTS.customerService}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`sms:${CONTACTS.sms}`}
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-muted"
              >
                <MessageSquare className="size-5 text-gold" />
                <span className="text-sm">
                  <span className="block font-semibold">Normal SMS</span>
                  <span className="block text-muted-foreground">{CONTACTS.sms}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={CONTACTS.group}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-muted"
              >
                <Users className="size-5 text-brand" />
                <span className="text-sm">
                  <span className="block font-semibold">WhatsApp group</span>
                  <span className="block text-muted-foreground">Jiunge na kundi letu</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Customer care options"
        className="flex size-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition hover:scale-105"
      >
        {open ? <X className="size-7" /> : <MessageCircle className="size-7" />}
      </button>
    </div>
  );
}
