"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-start gap-8 border-t-2 border-[#FFFF00] bg-[#131313]">
      <div className="flex flex-col gap-4">
        <div className="text-xl font-black text-white font-headline">TECHNICAL BRUTALISM</div>
        <p className="font-space-grotesk text-sm uppercase tracking-[0.1em] text-[#939277] max-w-sm">
          ©2024 TECHNICAL BRUTALISM. ALL RIGHTS RESERVED. COORDINATES: 40.7128° N, 74.0060° W
        </p>
      </div>

      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-headline text-[10px] text-[#FFFF00] uppercase font-bold tracking-widest">Connect</span>
          <Link href="#" className="font-space-grotesk text-sm uppercase tracking-[0.1em] text-[#939277] hover:text-white hover:underline transition-all">GITHUB</Link>
          <Link href="#" className="font-space-grotesk text-sm uppercase tracking-[0.1em] text-[#939277] hover:text-white hover:underline transition-all">LINKEDIN</Link>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-headline text-[10px] text-[#FFFF00] uppercase font-bold tracking-widest">Resources</span>
          <Link href="#" className="font-space-grotesk text-sm uppercase tracking-[0.1em] text-[#939277] hover:text-white hover:underline transition-all">READCV</Link>
          <Link href="#" className="font-space-grotesk text-sm uppercase tracking-[0.1em] text-[#939277] hover:text-white hover:underline transition-all">SOURCE</Link>
        </div>
      </div>
    </footer>
  )
}
