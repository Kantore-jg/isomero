// Fails if any color literal appears outside the palette tokens in src/styles/main.css.
// All colors must come from the 4-color system (var(--color-*) and its derived tokens).
// A line may opt out with a trailing `/* palette-exception */` comment (flags, third-party brand marks).
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = new URL('../src/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const TOKEN_FILE = 'styles/main.css'
const EXT = /\.(vue|css|js)$/
const COLOR = /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?)\(|:\s*(?:white|black|red|blue|green|gray|grey|orange|purple|pink)\s*[;!]/

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : EXT.test(name) ? [p] : []
  })
}

const problems = []
for (const file of walk(ROOT)) {
  const rel = relative(ROOT, file).replace(/\\/g, '/')
  readFileSync(file, 'utf8').split(/\r?\n/).forEach((line, i) => {
    if (!COLOR.test(line)) return
    if (line.includes('palette-exception')) return
    if (rel.endsWith('.js') && !/color|background|fill|stroke/i.test(line)) return
    if (rel === TOKEN_FILE && (/^\s*--color-[a-z]+:\s*#[0-9a-fA-F]{6};/.test(line) || /^\s*(\/\*|\*|Navy text)/.test(line))) return
    problems.push(`src/${rel}:${i + 1}  ${line.trim()}`)
  })
}

if (problems.length) {
  console.error('Off-palette colors found (use var(--color-*) tokens from src/styles/main.css):\n')
  console.error(problems.join('\n'))
  process.exit(1)
}
console.log('check:colors — all colors come from the iSomero palette.')
