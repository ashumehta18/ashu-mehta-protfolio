import { portfolioData } from '../data/portfolio'
import { FadeIn } from './FadeIn'
import { CertificationCard } from './CertificationCard'
import { Modal } from './Modal'
import { SectionHeading } from './SectionHeading'
import { useState } from 'react'
import type { Certification } from '../data/portfolio'

export function Certifications() {
  const [preview, setPreview] = useState<Certification | null>(null)

  return (
    <section id="certifications" className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications and continuous learning."
          description="Add new certificates in src/data/portfolio.ts. Missing files and verification URLs are hidden rather than shown as broken links."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {portfolioData.certifications.map((cert) => (
            <FadeIn key={cert.title}>
              <CertificationCard certification={cert} onPreview={setPreview} />
            </FadeIn>
          ))}
        </div>
      </div>
      <Modal
        open={Boolean(preview?.certificateFile)}
        title={preview?.title ?? 'Certificate'}
        onClose={() => setPreview(null)}
      >
        {preview?.certificateFile ? (
          <img
            src={preview.certificateFile}
            alt={`${preview.title} certificate from ${preview.issuer}`}
            className="w-full rounded-lg"
            loading="lazy"
          />
        ) : null}
      </Modal>
    </section>
  )
}
