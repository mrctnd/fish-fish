'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/lib/content'

type FoodItem = {
  name: string
  desc: string
  ekmek?: string
  servis: string
}

type DrinkItem = {
  name: string
  size?: string
  price: string
}

type TabId = 'urunler' | 'icecekler'

const URUNLER: FoodItem[] = [
  { name: 'Atom',             desc: 'Tempura sardalya, mezgit, kalamari',                                                             ekmek: '350₺', servis: '400₺' },
  { name: 'Kalamar',          desc: 'Halka kalamari, özel sos, limon',                                                                ekmek: '375₺', servis: '450₺' },
  { name: 'Fish & Chips',     desc: 'Tempura mezgit, kaşık patates, crunchy yeşillikler, özel soslar',                                               servis: '425₺' },
  { name: 'Sardalya',         desc: 'Tempura sardalya, mevsim yeşillikleri, limon',                                                   ekmek: '300₺', servis: '350₺' },
  { name: 'Dil',              desc: 'Tempura dil, mevsim yeşillikleri, limon',                                                        ekmek: '375₺', servis: '450₺' },
  { name: 'Mezgit',           desc: 'Tempura mezgit, mevsim yeşillikleri, limon',                                                     ekmek: '350₺', servis: '400₺' },
  { name: 'Midye',            desc: 'Tempura midye, özel sos, limon',                                                                 ekmek: '300₺', servis: '350₺' },
  { name: 'F&F Sea Balls',    desc: 'Mezgit, levrek, kalamari, karides, özel sos',                                                                   servis: '450₺' },
  { name: 'Levrek Finger',    desc: 'Pane levrek çubukları, crunchy yeşillikler, limon',                                                             servis: '450₺' },
  { name: 'F&F Karışık Tabak', desc: 'Karides, midye, mezgit, levrek finger, mezgit pane, crunchy yeşillikler, limon',                              servis: '600₺' },
]

const ICECEKLER: DrinkItem[] = [
  { name: 'Coca Cola',    size: '330 ml', price: '55₺' },
  { name: 'Fanta',        size: '330 ml', price: '55₺' },
  { name: 'Seven Up',     size: '330 ml', price: '55₺' },
  { name: 'Ice Tea',      size: '330 ml', price: '55₺' },
  { name: 'Şalgam Suyu',  size: '330 ml', price: '45₺' },
  { name: 'Soda',         size: '200 ml', price: '35₺' },
  { name: 'Su',                           price: '25₺' },
]

const TABS: { id: TabId; label: string; count: number }[] = [
  { id: 'urunler',   label: 'Ürünler',   count: URUNLER.length },
  { id: 'icecekler', label: 'İçecekler', count: ICECEKLER.length },
]

function FoodCard({ item }: { item: FoodItem }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-primary/8 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div>
        <h3 className="mb-1.5 text-[15px] font-bold text-primary">{item.name}</h3>
        <p className="text-[0.82rem] leading-relaxed text-slate-400">{item.desc}</p>
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-primary/6 pt-4">
        {item.ekmek && (
          <div className="flex flex-col items-center rounded-xl bg-bg-light px-3 py-2">
            <span className="text-[9px] font-semibold uppercase tracking-widest text-primary/40">Ekmek</span>
            <span className="text-[13px] font-bold text-primary">{item.ekmek}</span>
          </div>
        )}
        <div className="flex flex-col items-center rounded-xl bg-primary px-3 py-2">
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/50">Servis</span>
          <span className="text-[13px] font-bold text-white">{item.servis}</span>
        </div>
      </div>
    </div>
  )
}

export function MenuClient() {
  const [activeTab, setActiveTab] = useState<TabId>('urunler')

  return (
    <>
      {/* ── Tab bar ─────────────────────────────────────── */}
      <div className="sticky top-14 z-40 border-b border-primary/5 bg-bg-light/95 backdrop-blur-md pt-2 sm:pt-4">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3" role="tablist" aria-label="Menü kategorileri">
            {TABS.map((tab) => {
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                    active
                      ? 'bg-primary text-white shadow-md shadow-primary/25'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary'
                  }`}
                >
                  {tab.label}
                  <span className={`rounded-full px-1.5 py-0.5 text-xs ${active ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                    {tab.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6">

        {activeTab === 'urunler' && (
          <div key="urunler" className="animate-fade-in" role="tabpanel">
            {/* Price legend */}
            <div className="mb-6 flex items-center gap-3 text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-bg-light border border-primary/15" />
                Ekmek arası
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-primary" />
                Tabak servis
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {URUNLER.map((item) => (
                <FoodCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'icecekler' && (
          <div key="icecekler" className="animate-fade-in" role="tabpanel">
            <div className="divide-y divide-primary/6 rounded-2xl border border-primary/8 bg-white overflow-hidden">
              {ICECEKLER.map((item) => (
                <div key={item.name} className="flex items-center justify-between px-5 py-4">
                  <div>
                    <span className="text-[14px] font-semibold text-slate-700">{item.name}</span>
                    {item.size && (
                      <span className="ml-2 text-[11px] text-slate-400">{item.size}</span>
                    )}
                  </div>
                  <span className="text-[14px] font-bold text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-primary/10 bg-primary/4 p-5 text-center">
          <p className="text-[0.85rem] text-slate-500">
            Bilgi & rezervasyon için{' '}
            <a href={`tel:${BUSINESS.phoneTel}`} className="font-bold text-primary underline underline-offset-4 hover:text-primary/70">
              bizi arayın
            </a>
            {' '}·{' '}
            <a href={BUSINESS.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-primary/60 hover:text-primary transition-colors">
              Yol tarifi <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </p>
        </div>

      </div>
    </>
  )
}
