# Run from the project root:  powershell -ExecutionPolicy Bypass -File .\apply-update.ps1
$ErrorActionPreference = 'Stop'
$enc = New-Object System.Text.UTF8Encoding $false
if (-not (Test-Path 'src\components\Hero.jsx')) { Write-Host 'Run this from the project folder (the one with package.json).'; exit 1 }

function Edit($path, $old, $new) {
  $full = (Resolve-Path $path).Path
  $t = [IO.File]::ReadAllText($full)
  if ($t.Contains($new)) { Write-Host "already applied: $path"; return }
  if (-not $t.Contains($old)) { Write-Host "WARNING anchor not found in $path - tell Claude"; return }
  [IO.File]::WriteAllText($full, $t.Replace($old, $new), $enc)
  Write-Host "updated: $path"
}

# 1. New files
New-Item -ItemType Directory -Force -Path 'public' | Out-Null
$fav = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6366f1"/><stop offset="0.55" stop-color="#8b5cf6"/><stop offset="1" stop-color="#c026d3"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#g)"/><text x="32" y="43" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="30" font-weight="800" fill="#fff">AM</text></svg>
'@
[IO.File]::WriteAllText((Join-Path (Get-Location) 'public\favicon.svg'), $fav, $enc)

$tech = @'
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
'@
[IO.File]::WriteAllText((Join-Path (Get-Location) 'src\components\TechStrip.jsx'), $tech, $enc)
Write-Host 'created: public\favicon.svg, src\components\TechStrip.jsx'

# 2. Edits to existing files
Edit 'index.html' 'href="https://www.pngmart.com/files/23/Ar-PNG.png"' 'href="/favicon.svg"'
Edit 'src\App.jsx' "import Hero from './components/Hero'" "import Hero from './components/Hero'`nimport TechStrip from './components/TechStrip'"
Edit 'src\App.jsx' '<Hero scrollToSection={scrollToSection} />' "<Hero scrollToSection={scrollToSection} />`n        <TechStrip />"

$badge = @'
<motion.div {...rise(0)} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-200">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to work
                </motion.div>

                <motion.h1 {...rise(0.1)}
'@
Edit 'src\components\Hero.jsx' '<motion.h1 {...rise(0.1)}' $badge

Edit 'src\index.css' 'min-height: calc(100vh - 4rem); display: flex' 'min-height: calc(100vh - 9rem); display: flex'

$css = @'
/* Tech-stack marquee (transform-only animation, cheap to render) */
.tech-marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}
.tech-track { display: flex; width: max-content; animation: marquee 45s linear infinite; will-change: transform; }
.tech-marquee:hover .tech-track { animation-play-state: paused; }
@keyframes marquee { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .tech-track { animation: none !important; } .tech-marquee { overflow-x: auto; } }
'@
$cssPath = (Resolve-Path 'src\index.css').Path
$cur = [IO.File]::ReadAllText($cssPath)
if (-not $cur.Contains('.tech-marquee')) { [IO.File]::WriteAllText($cssPath, $cur + "`n" + $css + "`n", $enc); Write-Host 'updated: src\index.css (marquee)' } else { Write-Host 'already applied: marquee css' }

Write-Host ''
Write-Host 'Done. Now run: npm run dev'
