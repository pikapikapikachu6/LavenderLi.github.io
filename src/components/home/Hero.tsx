import { useEffect, useState, useCallback } from 'react'
import { Download } from 'lucide-react'

const lines = [
  { prompt: '$ whoami', output: 'Lavender Li' },
  { prompt: '$ cat role.txt', output: 'Graduate Software Engineer' },
  { prompt: '$ echo $FOCUS', output: 'Software developer | QA | IT Support' },
  { prompt: '$ echo $MISSION', output: 'Building clean, reliable and user-focused applications.' },
  { prompt: '$ echo $STATUS', output: 'Actively seeking Graduate & Junior opportunities' },
  { prompt: '$ echo $CURRENT_ROLE', output: 'Tutor (COMP8715-Advanced Computing Team Project), Australian National University' },

]

export default function Hero() {
  // lineIndex: which line we're on
  // phase: 'prompt' typing the command, 'output' typing the result, 'done' line finished
  // charIndex: how many chars revealed so far
  const [lineIndex, setLineIndex] = useState(0)
  const [phase, setPhase] = useState<'prompt' | 'output'>('prompt')
  const [charIndex, setCharIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const [displayedLines, setDisplayedLines] = useState<{ prompt: string; output: string }[]>([])

  const tick = useCallback(() => {
    if (finished) return

    const current = lines[lineIndex]

    if (phase === 'prompt') {
      if (charIndex < current.prompt.length) {
        setCharIndex(c => c + 1)
      } else {
        // Prompt fully typed, switch to output
        setPhase('output')
        setCharIndex(0)
      }
    } else {
      if (charIndex < current.output.length) {
        setCharIndex(c => c + 1)
      } else {
        // Output fully typed, commit this line and move to next
        setDisplayedLines(prev => [...prev, { prompt: current.prompt, output: current.output }])
        if (lineIndex < lines.length - 1) {
          setLineIndex(i => i + 1)
          setPhase('prompt')
          setCharIndex(0)
        } else {
          setFinished(true)
        }
      }
    }
  }, [lineIndex, phase, charIndex, finished])

  useEffect(() => {
    const speed = phase === 'prompt' ? 60 : 30
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, phase])

  const current = lines[lineIndex]
  const typingText =
    phase === 'prompt'
      ? current.prompt.slice(0, charIndex)
      : current.prompt // full prompt when typing output

  const typingOutput = phase === 'output' ? current.output.slice(0, charIndex) : ''

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-4 pt-16">
      <div className="w-full max-w-2xl">
        <div className="overflow-hidden rounded-lg border border-border-light bg-surface-card-light shadow-lg dark:border-border-dark dark:bg-surface-card-dark">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 border-b border-border-light bg-gray-50 px-4 py-3 dark:border-border-dark dark:bg-[#16162a]">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-4 font-mono text-xs text-text-muted-light dark:text-text-muted-dark">
              lavender@dev ~
            </span>
          </div>
          {/* Terminal body */}
          <div className="p-6 font-mono text-sm leading-relaxed md:text-base">
            {/* Already completed lines */}
            {displayedLines.map((line, i) => (
              <div key={i} className="mb-3">
                <div className="text-text-muted-light dark:text-text-muted-dark">{line.prompt}</div>
                <div className="font-bold text-primary-600 dark:text-primary-400">{line.output}</div>
              </div>
            ))}

            {/* Currently typing line */}
            {!finished && (
              <div className="mb-3">
                <div className="text-text-muted-light dark:text-text-muted-dark">
                  {typingText}
                  {phase === 'prompt' && (
                    <span className="cursor-blink ml-0.5 inline-block h-5 w-2 translate-y-0.5 bg-primary-500" />
                  )}
                </div>
                {phase === 'output' && (
                  <div className="font-bold text-primary-600 dark:text-primary-400">
                    {typingOutput}
                    <span className="cursor-blink ml-0.5 inline-block h-5 w-2 translate-y-0.5 bg-primary-500" />
                  </div>
                )}
              </div>
            )}

            {/* Final cursor after all done */}
            {finished && (
              <div className="flex items-center text-text-muted-light dark:text-text-muted-dark">
                <span>$ </span>
                <span className="cursor-blink ml-1 inline-block h-5 w-2 bg-primary-500" />
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href={import.meta.env.BASE_URL + 'resume.pdf'}
            download="Shutong_Li_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
