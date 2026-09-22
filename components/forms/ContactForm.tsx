"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { TextField, TextAreaField } from "./FormFields";
import { Button } from "@/components/ui/Button";

type FormState = { name: string; email: string; phone: string; message: string };
const initial: FormState = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (key: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.phone.trim()) next.phone = "Required";
    if (!form.message.trim()) next.message = "Required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1100);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-card border border-hairline-light bg-white px-8 py-12 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[#EBF2FA]">
          <CheckCircle2 size={28} className="text-[#133E87]" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-ink-primary">Message Sent</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
          Thanks, {form.name}. We&apos;ll get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-hairline-light bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Your Name" name="name" required value={form.name} onChange={set("name")} error={errors.name} placeholder="Full name" />
        <TextField label="Mobile Number" name="phone" required value={form.phone} onChange={set("phone")} error={errors.phone} placeholder="+91 XXXXX XXXXX" />
        <TextField label="Email" name="email" type="email" value={form.email} onChange={set("email")} error={errors.email} placeholder="you@company.com" className="sm:col-span-2" />
        <TextAreaField label="Message" name="message" required value={form.message} onChange={set("message")} error={errors.message} placeholder="How can we help?" className="sm:col-span-2" rows={5} />
      </div>
      <div className="mt-6 flex items-center gap-4 border-t border-hairline-light pt-6">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" /> Sending
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
        <span className="text-xs text-ink-subtle">Frontend demo — connect to a backend to send real messages.</span>
      </div>
    </form>
  );
}
