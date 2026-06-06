const SEGMENT = 'ECLIPSSE™ IN ORBIT  —  DROP 008  —  **/06/2026  —  '

export function AnnouncementBar() {
  const block = SEGMENT.repeat(8)

  return (
    <div className="bg-black text-white overflow-hidden select-none py-2">
      <div
        className="flex whitespace-nowrap"
        style={{ width: 'max-content', animation: 'marquee 30s linear infinite' }}
      >
        {/* Dos bloques idénticos: la animación mueve -50% para bucle sin corte */}
        <span className="text-[11px] tracking-widest font-medium">{block}</span>
        <span className="text-[11px] tracking-widest font-medium">{block}</span>
      </div>
    </div>
  )
}
