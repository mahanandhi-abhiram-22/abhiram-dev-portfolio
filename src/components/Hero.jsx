import { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

import heroImg from '../hero.webp'

const ease = [0.22, 1, 0.36, 1]
const rise = (d = 0) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } })

const Hero = ({ scrollToSection }) => {
  const lines = useMemo(
    () => ['MERN Stack Developer', 'Freelance Web Developer', 'Full-Stack Engineer'],
    [],
  )

  const [lineIndex, setLineIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const [imgFailed, setImgFailed] = useState(false)

  // 3D tilt on the portrait
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 })
  const onTilt = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const resetTilt = () => { mx.set(0); my.set(0) }

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
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full max-w-[1680px] mx-auto py-12 md:py-20">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="space-y-6">
                <motion.h1 {...rise(0.1)} className="text-white font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-left">
                  Hello! I Am <span className="gradient-text">Abhiram Mahanandhi</span>
                </motion.h1>

                <motion.div {...rise(0.25)} className="space-y-3">
                  <div className="h-10">
                    <span className="text-zinc-400 font-light text-lg md:text-xl">I&apos;m a </span>
                    <span className="text-white font-bold tracking-tight text-lg md:text-xl">
                      <span className="relative inline-block">
                        {typed}
                        <span className="absolute -right-2 top-0 h-full w-[2px] bg-purple-400/80 animate-pulse" />
                      </span>
                    </span>
                  </div>
                </motion.div>

                {/* CTA buttons */}
                <motion.div {...rise(0.4)} className="flex flex-col sm:flex-row gap-3 pt-2">
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
                </motion.div>
              </div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="w-full md:w-1/2 flex justify-center md:justify-end [perspective:1000px]"
              onPointerMove={onTilt}
              onPointerLeave={resetTilt}
            >
              <motion.div
                style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
                className="relative w-72 h-72 md:w-[400px] md:h-[400px] animate-[bob_7s_ease-in-out_infinite]"
              >
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
                        className="w-full h-full object-cover object-top relative z-10"
                        loading="eager"
                        fetchpriority="high"
                        decoding="async"
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 h-9 w-5 justify-center rounded-full border border-white/20 pt-2" aria-hidden="true">
        <span className="h-1.5 w-1 rounded-full bg-purple-300 animate-[scrollcue_1.8s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}

export default Hero



