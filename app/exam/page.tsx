'use client';

import { useEffect, useState } from 'react';

export default function ExamPage() {

  const FORM_LINK =
    'https://docs.google.com/forms/d/e/1FAIpQLSeC8qYQxCd_Hu0hZGcWMvVPr1d6Cu4mzb84IR3LmXPfzK5HnA/viewform?embedded=true';

  const EXAM_DURATION = 0.5 * 60; // 60 mins

  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [examEnded, setExamEnded] = useState(false);

  useEffect(() => {

    if (!FORM_LINK) return;

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          setExamEnded(true);

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

      {/* Exam Container */}
      <div className="relative w-full h-[calc(100vh-80px)]">

        {/* Google Form */}
        <iframe
          src={FORM_LINK}
          className="w-full h-full"
        />

        {/* Exam Over Overlay */}
        {examEnded && (

            <div className="absolute inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">

                <div className="glass border border-red-500/30 rounded-[2rem] p-12 text-center max-w-2xl mx-4">

                <h1 className="font-display text-6xl md:text-7xl font-black mb-6">
                 EXAM
                    <span className="text-red-500"> OVER</span>
                </h1>

                <p className="text-slate-300 text-xl leading-relaxed mb-4">
                     The examination time has ended.
                </p>

                <p className="text-slate-500">
                    Submission access is now blocked.
                </p>

                </div>

            </div>

        )}

      </div>

    </main>
  );
}