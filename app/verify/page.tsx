'use client';

import { useState } from 'react';
import Papa from 'papaparse';

export default function VerifyPage() {

  const [code, setCode] = useState('');
  const [result, setResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  const verifyCertificate = async () => {

    const response = await fetch('/certificates.csv');
    const csvText = await response.text();

    Papa.parse(csvText, {
      header: true,
      complete: (results) => {

        console.log(results.data);

        const found = results.data.find(
         (item: any) =>
            String(item.Code).trim().toUpperCase() ===
            String(code).trim().toUpperCase()
        );

        setResult(found || null);
        setSearched(true);
      },
    });
  };

  return (
    <main className="min-h-screen bg-[#05070A] text-white flex items-center justify-center px-4 py-24">

      <div className="w-full max-w-2xl glass rounded-[2rem] p-10 border border-sky-500/20">

        <h1 className="font-display text-5xl font-black mb-4 text-center">
          CERTIFICATE
          <span className="text-gradient"> VERIFICATION</span>
        </h1>

        <p className="text-slate-400 text-center mb-10">
          Enter your certificate verification code below.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            type="text"
            placeholder="Enter certificate code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-sky-500"
          />

          <button
            onClick={verifyCertificate}
            className="px-8 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 transition-all font-bold text-slate-950"
          >
            Verify
          </button>

        </div>

        {searched && result && (

          <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8">

            <h2 className="text-3xl font-black text-green-400 mb-6">
              VALID CERTIFICATE
            </h2>

            <div className="space-y-3 text-lg">

              <p>
                <span className="text-slate-400">Name:</span>{' '}
                {result.Name}
              </p>

              <p>
                <span className="text-slate-400">Institution:</span>{' '}
                {result.Institution}
              </p>

              <p>
                <span className="text-slate-400">Segment:</span>{' '}
                {result.Segment}
              </p>

              <p>
                <span className="text-slate-400">Position:</span>{' '}
                {result.Position}
              </p>

              <p>
                <span className="text-slate-400">Category:</span>{' '}
                {result.Category}
              </p>

              <p>
                <span className="text-slate-400">Project Title:</span>{' '}
                {result['Project Title']}
              </p>

              <p>
                <span className="text-slate-400">Certificate ID:</span>{' '}
                {result.Code}
              </p>

            </div>
          </div>
        )}

        {searched && !result && (

          <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8 text-center">

            <h2 className="text-3xl font-black text-red-400 mb-4">
              INVALID CERTIFICATE
            </h2>

            <p className="text-slate-300">
              This certificate code does not exist in our records.
            </p>

          </div>
        )}

      </div>
    </main>
  );
}