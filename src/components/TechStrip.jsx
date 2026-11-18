import {
  SiReact, SiRedux, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens, SiPython, SiFramer, SiVercel,
} from 'react-icons/si'
import { FiDatabase } from 'react-icons/fi'

const items = [
  { name: 'React', Icon: SiReact },
  { name: 'Redux', Icon: SiRedux },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Express', Icon: SiExpress },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'SQL', Icon: FiDatabase },
  { name: 'JWT', Icon: SiJsonwebtokens },
  { name: 'Python', Icon: SiPython },
  { name: 'Framer Motion', Icon: SiFramer },
  { name: 'Vercel', Icon: SiVercel },
]

const Row = ({ hidden = false }) => (
  <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
    {items.map(({ name, Icon }) => (
      <li
        key={name}
        className="mr-4 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-400 transition-colors duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
      >
        <Icon className="h-4 w-4" />
        {name}
      </li>
    ))}
  </ul>
)

const TechStrip = () => (
  <section aria-label="Technologies I work with" className="relative z-10 py-6 md:py-8">
    <div className="tech-marquee">
      <div className="tech-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  </section>
)

export default TechStrip