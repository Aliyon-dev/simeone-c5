"use client"

export function FloatingInfo() {
  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
      <div className="bg-black border-2 border-[#FFFF00] p-4 font-label text-[10px] uppercase tracking-tighter text-[#FFFF00] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between gap-8 mb-2">
          <span>Network Status</span>
          <span className="text-white">Encrypted_SSL</span>
        </div>
        <div className="flex justify-between gap-8">
          <span>System Load</span>
          <span className="text-white">0.045ms / 60fps</span>
        </div>
      </div>
    </div>
  )
}
