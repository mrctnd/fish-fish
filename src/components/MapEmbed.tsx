'use client'

import { useState } from 'react'
import { BUSINESS } from '@/lib/content'

interface MapEmbedProps {
  height?: string
}

/**
 * KVKK Çerez Rehberi: Google Haritalar yüklendiğinde IP adresi ve çerez verisi
 * Google'a (yurt dışı) gider; bu yüzden harita yalnızca ziyaretçi tıklayınca açılır.
 */
export function MapEmbed({ height = '400px' }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className="overflow-hidden rounded-2xl border border-primary/10 shadow"
      style={{ height }}
      role="region"
      aria-label="Fish&Fish konumunu gösteren Google Haritalar"
    >
      {loaded ? (
        <iframe
          src={BUSINESS.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Haritalar'da Fish&Fish konumu"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 bg-primary/5 p-6 text-center">
          <p className="max-w-sm text-sm text-slate-600">
            Harita Google Haritalar tarafından sağlanır. Yüklendiğinde IP adresiniz ve Google çerezleri Google&apos;a (yurt dışı) iletilir.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
            >
              Haritayı göster
            </button>
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary hover:border-primary"
            >
              Yol tarifi al
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
