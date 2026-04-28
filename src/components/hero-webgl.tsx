import { useState, useEffect } from "react"

const CAMERA_IMAGE = "https://cdn.poehali.dev/projects/d4312807-5e6d-4cc7-b882-f90a9828410a/bucket/dd24c584-519e-41b0-8de6-185a20637daf.jpg"

export const Hero3DWebGL = () => {
  const titleWords = "Plexus-cam".split(" ")
  const subtitle = "Видеонаблюдение и беспроводной интернет для дачи, усадьбы и мангальной зоны."
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)
  const [scanY, setScanY] = useState(0)

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07))
    setSubtitleDelay(Math.random() * 0.1)
  }, [titleWords.length])

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  useEffect(() => {
    let raf: number
    let start: number | null = null
    const duration = 3000
    const animate = (ts: number) => {
      if (!start) start = ts
      const progress = ((ts - start) % duration) / duration
      setScanY(progress * 100)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>

      <div
        className="absolute inset-0 z-[5] pointer-events-none overflow-hidden"
        style={{ mixBlendMode: "screen" }}
      >
        <div
          className="absolute left-0 right-0 h-1 opacity-30"
          style={{
            top: `${scanY}%`,
            background: "linear-gradient(90deg, transparent, #3b82f6 40%, #3b82f6 60%, transparent)",
            boxShadow: "0 0 18px 4px #3b82f6",
            transition: "top 0.016s linear",
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-[2]">
        <div className="relative w-full max-w-3xl mx-auto px-8 flex items-center justify-center" style={{ height: "70vh" }}>
          <img
            src={CAMERA_IMAGE}
            alt="Камера видеонаблюдения"
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(0 0 60px rgba(59,130,246,0.35)) drop-shadow(0 0 120px rgba(59,130,246,0.15))",
              mixBlendMode: "lighten",
            }}
          />
        </div>
      </div>

      <div className="h-screen uppercase items-center w-full absolute z-[60] pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? "fade-in" : ""}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold max-w-4xl mx-auto text-center px-4">
          <div
            className={subtitleVisible ? "fade-in-subtitle" : ""}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3DWebGL