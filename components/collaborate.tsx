"use client"

export function Collaborate() {
  return (
    <section id="collaborate" className="grid grid-cols-1 md:grid-cols-12 border-t-2 border-[#FFFF00] bg-background">
      <div className="md:col-span-5 bg-[#FFFF00] p-12 flex flex-col justify-between min-h-[500px]">
        <div>
          <h2 className="font-headline text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#131313]">
            COLLAB<br/>ORATE
          </h2>
        </div>
        <div className="space-y-6">
          <p className="font-body text-[#131313] font-bold text-lg leading-tight">
            NOW ACCEPTING COMMISSIONS FOR Q3/Q4 2024.
          </p>
          <div className="flex flex-col gap-2 font-label text-xs uppercase text-[#131313] tracking-widest font-bold">
            <span>PROJECT_INQUIRIES@BRUTALISM.TECH</span>
            <span>TELEGRAM: @ARCH_ENG_DEV</span>
          </div>
        </div>
      </div>

      <div className="md:col-span-7 p-12 flex flex-col justify-center border-l-2 border-[#FFFF00]">
        <form className="space-y-8 max-w-xl w-full">
          <div className="space-y-4">
            <label className="font-headline text-[10px] uppercase tracking-widest text-[#FFFF00] font-bold">FULL_NAME</label>
            <input
              type="text"
              placeholder="ENTER NAME..."
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#FFFF00] text-white py-2 px-0 outline-none transition-colors"
            />
          </div>

          <div className="space-y-4">
            <label className="font-headline text-[10px] uppercase tracking-widest text-[#FFFF00] font-bold">EMAIL_ADDRESS</label>
            <input
              type="email"
              placeholder="EMAIL@DOMAIN.COM"
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#FFFF00] text-white py-2 px-0 outline-none transition-colors"
            />
          </div>

          <div className="space-y-4">
            <label className="font-headline text-[10px] uppercase tracking-widest text-[#FFFF00] font-bold">PROJECT_SCOPE</label>
            <textarea
              rows={4}
              placeholder="DESCRIBE THE LOGIC..."
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#FFFF00] text-white py-2 px-0 outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full bg-[#FFFF00] text-[#131313] font-headline font-black uppercase tracking-widest py-4 text-center hover:bg-white transition-all duration-300"
          >
            INITIALIZE TRANSMISSION
          </button>
        </form>
      </div>
    </section>
  )
}
