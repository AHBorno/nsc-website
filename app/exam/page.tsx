'use client';

import { useEffect, useState } from 'react';

export default function ExamPage() {

  // =========================
  // EXAM SETTINGS
  // =========================

  const EXAM_NAME =
    'National Science Fair and Co-Curricular Competition 2026 - Online GK Mastermind';

  const FORM_LINK =
    'https://docs.google.com/forms/d/e/1FAIpQLSdX0LrplTswafXSZAWDNzVJOIhtSwDLsThHBZBMTqpbW3FSjA/viewform?embedded=true';

  const EXAM_DURATION = 10 * 60;

  // =========================

  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [examEnded, setExamEnded] = useState(false);
  const [alreadyAttempted, setAlreadyAttempted] = useState(false);

  // Warning sound
  const warningAudio =
    typeof Audio !== 'undefined'
      ? new Audio('/sounds/warning.mp3')
      : null;

  const examKey = `nsc_exam_attempt_${FORM_LINK}`;

  useEffect(() => {

    if (!started) return;

    if (!FORM_LINK) return;

    const today = new Date().toDateString();

    const savedDate = localStorage.getItem(examKey);

    if (savedDate === today) {
      setAlreadyAttempted(true);
      return;
    }

    // =========================
    // ANTI CHEAT SYSTEM
    // =========================

    document.documentElement.requestFullscreen?.();

    const handleVisibility = () => {

      if (document.hidden) {

        setExamEnded(true);

        localStorage.setItem(
          examKey,
          new Date().toDateString()
        );
      }
    };

    document.addEventListener(
      'visibilitychange',
      handleVisibility
    );

    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener(
      'contextmenu',
      disableRightClick
    );

    const handleKeyDown = (e: KeyboardEvent) => {

      if (e.key === 'F12') {
        e.preventDefault();
      }

      if (
        e.ctrlKey &&
        ['c', 'v', 'x', 'u', 's', 'p'].includes(
          e.key.toLowerCase()
        )
      ) {
        e.preventDefault();
      }

      if (e.altKey && e.key === 'Tab') {
        e.preventDefault();
      }
    };

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    // =========================
    // TIMER
    // =========================

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        // Play warning sound at 10 sec
        if (prev === 11) {
          warningAudio?.play();
        }

        if (prev <= 1) {

          clearInterval(timer);

          setExamEnded(true);

          localStorage.setItem(
            examKey,
            new Date().toDateString()
          );

          return 0;
        }

        return prev - 1;
      });

    }, 1000);

    return () => {

      clearInterval(timer);

      document.removeEventListener(
        'visibilitychange',
        handleVisibility
      );

      document.removeEventListener(
        'contextmenu',
        disableRightClick
      );

      document.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };

  }, [started]);

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
          </p>

        </div>

      </main>
    );
  }

  // =========================
  // ALREADY ATTEMPTED
  // =========================

  if (alreadyAttempted) {

    return (
      <main className="min-h-screen bg-[#05070A] text-white flex items-center justify-center px-4">

        <div className="glass border border-red-500/20 rounded-[2rem] p-12 text-center max-w-2xl">

          <h1 className="font-display text-6xl font-black mb-6">
            EXAM
            <span className="text-red-500"> CLOSED</span>
          </h1>

          <p className="text-slate-300 text-xl mb-4">
            You have already attended this examination.
          </p>

          <p className="text-slate-500">
            Multiple attempts are not allowed.
          </p>

        </div>

      </main>
    );
  }

  // =========================
  // EXAM START PAGE
  // =========================

  if (!started) {

    return (
      <main className="min-h-screen bg-[#05070A] text-white flex items-center justify-center px-4">

        <div className="glass border border-sky-500/20 rounded-[2rem] p-12 max-w-3xl w-full text-center">

          <p className="text-sky-500 uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Live Examination
          </p>

          <h1 className="font-display text-5xl md:text-6xl font-black mb-8">
            {EXAM_NAME}
          </h1>

          <div className="space-y-4 text-slate-300 text-lg mb-10">

            <p>
              Duration: {EXAM_DURATION / 60} Minutes
            </p>

            <p>
              Leaving the tab or suspicious activity will instantly terminate the exam.
            </p>

            <p>
              Multiple attempts are not allowed.
            </p>

          </div>

          <button
            onClick={() => {

              localStorage.setItem(
                'nsc_exam_start',
                Date.now().toString()
              );

              setStarted(true);
            }}
            className="px-12 py-5 bg-sky-500 hover:bg-sky-400 transition-all rounded-2xl text-slate-950 font-black uppercase tracking-widest text-sm"
          >
            Start Exam
          </button>

        </div>

      </main>
    );
  }

  // =========================
  // LIVE EXAM
  // =========================

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="min-h-screen bg-[#05070A] text-white">

      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-black">
          {EXAM_NAME}
        </h1>

        <div
          className={`px-6 py-2 rounded-xl font-bold text-lg border transition-all ${
            timeLeft <= 10
              ? 'bg-red-500 text-white border-red-500 animate-pulse'
              : 'bg-red-500/20 border-red-500 text-red-400'
          }`}
        >
          {minutes}:{seconds.toString().padStart(2, '0')}
        </div>

      </div>

      {/* Exam Container */}
      <div className="relative w-full h-[calc(100vh-80px)]">

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
                The examination time has ended or suspicious activity was detected.
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