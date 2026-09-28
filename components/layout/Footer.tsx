import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { footerColumns } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A222D] pt-10 sm:pt-14 lg:pt-16 border-t-2 border-[#FD6200] text-white">
      {/* Background Technical Grid */}
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-20" />
      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 bg-[#FD6200]/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12 pb-8 sm:pb-10 lg:pb-12 border-b border-white/10">
          {/* Brand & Direct Contact: lg:col-span-5 */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="inline-block bg-white rounded-lg p-2.5 shadow-sm max-w-[190px] sm:max-w-[220px] mb-4 hover:shadow-md transition-shadow"
              >
                <Image
                  src="/images/logo-tight.png"
                  alt="Jagdamba Profile Pvt. Ltd."
                  width={210}
                  height={56}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </Link>

              <p className="max-w-md text-xs sm:text-[13px] lg:text-sm leading-relaxed text-slate-300 text-justify">
                {company.description}
              </p>
            </div>

            {/* Quick Contact Cards: 2-column grid with glass effect */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-[13px] text-slate-300">
              <a
                href={`tel:+91${company.phones.office[0]}`}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#FD6200]/50 hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-7 h-7 rounded-md bg-[#FD6200]/15 flex items-center justify-center text-[#FD6200] shrink-0 group-hover:bg-[#FD6200] group-hover:text-white transition-colors">
                  <Phone size={13} strokeWidth={2.2} />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Office Line</span>
                  <span className="text-slate-200 group-hover:text-white font-medium">+91 {company.phones.office[0]}</span>
                </div>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#FD6200]/50 hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-7 h-7 rounded-md bg-[#FD6200]/15 flex items-center justify-center text-[#FD6200] shrink-0 group-hover:bg-[#FD6200] group-hover:text-white transition-colors">
                  <Mail size={13} strokeWidth={2.2} />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Inquiry</span>
                  <span className="text-slate-200 group-hover:text-white font-medium truncate block">{company.email}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#FD6200]/50 hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-7 h-7 rounded-md bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageCircle size={13} strokeWidth={2.2} />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">WhatsApp Desk</span>
                  <span className="text-slate-200 group-hover:text-white font-medium">{company.whatsappDisplay}</span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300">
                <div className="w-7 h-7 rounded-md bg-[#FD6200]/15 flex items-center justify-center text-[#FD6200] shrink-0">
                  <MapPin size={13} strokeWidth={2.2} />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Facility Yard</span>
                  <span className="text-slate-200 font-medium truncate block">Makarpura, Vadodara</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Columns: 2 cols on mobile, 4 cols on tablet & desktop */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-xs sm:text-[13px] lg:text-sm font-bold uppercase tracking-wider text-[#FD6200] mb-3 sm:mb-4 border-b border-white/10 pb-2">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-1.5 sm:gap-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-[13px] lg:text-sm text-slate-300 transition-colors hover:text-[#FD6200] hover:translate-x-1 inline-flex items-center duration-150 py-0.5 leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Certification */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 py-4 sm:py-5 text-xs sm:text-[13px] text-slate-400 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Jagdamba Profile Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{company.registrations.iso}</span>
            </span>
          </div>
        </div>
      </Container>

      {/* Signature Industrial Bottom Strip with clearance for mobile bottom dock */}
      <div className="bg-[#06151D] text-white py-2.5 sm:py-3 px-3 sm:px-4 font-sans text-xs sm:text-[13px] font-semibold border-t border-[#143B4E] pb-24 lg:pb-3">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2.5 text-center sm:text-left">
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center text-slate-300">
              <span className="font-bold text-white hover:text-[#FD6200] transition-colors">
                www.jagdambaprofile.com
              </span>
              <span className="opacity-40">&bull;</span>
              <span className="font-bold text-[#FD6200]">
                +91 98249 17250 / +91 87996 17251
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-wider text-slate-300">
              <span className="text-white">JAGDAMBA PROFILE PVT. LTD.</span>
              <span className="opacity-40">&bull;</span>
              <span className="text-[#FD6200]">VADODARA, GUJARAT</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
