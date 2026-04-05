import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginPrerender from 'vite-plugin-prerender'
import { PuppeteerRenderer } from '@prerenderer/renderer-puppeteer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const routes = [
  // Main pages
  '/',
  '/about',
  '/pricing',
  '/specialist-learners',
  '/test-routes',
  '/testimonials',
  '/contact',
  '/faqs',
  '/terms',
  '/diagrams',

  // Driving Test
  '/the-driving-test',
  '/show-me-tell-me',
  '/how-test-is-marked',

  // Resources
  '/driving-syllabus',
  '/driving-skills',

  // Driving Skills sub-pages
  '/driving-skills/5-key-skills',
  '/driving-skills/clutch-control',
  '/driving-skills/defensive-driving',
  '/driving-skills/speed-awareness',
  '/driving-skills/wet-conditions',
  '/driving-skills/driving-in-the-dark',
  '/driving-skills/driving-in-snow',
  '/driving-skills/icy-conditions',
  '/driving-skills/bright-sun',
  '/driving-skills/high-wind',
  '/driving-skills/heavy-traffic',

  // Blog
  '/blog',
  '/blog/rotherham-test-centre',
  '/blog/show-me-tell-me-2026',
  '/blog/3-things-nervous-drivers-do-on-test',
  '/blog/learning-to-drive-neurodivergent',
  '/blog/driving-test-anxiety-causes-failures',
  '/blog/how-to-buy-your-first-car',
  '/blog/failure-to-prepare',
  '/blog/learning-partnership',
  '/blog/how-to-choose-a-driving-instructor',
  '/blog/consistency-beats-intensity',
  '/blog/when-you-are-your-best-self',

  // Location pages
  '/driving-lessons-dalton',
  '/driving-lessons-sunnyside',
  '/driving-lessons-woodlaithes',
  '/driving-lessons-flanderwell',
  '/driving-lessons-wickersley',
  '/driving-lessons-bramley',
  '/driving-lessons-ravenfield',
  '/driving-lessons-braithwell',
  '/driving-lessons-micklebring',
  '/driving-lessons-maltby',
  '/driving-lessons-brecks',
  '/driving-lessons-east-denes',
  '/driving-lessons-herringthorpe',
  '/driving-lessons-rawmarsh',
]

export default defineConfig({
  plugins: [
    react(),
    VitePluginPrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes,
      renderer: new PuppeteerRenderer({
        renderAfterTime: 2000,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      }),
    }),
  ],
})
