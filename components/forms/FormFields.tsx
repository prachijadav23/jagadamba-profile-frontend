"use client";

import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
};

const fieldBase =
  "w-full rounded-xs border bg-white px-4 py-3 text-[15px] text-ink-primary placeholder:text-ink-subtle transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#133E87]/20";

function FieldWrapper({
  label,
  name,
  required,
  error,
  className,
  children,
}: BaseProps & { children: React.ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={name} className="text-[13px] font-semibold text-ink-secondary">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <span className="text-xs font-medium text-red-600">{error}</span>}
    </div>
  );
}

export function TextField({
  label,
  name,
  required,
  error,
  className,
  type = "text",
  placeholder,
  value,
  onChange,
}: BaseProps & {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <FieldWrapper label={label} name={name} required={required} error={error} className={className}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          fieldBase,
          error ? "border-red-500" : "border-hairline-medium focus:border-[#133E87]"
        )}
      />
    </FieldWrapper>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  error,
  className,
  placeholder,
  value,
  onChange,
  rows = 4,
}: BaseProps & {
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <FieldWrapper label={label} name={name} required={required} error={error} className={className}>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          fieldBase,
          "resize-none",
          error ? "border-red-500" : "border-hairline-medium focus:border-[#133E87]"
        )}
      />
    </FieldWrapper>
  );
}

export function SelectField({
  label,
  name,
  required,
  error,
  className,
  value,
  onChange,
  options,
  placeholder = "Select",
}: BaseProps & {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <FieldWrapper label={label} name={name} required={required} error={error} className={className}>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          fieldBase,
          "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%236B7280%22 stroke-width=%221.5%22 fill=%22none%22/></svg>')] bg-[right_1rem_center] bg-no-repeat pr-10",
          error ? "border-red-500" : "border-hairline-medium focus:border-[#133E87]"
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

export function RadioField({
  label,
  name,
  required,
  error,
  className,
  value,
  onChange,
  options,
}: BaseProps & {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <FieldWrapper label={label} name={name} required={required} error={error} className={className}>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            type="button"
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "flex-1 rounded-xs border px-4 py-3 text-sm font-semibold transition-colors",
              value === opt
                ? "border-[#0C2340] bg-[#0C2340] text-white"
                : "border-hairline-medium bg-white text-ink-secondary hover:border-[#133E87]/50"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </FieldWrapper>
  );
}
