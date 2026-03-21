"use client"

export function Disciplines() {
  return (
    <>
      {/* Discipline 01: UI/UX DESIGN */}
      <section id="uiux" className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-[#FFFF00]">
        <div className="md:col-span-4 bg-[#FFFF00] p-12 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="font-headline text-4xl font-black text-[#131313]">01</span>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter text-[#131313] mt-4">UI/UX DESIGN</h2>
          </div>
          <p className="font-body text-[#131313] font-medium leading-tight">
            DESIGN SYSTEMS. HIGH-FIDELITY PROTOTYPING. USER-CENTRIC LOGIC.
          </p>
        </div>

        <div className="md:col-span-8 p-0 grid grid-cols-1 md:grid-cols-2">
          <div className="border-r border-b md:border-b-0 border-[#FFFF00] p-8 hover:bg-surface-container-low transition-colors group">
            <h3 className="font-headline text-xl font-bold mb-4 uppercase text-[#FFFF00]">Design Systems</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">Building scalable token-based systems for enterprise applications with a focus on atomic design principles.</p>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXFbmsXrScylzhJkxcyyZTzu7Ng6HOvHDWp9a6-P_xC7KR7mMO6nx-jcT_VbcMUK7nzpiD1bmfZd5raC1t4FN86bjV8MLJmKWwQkYK-C_hv8fytOGTzUmn-Fgw4OzBf-b5O2X-ua-eF5VcWMqrI-__U8rJFkufKV0pOuHQYTqPADi2OhAcMX0babs9GYW3k5IoQe7hZBCi3Fk0f3hg6e9J6egUC_wUu6mlGX054QyXqkUm7f0e7h6m--mqSUMftJyX3-u-LNVTKqjV"
              alt="Abstract grid and component layout"
              className="w-full h-48 object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
            />
          </div>

          <div className="p-8 hover:bg-surface-container-low transition-colors group">
            <h3 className="font-headline text-xl font-bold mb-4 uppercase text-[#FFFF00]">Interactive Prototyping</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">Complex logic-driven prototypes in Framer and Figma to validate user flows before development.</p>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCezJU95zghLe9JiGK5QDGFS982yJznzWLs97DJasouQFetWdMFJUABfMnwwpGktPOqGOUYMao1pUZj5PvAQeX0JQmsZIsP0LhD8C1vomJFs59T_76MjGiwn9D84Q4upSlsoRcpwN3fe8bPfDkIBkcrd0QJU1BozyCD8kNtk3wX6OMlC7huMkKrfn95UIUQAaRqAW2sDq0DWqJBY_K9L0yHedHWgxC5y00_P_oREUHXqP2vOFuXBsK6fb_ilzpWA1BoVwIrINUxAXYD"
              alt="Technical interface nodes and wires"
              className="w-full h-48 object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Discipline 02: SOFTWARE ENG */}
      <section id="software" className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-[#FFFF00]">
        <div className="md:col-span-8 p-0 grid grid-cols-1 md:grid-cols-2 order-2 md:order-1">
          <div className="border-r border-b md:border-b-0 border-[#FFFF00] p-8 hover:bg-surface-container-low transition-colors group">
            <h3 className="font-headline text-xl font-bold mb-4 uppercase text-primary">Full-Stack Systems</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">React, Node, and Rust powered architectures designed for high-throughput and minimal latency.</p>
            <div className="w-full h-48 bg-surface-container-highest border border-outline-variant flex items-center justify-center p-6">
              <code className="text-[10px] text-[#FFFF00] font-mono leading-tight">
                async fn handle_request(req: Request) -&gt; Response {'{'}<br/>
                &nbsp;&nbsp;let data = state.fetch_metrics().await?;<br/>
                &nbsp;&nbsp;render_interface(data).into()<br/>
                {'}'}
              </code>
            </div>
          </div>

          <div className="p-8 hover:bg-surface-container-low transition-colors group">
            <h3 className="font-headline text-xl font-bold mb-4 uppercase text-primary">Clean Code Optimization</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">Performance-first engineering with a focus on memory safety and type-driven development.</p>
            <div className="w-full h-48 bg-surface-container-highest border border-outline-variant flex items-center justify-center">
              <span className="font-headline text-xs text-outline tracking-widest uppercase">system_architecture.json</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-background p-12 flex flex-col justify-between min-h-[400px] border-l-2 border-[#FFFF00] order-1 md:order-2">
          <div>
            <span className="font-headline text-4xl font-black text-[#FFFF00]">02</span>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter text-white mt-4">SOFTWARE ENG</h2>
          </div>
          <p className="font-body text-on-surface-variant font-medium leading-tight">
            REACT. RUST. NODE. FULL-STACK PERFORMANCE.
          </p>
        </div>
      </section>

      {/* Discipline 03: ARCHVIZ */}
      <section id="archviz" className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-[#FFFF00]">
        <div className="md:col-span-4 bg-[#FFFF00] p-12 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="font-headline text-4xl font-black text-[#131313]">03</span>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter text-[#131313] mt-4">ARCHVIZ</h2>
          </div>
          <p className="font-body text-[#131313] font-medium leading-tight">
            SPATIAL NARRATIVES. UNREAL ENGINE. PHOTOREALISTIC RENDERING.
          </p>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 p-0">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 p-8 border-b md:border-b-0 border-r border-[#FFFF00] hover:bg-surface-container-low transition-colors group">
              <h3 className="font-headline text-xl font-bold mb-4 uppercase text-[#FFFF00]">Lumen/Nanite Real-time</h3>
              <p className="font-body text-sm text-on-surface-variant mb-6">Leveraging Unreal Engine 5 to create immersive, high-fidelity spatial experiences with dynamic lighting.</p>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvVweMvdrJaJXzCrjgRxTzUuFrxvE_TpOpwKU7cV9QnjDeFVSjdJuJhh3oH9M-HE6LE0d5NbF2Hro0Vgi043zQ_hb0Z1kp-fAgHiP3yuxq8M3w4ETBFd9mE5kf4kKQmzNXaEDl3PGPr5o8Zx2Mbv3gKQ63ixRTEwZJW8aQz4qYE0P0P2A8xEG09jzWdqCUHnBVZSmzKIlvYcoyt0tYFnYNPKh_P8hF0KOboUoG2iKQEgTyeH4qYI7mfmNztY9zdzzC0tgLkJAqFogm"
                alt="Modern concrete brutalist building with sharp angles"
                className="w-full h-64 object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all"
              />
            </div>

            <div className="md:w-1/2 p-8 hover:bg-surface-container-low transition-colors group">
              <h3 className="font-headline text-xl font-bold mb-4 uppercase text-[#FFFF00]">Spatial Narrative</h3>
              <p className="font-body text-sm text-on-surface-variant mb-6">Translating architectural concepts into cinematic visualizations using Blender and advanced composting.</p>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEgwAdLAbXFuFhniK-TpBZr6OIrq_dsl2Zl7sOiWBVsNBiXkbWXhF1mtdJy3c5zq46WmdlhvQz91Fxc9NFreFlTvQaTts0jyD8F-8dkvadx4GqUpjKvCKEob8EglHaE0l4ZZLHTiukFhlRJUPPfSciUIS4kKqHkqaUGbp-EsHokfX_eRAMp1Th5HtiwRD5pRoGwt-qldFAj7LSlHtV5TEfc_eepcqOImO8b-I8XwdCDy_4YFMwe56aaj_a4IR3ItVOziafKnXozDC8"
                alt="Geometric architectural structure with modular patterns"
                className="w-full h-64 object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discipline 04: BIOGRAPHY */}
      <section id="biography" className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-[#FFFF00]">
        <div className="md:col-span-8 p-12 flex flex-col justify-center order-2 md:order-1 bg-surface-container-lowest">
          <div className="max-w-2xl">
            <h3 className="font-headline text-xs uppercase tracking-[0.5em] text-[#FFFF00] mb-8">THE ARCHITECT'S MANIFESTO</h3>
            <p className="font-body text-xl text-white leading-relaxed mb-6">
              Bridging the gap between the digital and the physical, I operate at the intersection of three core technical disciplines. My background in <span className="text-[#FFFF00]">UI/UX Design</span> informs how I think about human interaction, <span className="text-[#FFFF00]">Software Engineering</span> provides the logic to build scalable systems, and <span className="text-[#FFFF00]">ArchViz</span> allows me to visualize atmosphere and space.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed">
              With over 8 years of multidisciplinary experience, I build systems that are not only functionally robust but aesthetically profound. My workflow is rooted in "Technical Brutalism" — a philosophy that emphasizes raw structural honesty, performance, and uncompromising visual clarity.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-background p-12 flex flex-col justify-between min-h-[400px] border-l-2 border-[#FFFF00] order-1 md:order-2">
          <div>
            <span className="font-headline text-4xl font-black text-[#FFFF00]">04</span>
            <h2 className="font-headline text-5xl font-bold uppercase tracking-tighter text-white mt-4">BIOGRAPHY</h2>
          </div>
          <p className="font-body text-on-surface-variant font-medium leading-tight">
            UI/UX. SOFTWARE. ARCHVIZ. MULTIDISCIPLINARY ARCHITECT.
          </p>
        </div>
      </section>
    </>
  )
}
