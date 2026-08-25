import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung | Samjah Music",
  description: "Datenschutzerklärung von Samjah Music",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#0B0908] px-6 py-16 text-[#F5E9D8] lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-block text-sm font-semibold text-[#D89A3C] transition hover:text-[#E9B65A]"
        >
          ← Zurück zu Samjah Music
        </Link>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D89A3C]">
            Rechtliches
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight">
            Datenschutzerklärung
          </h1>

          <div className="mt-12 space-y-10 text-[#BFAE98]">
            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                1. Verantwortlicher
              </h2>

              <p className="mt-4 leading-8">
                Verantwortlich für die Verarbeitung personenbezogener Daten
                auf dieser Website ist:
                <br />
                <br />
                Benjamin Brändle
                <br />
                Fliederweg 36
                <br />
                74821 Mosbach
                <br />
                Deutschland
                <br />
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:smjhlofi@gmail.com"
                  className="text-[#D89A3C] hover:text-[#E9B65A]"
                >
                  smjhlofi@gmail.com
                </a>
                <br />
                Telefon:{" "}
                <a
                  href="tel:+4917620561899"
                  className="text-[#D89A3C] hover:text-[#E9B65A]"
                >
                  +49 176 20561899
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                2. Hosting
              </h2>

              <p className="mt-4 leading-8">
                Diese Website wird über Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, USA, gehostet.
              </p>

              <p className="mt-4 leading-8">
                Beim Aufruf der Website können technisch erforderliche
                Informationen wie IP-Adresse, Datum und Uhrzeit des Zugriffs,
                angeforderte Inhalte, Browserinformationen und technische
                Verbindungsdaten verarbeitet werden. Die Verarbeitung dient
                insbesondere der Bereitstellung, Sicherheit und Stabilität
                der Website.
              </p>

              <p className="mt-4 leading-8">
                Weitere Informationen findest du in der{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D89A3C] hover:text-[#E9B65A]"
                >
                  Datenschutzerklärung von Vercel
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                3. Schriftarten
              </h2>

              <p className="mt-4 leading-8">
                Diese Website verwendet Schriftarten über die Next.js
                Funktion <span className="text-[#F5E9D8]">next/font</span>.
                Die Schriftdateien werden dabei im Rahmen des
                Buildprozesses eingebunden und von dieser Website selbst
                ausgeliefert. Beim Aufruf der Website ist daher keine
                separate Verbindung des Browsers zu Google Fonts erforderlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                4. Verlinkung zu Samjah Stream
              </h2>

              <p className="mt-4 leading-8">
                Diese Website enthält Links zu unserem separaten Dienst
                Samjah Stream. Wenn du einen solchen Link aufrufst, verlässt
                du diese Website und wechselst zum Angebot von Samjah Stream.
              </p>

              <p className="mt-4 leading-8">
                Für die Verarbeitung personenbezogener Daten innerhalb von
                Samjah Stream gelten die dort bereitgestellten
                Datenschutzinformationen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                5. Kontaktaufnahme
              </h2>

              <p className="mt-4 leading-8">
                Wenn du uns per E-Mail oder Telefon kontaktierst, verarbeiten
                wir die von dir mitgeteilten personenbezogenen Daten zur
                Bearbeitung deiner Anfrage.
              </p>

              <p className="mt-4 leading-8">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. b DSGVO, soweit deine Anfrage mit einem Vertrag oder
                vorvertraglichen Maßnahmen zusammenhängt, oder auf Grundlage
                von Art. 6 Abs. 1 lit. f DSGVO, wenn wir ein berechtigtes
                Interesse an der Bearbeitung deiner Anfrage haben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                6. Cookies und Tracking
              </h2>

              <p className="mt-4 leading-8">
                Auf dieser Landingpage setzen wir derzeit keine
                Analysewerkzeuge und kein eigenes Tracking ein. Es werden
                keine Marketingprofile auf Grundlage deines Besuchs auf
                dieser Website erstellt.
              </p>

              <p className="mt-4 leading-8">
                Technisch erforderliche Daten, die für die Bereitstellung und
                Sicherheit des Angebots verarbeitet werden, bleiben davon
                unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                7. Deine Rechte
              </h2>

              <p className="mt-4 leading-8">
                Du hast nach Maßgabe der gesetzlichen Voraussetzungen das
                Recht auf Auskunft über deine personenbezogenen Daten,
                Berichtigung unrichtiger Daten, Löschung, Einschränkung der
                Verarbeitung und Datenübertragbarkeit.
              </p>

              <p className="mt-4 leading-8">
                Du kannst einer Verarbeitung personenbezogener Daten unter
                den gesetzlichen Voraussetzungen widersprechen.
              </p>

              <p className="mt-4 leading-8">
                Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten
                gegen Datenschutzrecht verstößt, kannst du dich bei einer
                Datenschutzaufsichtsbehörde beschweren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                8. Aktualität
              </h2>

              <p className="mt-4 leading-8">
                Wir können diese Datenschutzerklärung anpassen, wenn sich
                die technischen Funktionen oder die rechtlichen
                Anforderungen dieser Website ändern.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}