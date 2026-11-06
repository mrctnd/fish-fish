import type { Metadata } from 'next'
import { BUSINESS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Gizlilik ve KVKK',
  description: 'Fish&Fish web sitesine ilişkin KVKK aydınlatma metni ve çerez bilgilendirmesi.',
}

export default function GizlilikPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 text-slate-700 [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-primary [&_li]:mt-1.5 [&_p]:mt-3 [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6">
      <h1 className="font-serif text-4xl text-primary">Gizlilik ve KVKK</h1>
      <p className="text-sm text-slate-500">Son güncelleme: 6 Kasım 2026</p>
      <p>
        Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;Kanun&quot;) 10. maddesi uyarınca bilgilendirme amacıyla hazırlanmıştır; bir sözleşme değildir ve onayınızı gerektirmez.
      </p>

      <h2>Veri sorumlusu</h2>
      <p>
        {BUSINESS.name} — {BUSINESS.address.full} · Telefon: <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a>
      </p>

      <h2>İşlenen veriler, amaç ve hukuki sebep</h2>
      <ul>
        <li>
          <strong>Teknik kayıtlar:</strong> Siteyi ziyaret ettiğinizde, siteyi barındıran GitHub Pages (GitHub Inc.) tarafından IP adresiniz ve tarayıcı bilgileriniz, sitenin sunulması ve güvenliği amacıyla meşru menfaat (Kanun m. 5/2-f) kapsamında otomatik olarak işlenir.
        </li>
        <li>
          <strong>Telefon ve WhatsApp:</strong> Bizi aramanız veya WhatsApp&apos;tan yazmanız hâlinde paylaştığınız bilgiler, rezervasyon ve sipariş talebinizi karşılamak amacıyla bir sözleşmenin kurulmasıyla doğrudan ilgili olması (m. 5/2-c) hukuki sebebine dayanarak işlenir. WhatsApp mesajları Meta Platforms altyapısı üzerinden iletilir.
        </li>
        <li>
          <strong>Harita:</strong> Ana sayfadaki Google Haritalar yalnızca &quot;Haritayı göster&quot; düğmesine bastığınızda yüklenir; bu durumda Google IP adresinizi işler ve kendi çerezlerini yerleştirebilir. Düğmeye basmanız bu içerik için açık rızanız (m. 5/1) anlamına gelir.
        </li>
      </ul>

      <h2>Çerezler</h2>
      <p>
        Sitemizde analitik, reklam veya pazarlama çerezi kullanılmaz; bu nedenle çerez onay paneli gösterilmez. İleride isteğe bağlı çerez eklenirse önceden açık rızanız alınacaktır.
      </p>

      <h2>Aktarım ve yurt dışı</h2>
      <p>
        Barındırma (GitHub) ve harita (Google) hizmet sağlayıcılarının sunucuları yurt dışında bulunduğundan bu veriler yurt dışına aktarılabilir. Aktarımlar Kanun&apos;un 9. maddesine uygun olarak; standart sözleşme gibi uygun güvencelerden biri sağlanarak veya 9/6. maddedeki arızi istisnalar kapsamında gerçekleştirilir. Kanuni yükümlülük hâlinde veriler yetkili kamu kurumlarıyla paylaşılabilir.
      </p>

      <h2>Haklarınız</h2>
      <p>
        Kanun&apos;un 11. maddesi kapsamında verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, düzeltme, silme veya yok edilmesini isteme, otomatik analiz sonucuna itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz. Başvurularınızı kimliğinizi tespit edici bilgilerle birlikte yazılı olarak yukarıdaki adrese iletebilirsiniz; başvurular en geç 30 gün içinde ücretsiz sonuçlandırılır. Sonuçtan memnun kalmamanız hâlinde Kişisel Verileri Koruma Kurulu&apos;na şikâyette bulunabilirsiniz.
      </p>
    </main>
  )
}
