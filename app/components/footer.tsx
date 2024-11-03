import React from "react";

export default function Footer() {
  return (
    <footer className="absolute bottom-0  mb-5 w-full mx-auto px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Soumyadip. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Supabase, Prisma, Kinde Authentication, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
