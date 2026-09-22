"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Scale, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const grades = [
  { id: "sa516-70", name: "ASTM A516 Gr. 70", category: "Boiler & Pressure Vessel", density: 7.85 },
  { id: "is2062-e250", name: "IS 2062 E250 BR/B0", category: "Structural Carbon Steel", density: 7.85 },
  { id: "is2062-e350", name: "IS 2062 E350 C", category: "High Tensile Structural", density: 7.85 },
  { id: "s355j2", name: "EN 10025-2 S355J2+N", category: "High Yield European Standard", density: 7.85 },
  { id: "c45", name: "EN 8 / C45", category: "Medium Carbon Engineering Steel", density: 7.85 },
  { id: "hardox", name: "Hardox 400 / 500", category: "Wear Resistant Alloy", density: 7.85 },
];

export function SteelWeightCalculator() {
  const [selectedGrade, setSelectedGrade] = useState(grades[0].id);
  const [lengthMm, setLengthMm] = useState<number>(6000);
  const [widthMm, setWidthMm] = useState<number>(2000);
  const [thicknessMm, setThicknessMm] = useState<number>(25);
  const [quantity, setQuantity] = useState<number>(1);

  // Density = 7.85 g/cm3 = 0.00000785 kg/mm3
  const volumeMm3 = lengthMm * widthMm * thicknessMm;
  const singleWeightKg = volumeMm3 * 0.00000785;
  const totalWeightKg = singleWeightKg * quantity;
  const totalTonnes = totalWeightKg / 1000;

  const currentGradeObj = grades.find((g) => g.id === selectedGrade) || grades[0];

  return (
    <section className="relative overflow-hidden bg-navy-950 py-18 sm:py-24 text-white border-t border-[#133E87]/40">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-25" />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded bg-[#133E87]/40 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#93C5FD] border border-[#133E87]/60 mb-3">
            <Calculator size={13} className="text-[#38BDF8]" />
            <span>Interactive Engineering Tool</span>
          </div>
          <h2 className="font-display text-h2-mobile sm:text-h2 font-extrabold tracking-tight text-white">
            Steel Plate Weight Calculator
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300 text-justify">
            Calculate instant estimated weights for standard or custom plate sizes across prime carbon, boiler, and structural steel grades.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-7 rounded-card border border-white/15 bg-navy-900/90 p-6 sm:p-7 shadow-card">
            <h3 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2">
              <Layers size={17} className="text-[#38BDF8]" />
              <span>1. Select Steel Grade</span>
            </h3>

            {/* Grade Selector Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
              {grades.map((grade) => (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`flex flex-col text-left p-3 rounded-btn border transition-all duration-200 ${
                    selectedGrade === grade.id
                      ? "border-[#F59E0B] bg-[#F59E0B]/15 text-white"
                      : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/25 hover:bg-white/[0.05]"
                  }`}
                >
                  <span className={`text-xs sm:text-sm font-bold ${selectedGrade === grade.id ? "text-[#FBBF24]" : "text-white"}`}>
                    {grade.name}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5">{grade.category}</span>
                </button>
              ))}
            </div>

            <h3 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2">
              <Scale size={17} className="text-[#F59E0B]" />
              <span>2. Dimensions &amp; Quantity (mm)</span>
            </h3>

            {/* Dimension Sliders & Inputs */}
            <div className="space-y-5">
              {/* Length */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Length (L)</span>
                  <span className="font-mono text-[#FBBF24] font-bold bg-white/5 px-2 py-0.5 rounded">
                    {lengthMm.toLocaleString()} mm ({(lengthMm / 1000).toFixed(2)} m)
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="14000"
                  step="100"
                  value={lengthMm}
                  onChange={(e) => setLengthMm(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded appearance-none cursor-pointer accent-[#F59E0B]"
                />
              </div>

              {/* Width */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Width (W)</span>
                  <span className="font-mono text-[#FBBF24] font-bold bg-white/5 px-2 py-0.5 rounded">
                    {widthMm.toLocaleString()} mm ({(widthMm / 1000).toFixed(2)} m)
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="3500"
                  step="50"
                  value={widthMm}
                  onChange={(e) => setWidthMm(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded appearance-none cursor-pointer accent-[#F59E0B]"
                />
              </div>

              {/* Thickness */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Thickness (T)</span>
                  <span className="font-mono text-[#FBBF24] font-bold bg-white/5 px-2 py-0.5 rounded">
                    {thicknessMm} mm
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="200"
                  step="1"
                  value={thicknessMm}
                  onChange={(e) => setThicknessMm(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded appearance-none cursor-pointer accent-[#F59E0B]"
                />
              </div>

              {/* Quantity */}
              <div className="pt-2">
                <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-1.5">
                  <span className="text-slate-300">Number of Plates / Pieces</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-7 w-7 rounded bg-white/10 text-white font-bold hover:bg-[#F59E0B] hover:text-navy-950 transition-colors"
                    >
                      -
                    </button>
                    <span className="font-mono text-[#FBBF24] font-bold bg-white/5 px-3 py-0.5 rounded">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-7 w-7 rounded bg-white/10 text-white font-bold hover:bg-[#F59E0B] hover:text-navy-950 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 rounded-card border border-[#F59E0B]/50 bg-navy-900/90 p-6 sm:p-7 shadow-card relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#F59E0B] rounded-t-card" />

            <div className="border-b border-white/10 pb-5">
              <p className="text-[11px] uppercase tracking-wider text-[#FBBF24] font-bold">Total Estimated Weight</p>
              <div className="mt-1.5 flex items-baseline gap-2.5">
                <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {totalTonnes >= 1 ? totalTonnes.toFixed(2) : totalWeightKg.toFixed(1)}
                </span>
                <span className="text-lg sm:text-xl font-bold text-[#F59E0B]">
                  {totalTonnes >= 1 ? "Metric Tonnes (MT)" : "Kg"}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                = {totalWeightKg.toLocaleString(undefined, { maximumFractionDigits: 1 })} kg total
              </p>
            </div>

            {/* Spec Breakdown */}
            <div className="py-4 space-y-2.5 border-b border-white/10 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Grade:</span>
                <span className="font-bold text-white">{currentGradeObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Dimensions:</span>
                <span className="font-mono text-slate-200">{lengthMm} &times; {widthMm} &times; {thicknessMm} mm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Single Plate Weight:</span>
                <span className="font-mono text-slate-200">
                  {singleWeightKg >= 1000 
                    ? `${(singleWeightKg / 1000).toFixed(2)} MT` 
                    : `${singleWeightKg.toFixed(1)} kg`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Quantity:</span>
                <span className="font-bold text-white">{quantity} {quantity === 1 ? "piece" : "pieces"}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-col gap-2.5">
              <Button
                href={`/quote?grade=${encodeURIComponent(currentGradeObj.name)}&dim=${lengthMm}x${widthMm}x${thicknessMm}&qty=${quantity}`}
                variant="primary"
                size="md"
                showArrow
                className="w-full justify-center"
              >
                Request Quote for this Spec
              </Button>
              <Button
                href={`https://wa.me/919824917250?text=${encodeURIComponent(
                  `Inquiry from Jagdamba Profile Steel Calculator:\nGrade: ${currentGradeObj.name}\nSize: ${lengthMm} x ${widthMm} x ${thicknessMm} mm\nQuantity: ${quantity}\nEst Weight: ${totalWeightKg.toFixed(1)} kg`
                )}`}
                variant="outline-light"
                size="sm"
                className="w-full justify-center"
                target="_blank"
              >
                Inquire on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
