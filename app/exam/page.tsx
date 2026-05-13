'use client';

import { useEffect, useState } from 'react';

export default function ExamPage() {

  // =========================
  // PASTE GOOGLE FORM LINK HERE
  // Leave empty when no exam
  // =========================

  const FORM_LINK = '';

  // Example:
  // const FORM_LINK =
  // 'https://docs.google.com/forms/d/e/xxxxxxxx/viewform?embedded=true';

  const EXAM_DURATION = 60 * 60; // 60 mins

  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);

  useEffect(() => {

    if (!FORM_LINK) return;

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {
          clearInterval(timer);

          alert('Time is over.');

          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, [FORM_LINK]);

  // =========================
  // NO LIVE EXAM
  // =========================

  if (!FORM_LINK) {

    return (
      <main className="min-h-screen bg-[#05070A] text-white flex items-center justify-center px-4">

        <div className="glass border border-slate-800 rounded-[2rem] p-12 text-center max-w-xl">

          <h1 className="font-display text-5xl font-black mb-6">
            NO LIVE
            <span className="text-gradient"> EXAM</span>
          </h1>

          <p className="text-slate-400 text-lg">
            There is currently no live exam available.
            Please check again later.
          </p>

        </div>

      </main>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // =========================
  // LIVE EXAM
  // =========================

  return (
    <main className="min-h-screen bg-[#05070A] text-white">

      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-black">
          NSC ONLINE EXAM
        </h1>

        <div className="bg-red-500/20 border border-red-500 text-red-400 px-6 py-2 rounded-xl font-bold text-lg">
          {minutes}:{seconds.toString().padStart(2, '0')}
        </div>

      </div>

      {/* Embedded Google Form */}
      <div className="w-full h-[calc(100vh-80px)]">

        <iframe
          src={FORM_LINK}
          className="w-full h-full"
        />

      </div>

    </main>
  );
}