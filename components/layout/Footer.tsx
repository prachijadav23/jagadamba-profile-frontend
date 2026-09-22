import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";
import { footerColumns } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-16 border-t-2 border-[#F59E0B] text-white">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-20" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl font-black tracking-tight text-white">
                  JAGDAMBA
                </span>
                <span className="font-display text-xl font-black tracking-tight text-[#F59E0B]">
                  PROFILE
                </span>
              </div>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FDE68A]">
                Pvt. Ltd. &middot; Vadodara, Gujarat
              </span>
            </div>

            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
              {company.description}
            </p>

            <div className="mt-5 flex flex-col gap-2.5 text-xs sm:text-sm text-slate-300">
              <a
                href={`tel:+91${company.phones.office[0]}`}
                className="flex items-center gap-2 hover:text-[#FBBF24] transition-colors"
              >
                <Phone size={14} className="shrink-0 text-[#F59E0B]" />
                <span>+91 {company.phones.office[0]} / {company.phones.office[1]}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-[#FBBF24] transition-colors"
              >
                <Mail size={14} className="shrink-0 text-[#F59E0B]" />
                <span>{company.email}</span>
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FBBF24] transition-colors"
              >
                <MessageCircle size={14} className="shrink-0 text-[#F59E0B]" />
                <span>WhatsApp: {company.whatsappDisplay}</span>
              </a>
              <span className="flex items-start gap-2 text-slate-300">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#F59E0B]" />
                <span>{company.address.full}</span>
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#FBBF24] mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-400 transition-colors hover:text-[#FBBF24]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Jagdamba Profile Pvt. Ltd. All rights reserved.</p>
          <p className="text-slate-400">{company.registrations.iso}</p>
        </div>
      </Container>

      {/* Photo 1 Signature Vibrant Golden Amber Bottom Strip */}
      <div className="bg-[#F59E0B] text-[#0A1D33] py-3.5 px-4 font-sans text-xs font-bold border-t border-[#D97706]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="flex items-center gap-1.5 font-bold">
                www.jagdambaprofile.com
              </span>
              <span className="hidden sm:inline opacity-40">&bull;</span>
              <span className="flex items-center gap-1.5 font-bold">
                +91 98249 17250 / +91 87996 17251
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-black">
              <span>JAGDAMBA PROFILE PVT. LTD.</span>
              <span className="opacity-40">&bull;</span>
              <span>VADODARA, GUJARAT</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
