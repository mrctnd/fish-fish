import { BUSINESS } from '@/lib/content'

interface MapEmbedProps {
  height?: string
}

export function MapEmbed({ height = '400px' }: MapEmbedProps) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-primary/10 shadow"
      style={{ height }}
      role="region"
      aria-label="Fish&Fish konumunu gösteren Google Haritalar"
    >
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
    </div>
  )
}
