import { MotionConfig, motion } from 'framer-motion'
import { CheckCircle2, Phone } from 'lucide-react'
import Button from './ui/Button'
import WhatsAppIcon from './ui/WhatsAppIcon'
import { clinic, telLink, waLink } from '../config/clinic'
import { appointment, footer } from '../data/shared'
import { doctor as womensDoctor } from '../data/womens'
import { leadMessage, readRememberedLead } from '../lib/leads'

const t = appointment.thankYou

/**
 * /thank-you.html — shown after an appointment request.
 * A separate URL so ad platforms can track it as a conversion.
 * ?via=form     → request was received by the lead endpoint
 * ?via=whatsapp → details were handed to WhatsApp; the visitor still has to press Send
 */
export default function ThankYou() {
  const params = new URLSearchParams(window.location.search)
  const via = params.get('via') === 'form' ? 'form' : 'whatsapp'
  const name = (params.get('name') || '').slice(0, 40)
  const lead = readRememberedLead()
  const specialty = lead?.doctor === womensDoctor.name ? 'womens' : 'neuro'
  document.documentElement.dataset.specialty = specialty

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-dvh flex-col bg-bg">
        <header className="border-b border-line bg-surface">
          <div className="container-x flex h-[var(--header-h)] items-center">
            <a href="/" aria-label={`${clinic.name}, home`} className="inline-flex h-11 items-center lg:h-12">
              <img src={clinic.logo} alt={clinic.name} className="h-full w-auto" width="860" height="310" />
            </a>
          </div>
        </header>

        <main className="container-x flex flex-1 items-center py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-xl"
          >
            <CheckCircle2 aria-hidden="true" className="size-12 text-accent" strokeWidth={1.5} />
            <h1 className="mt-6 text-h2 font-semibold">{via === 'form' ? t.formTitle(name) : t.waTitle(name)}</h1>
            <p className="mt-4 text-lead text-muted">{via === 'form' ? t.formText : t.waText}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {via === 'whatsapp' && lead && (
                <Button variant="whatsapp" size="lg" href={waLink(leadMessage(lead))}>
                  <WhatsAppIcon />
                  {t.waRetry}
                </Button>
              )}
              <Button variant="primary" size="lg" href={telLink()}>
                <Phone aria-hidden="true" className="size-5" />
                Call {clinic.phoneDisplay}
              </Button>
            </div>

            <div className="mt-10 rounded-card border border-line bg-surface p-6">
              <h2 className="text-h4 font-semibold">{t.bringTitle}</h2>
              <p className="mt-2 text-muted">{t.bringText}</p>
            </div>

            <p className="mt-8 text-sm text-muted">{footer.emergencyNote}</p>

            <a
              href="/"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
            >
              ← {t.home}
            </a>
          </motion.div>
        </main>

        <footer className="bg-band py-6 text-center text-sm text-white/60">{footer.copyright(clinic.year, clinic.name)}</footer>
      </div>
    </MotionConfig>
  )
}
