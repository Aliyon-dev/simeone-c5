"use client"

export function TechIndex() {
  return (
    <section className="py-24 px-8 md:px-16 border-t-2 border-[#FFFF00] bg-surface">
      <div className="flex justify-between items-end mb-16 border-b-2 border-[#FFFF00] pb-8">
        <div>
          <h2 className="font-headline text-6xl font-black uppercase tracking-tighter">
            Technical<br/>Index
          </h2>
        </div>
        <div className="text-right hidden md:block">
          <p className="font-label text-xs uppercase text-outline tracking-widest mb-2">Stack Ref: 2024.01</p>
          <p className="font-label text-xs uppercase text-[#FFFF00]">Optimized_Env</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-outline-variant">
        <div className="p-8 border-r border-outline-variant">
          <h5 className="font-headline font-bold text-[#FFFF00] mb-4 uppercase">UI/UX</h5>
          <ul className="font-label text-xs space-y-2 uppercase tracking-tighter">
            <li>Figma</li>
            <li>Framer</li>
            <li>Design Ops</li>
            <li>User Research</li>
          </ul>
        </div>

        <div className="p-8 border-r border-outline-variant">
          <h5 className="font-headline font-bold text-[#FFFF00] mb-4 uppercase">SOFTWARE</h5>
          <ul className="font-label text-xs space-y-2 uppercase tracking-tighter">
            <li>TypeScript</li>
            <li>Rust</li>
            <li>Cloud Native</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        <div className="p-8">
          <h5 className="font-headline font-bold text-[#FFFF00] mb-4 uppercase">ARCHVIZ</h5>
          <ul className="font-label text-xs space-y-2 uppercase tracking-tighter">
            <li>UE5</li>
            <li>Blender</li>
            <li>Lumen/Nanite</li>
            <li>Davinci Resolve</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
