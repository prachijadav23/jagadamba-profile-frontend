"use client";

import { useCallback, useRef, useState } from "react";
import { UploadCloud, FileText, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type UploadedFile = { id: string; name: string; size: number; progress: number };

export function FileDropzone({
  label,
  hint = "PDF, DXF, DWG or Excel — up to 20 MB each",
  className,
}: {
  label: string;
  hint?: string;
  className?: string;
}) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((fileList: FileList | null) => {
    if (!fileList) return;
    Array.from(fileList).forEach((file) => {
      const id = `${file.name}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setFiles((prev) => [...prev, { id, name: file.name, size: file.size, progress: 0 }]);

      // Frontend-only progress simulation — no file is actually transmitted.
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30 + 15;
        setFiles((prev) =>
          prev.map((f) => (f.id === id ? { ...f, progress: Math.min(progress, 100) } : f))
        );
        if (progress >= 100) clearInterval(interval);
      }, 220);
    });
  }, []);

  return (
    <div className={className}>
      <span className="text-[13px] font-semibold text-ink-secondary">{label}</span>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          addFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xs border-2 border-dashed px-6 py-8 text-center transition-colors",
          dragging ? "border-[#38BDF8] bg-[#EBF2FA]" : "border-hairline-medium bg-surface-secondary hover:border-[#133E87]/40"
        )}
      >
        <UploadCloud size={26} strokeWidth={1.5} className="text-[#0C2340]/70" />
        <p className="text-sm font-medium text-ink-secondary">
          Drag &amp; drop files, or <span className="text-[#133E87] underline">browse</span>
        </p>
        <p className="text-xs text-ink-subtle">{hint}</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
          accept=".pdf,.dxf,.dwg,.xls,.xlsx"
        />
      </div>

      {files.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {files.map((file) => (
            <li
              key={file.id}
              className="flex items-center gap-3 rounded-xs border border-hairline-light bg-white px-3.5 py-2.5"
            >
              <FileText size={16} className="shrink-0 text-[#0C2340]" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-[13px] font-medium text-ink-primary">
                    {file.name}
                  </span>
                  {file.progress >= 100 ? (
                    <CheckCircle2 size={15} className="shrink-0 text-[#133E87]" />
                  ) : (
                    <span className="shrink-0 text-[11px] text-ink-subtle">
                      {Math.round(file.progress)}%
                    </span>
                  )}
                </div>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-hairline-light">
                  <div
                    className="h-full rounded-full bg-[#133E87] transition-all duration-200"
                    style={{ width: `${file.progress}%` }}
                  />
                </div>
              </div>
              <button
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={() => setFiles((prev) => prev.filter((f) => f.id !== file.id))}
                className="shrink-0 text-ink-subtle hover:text-orange-600"
              >
                <X size={15} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
