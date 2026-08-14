import { MessageSquare } from "lucide-react";
import { CONTACTS } from "@/lib/profiles";

export function ContactWidget() {
  return (
    <a
      href={`sms:${CONTACTS.sms}`}
      aria-label={`Tuma SMS kwa ${CONTACTS.sms}`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg transition hover:scale-105"
    >
      <MessageSquare className="size-6" />
      <span className="text-sm font-bold">
        <span className="block text-[10px] font-semibold uppercase tracking-wide opacity-80">
          Normal SMS
        </span>
        {CONTACTS.sms}
      </span>
    </a>
  );
}
