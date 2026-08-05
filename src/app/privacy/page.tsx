import Link from "next/link";

export const metadata = {
  title: "Tietosuoja & Käyttöehdot — Aurabox",
  description: "Auraboxin tietosuojaseloste ja käyttöehdot.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-32 md:px-12">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="font-label text-[10px] uppercase tracking-[0.3em] text-gold transition-colors hover:text-ivory"
        >
          ← Takaisin
        </Link>

        <h1 className="mt-10 font-serif text-3xl font-light text-ivory">
          Tietosuoja & Käyttöehdot
        </h1>

        <div className="mt-12 space-y-10 font-serif text-sm leading-relaxed text-mist">

          <section>
            <h2 className="mb-4 text-base text-ivory">Tietosuojaseloste</h2>
            <p className="mb-3"><span className="text-ivory">Rekisterinpitäjä</span><br />
            GWP Group Oy<br />
            Y-tunnus: 3637245-5<br />
            Haapalinnanraitti 3 B 20, 33270 Tampere<br />
            auraboxoy@gmail.com</p>
            <p className="mb-3"><span className="text-ivory">Mitä tietoja keräämme</span><br />
            Keräämme ainoastaan yhteydenottolomakkeen kautta lähetetyt tiedot: nimi, sähköpostiosoite ja viesti. Emme kerää automaattisesti evästeitä tai seurantatietoja.</p>
            <p className="mb-3"><span className="text-ivory">Miksi käsittelemme tietoja</span><br />
            Tietoja käytetään ainoastaan yhteydenottoihisi vastaamiseen. Emme myy tai luovuta tietojasi kolmansille osapuolille.</p>
            <p className="mb-3"><span className="text-ivory">Säilytysaika</span><br />
            Säilytämme yhteydenottotiedot enintään 24 kuukautta yhteydenoton jälkeen.</p>
            <p><span className="text-ivory">Oikeutesi (GDPR)</span><br />
            Sinulla on oikeus tarkastaa, korjata tai pyytää poistamaan sinua koskevat tiedot. Ota yhteyttä: auraboxoy@gmail.com</p>
          </section>

          <div className="h-px bg-white/10" />

          <section>
            <h2 className="mb-4 text-base text-ivory">Käyttöehdot</h2>
            <p className="mb-3"><span className="text-ivory">Palvelu</span><br />
            Aurabox-hajuvesiautomaatit tarjoavat luksushajuvesisuihkauksia julkisissa tiloissa. Palvelu on tarkoitettu täysi-ikäisille.</p>
            <p className="mb-3"><span className="text-ivory">Tuoteturvallisuus</span><br />
            Hajuvedet ovat kosmeettisia tuotteita. Vältä silmäkontaktia. Pidä poissa lasten ulottuvilta. Älä suihkuta suoraan ihoon jos sinulla on herkkä iho tai allergia. Ulkoiseen käyttöön ainoastaan.</p>
            <p className="mb-3"><span className="text-ivory">Ostoehdot</span><br />
            Jokainen suihkaus on kertaluonteinen myynti. Suihkauksista ei palauteta maksua ellei laitteessa ole tekninen vika. Reklamaatiot: auraboxoy@gmail.com</p>
            <p className="mb-3"><span className="text-ivory">Vastuunrajoitus</span><br />
            GWP Group Oy ei vastaa allergisista reaktioista, jos asiakas on jättänyt huomioimatta tuotevaroitukset.</p>
            <p><span className="text-ivory">Sovellettava laki</span><br />
            Näihin ehtoihin sovelletaan Suomen lakia.</p>
          </section>

          <div className="h-px bg-white/10" />

          <p className="text-xs text-white/30">
            Päivitetty: Elokuu 2026 · GWP Group Oy (Aurabox)
          </p>
        </div>
      </div>
    </div>
  );
}
