import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import heroImg from '../../Hero.png'

const Hero = ({ scrollToSection }) => {
  const lines = useMemo(
    () => ['MERN Stack Developer', 'Freelance Web Developer', 'Full-Stack Engineer'],
    [],
  )

  const [lineIndex, setLineIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const [imgFailed, setImgFailed] = useState(false)

  useEffect(() => {
    const current = lines[lineIndex]
    const baseDelay = isDeleting ? 28 : 62
    const pause = !isDeleting && subIndex === current.length ? 900 : 0

    const t = window.setTimeout(() => {
      if (!isDeleting) {
        if (subIndex < current.length) {
          setSubIndex((s) => s + 1)
          return
        }
        setIsDeleting(true)
        return
      }

      // deleting
      if (subIndex > 0) {
        setSubIndex((s) => s - 1)
        return
      }

      setIsDeleting(false)
      setLineIndex((i) => (i + 1) % lines.length)
    }, pause ? baseDelay + pause : baseDelay)

    return () => window.clearTimeout(t)
  }, [isDeleting, lineIndex, lines, subIndex])

  const typed = lines[lineIndex].slice(0, subIndex)

  return (
    <section id="home" className="section">
      <div className="w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-12 md:py-20">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="space-y-6">
                <h1 className="text-white font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-left">
                  Hello! I Am Abhiram Mahanandhi
                </h1>

                <div className="space-y-3">
                  <div className="h-10">
                    <span className="text-zinc-400 font-light text-lg md:text-xl">I&apos;m a </span>
                    <span className="text-white font-bold tracking-tight text-lg md:text-xl">
                      <span className="relative inline-block">
                        {typed}
                        <span className="absolute -right-2 top-0 h-full w-[2px] bg-purple-400/80 animate-pulse" />
                      </span>
                    </span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <motion.button
                    className="btn-primary-soft"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection('projects')}
                  >
                    View Projects
                  </motion.button>

                  <motion.button
                    className="btn-outline"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact Me
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
                <div
                  className="absolute inset-0 rounded-2xl border border-zinc-800/50 shadow-[0_0_50px_rgba(147,51,234,0.15)]"
                  aria-hidden="true"
                />

                <div
                  className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl opacity-80"
                  style={{ background: 'rgba(168,85,247,0.18)' }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-70"
                  style={{ background: 'rgba(99,102,241,0.14)' }}
                  aria-hidden="true"
                />

                <div
                  className="absolute inset-5 rounded-2xl border border-zinc-800/50 bg-black/10"
                  aria-hidden="true"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[92%] h-[92%] rounded-2xl overflow-hidden border border-purple-500/20 bg-purple-500/10">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-indigo-500/10"
                      aria-hidden="true"
                    />

                    {!imgFailed && (
                      <img
                        src={heroImg}
                        alt="Abhiram Mahanandhi profile"
                        className="w-full h-full object-cover relative z-10"
                        loading="eager"
                        onError={() => {
                          setImgFailed(true)
                        }}
                      />
                    )}

                    {imgFailed && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center">
                          <div className="text-purple-200/80 font-bold tracking-tight text-sm md:text-base">
                            Profile Photo
                          </div>
                          <div className="text-zinc-300/60 text-xs mt-1">Not available</div>
                        </div>
                      </div>
                    )}

                    <div
                      className="absolute -inset-2 rounded-2xl bg-purple-500/10 blur-2xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero



