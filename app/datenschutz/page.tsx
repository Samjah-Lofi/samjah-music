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
                1) Einleitung und Kontaktdaten des Verantwortlichen
              </h2>

              <p className="mt-4 leading-8">
                1.1 Wir freuen uns, dass du unsere Website besuchst und
                bedanken uns für dein Interesse. Im Folgenden informieren wir
                dich über den Umgang mit deinen personenbezogenen Daten bei
                der Nutzung unserer Website. Personenbezogene Daten sind
                hierbei alle Daten, mit denen du persönlich identifiziert
                werden kannst.
              </p>

              <p className="mt-4 leading-8">
                1.2 Verantwortlicher für die Datenverarbeitung auf dieser
                Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist
                Benjamin Brändle, Samjah Music, Fliederweg 36, 74821 Mosbach,
                Deutschland, Tel.: 017620561899, E-Mail: smjhlofi@gmail.com.
                Der für die Verarbeitung von personenbezogenen Daten
                Verantwortliche ist diejenige natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten
                entscheidet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                2) Datenerfassung beim Besuch unserer Website
              </h2>

              <p className="mt-4 leading-8">
                2.1 Bei der bloß informatorischen Nutzung unserer Website, also
                wenn du dich nicht registrierst oder uns anderweitig
                Informationen übermittelst, erheben wir nur solche Daten, die
                dein Browser an den Seitenserver übermittelt (sog.
                „Server-Logfiles“). Wenn du unsere Website aufrufst, erheben
                wir die folgenden Daten, die für uns technisch erforderlich
                sind, um dir die Website anzuzeigen:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-8">
                <li>Unsere besuchte Website</li>
                <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffs</li>
                <li>Menge der gesendeten Daten in Byte</li>
                <li>
                  Quelle/Verweis, von welchem du auf die Seite gelangtest
                </li>
                <li>Verwendeter Browser</li>
                <li>Verwendetes Betriebssystem</li>
                <li>
                  Verwendete IP-Adresse (ggf.: in anonymisierter Form)
                </li>
              </ul>

              <p className="mt-4 leading-8">
                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf
                Basis unseres berechtigten Interesses an der Verbesserung der
                Stabilität und Funktionalität unserer Website. Eine Weitergabe
                oder anderweitige Verwendung der Daten findet nicht statt. Wir
                behalten uns allerdings vor, die Server-Logfiles nachträglich
                zu überprüfen, sollten konkrete Anhaltspunkte auf eine
                rechtswidrige Nutzung hinweisen.
              </p>

              <p className="mt-4 leading-8">
                2.2 Diese Website nutzt aus Sicherheitsgründen und zum Schutz
                der Übertragung personenbezogener Daten und anderer
                vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an uns)
                eine SSL-bzw. TLS-Verschlüsselung. Du kannst eine verschlüsselte
                Verbindung an der Zeichenfolge „https://“ und dem
                Schloss-Symbol in deiner Browserzeile erkennen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                3) Hosting &amp; Content-Delivery-Network
              </h2>

              <h3 className="mt-6 text-xl font-bold text-[#F5E9D8]">
                3.1 Supabase
              </h3>

              <p className="mt-4 leading-8">
                Wir nutzen den Webhosting-Dienst „Supabase“ der Supabase, Inc.,
                548 Market St, San Francisco, CA 94104, USA, zum Zwecke des
                Hostings und der Darstellung der Website-Inhalte auf Basis
                einer Verarbeitung in unserem Auftrag.
              </p>

              <p className="mt-4 leading-8">
                Sämtliche auf unserer Website erhobenen Daten werden auf
                Servern von Supabase verarbeitet, die ihren Standort
                ausschließlich innerhalb der Europäischen Union haben.
              </p>

              <p className="mt-4 leading-8">
                Wir haben mit Supabase einen Auftragsverarbeitungsvertrag
                abgeschlossen, mit dem Supabase verpflichtet wird, die Daten
                unserer Seitenbesucher zu schützen und sie nicht an Dritte
                weiterzugeben.
              </p>

              <p className="mt-4 leading-8">
                Weitere Hinweise zum Datenschutz von Supabase erhältst du unter{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D89A3C] hover:text-[#E9B65A]"
                >
                  https://supabase.com/privacy
                </a>
              </p>

              <p className="mt-4 leading-8">
                Eine weitere Verarbeitung auf anderen Servern als den
                vorgenannten von Supabase findet nur im nachstehend
                mitgeteilten Rahmen statt.
              </p>

              <h3 className="mt-6 text-xl font-bold text-[#F5E9D8]">
                3.2 Vercel
              </h3>

              <p className="mt-4 leading-8">
                Für das Hosting unserer Website und die Darstellung der
                Seiteninhalte nutzen wir das System von folgendem Anbieter:
                Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
                USA.
              </p>

              <p className="mt-4 leading-8">
                Sämtliche auf unserer Website erhobenen Daten werden auf den
                Servern des Anbieters verarbeitet. Wir haben mit dem Anbieter
                einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz
                der Daten unserer Seitenbesucher sicherstellt und eine
                unberechtigte Weitergabe an Dritte untersagt.
              </p>

              <p className="mt-4 leading-8">
                Für Datenübermittlungen in die USA hat sich der Anbieter dem
                EU-US-Datenschutzrahmen (EU-US Data Privacy Framework)
                angeschlossen, das auf Basis eines Angemessenheitsbeschlusses
                der Europäischen Kommission die Einhaltung des europäischen
                Datenschutzniveaus sicherstellt.
              </p>

              <h3 className="mt-6 text-xl font-bold text-[#F5E9D8]">
                3.3 Vercel
              </h3>

              <p className="mt-4 leading-8">
                Wir nutzen ein Content Delivery Network des folgenden
                Anbieters: Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA
                91723, USA.
              </p>

              <p className="mt-4 leading-8">
                Dieser Dienst ermöglicht uns, große Mediendateien wie
                Grafiken, Seiteninhalte oder Skripte über ein Netz regional
                verteilter Server schneller auszuliefern. Die Verarbeitung
                erfolgt zur Wahrung unseres berechtigten Interesses an der
                Verbesserung der Stabilität und Funktionalität unserer Website
                gem. Art. 6 Abs. 1 lit. f DSGVO. Wir haben mit dem Anbieter
                einen Auftragsverarbeitungsvertrag abgeschlossen, der den
                Schutz der Daten unserer Seitenbesucher sicherstellt und eine
                unberechtigte Weitergabe an Dritte untersagt.
              </p>

              <p className="mt-4 leading-8">
                Für Datenübermittlungen in die USA hat sich der Anbieter dem
                EU-US-Datenschutzrahmen (EU-US Data Privacy Framework)
                angeschlossen, das auf Basis eines Angemessenheitsbeschlusses
                der Europäischen Kommission die Einhaltung des europäischen
                Datenschutzniveaus sicherstellt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                4) Cookies
              </h2>

              <p className="mt-4 leading-8">
                Um den Besuch unserer Website attraktiv zu gestalten und die
                Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir
                Cookies, also kleine Textdateien, die auf deinem Endgerät
                abgelegt werden. Teilweise werden diese Cookies nach Schließen
                des Browsers automatisch wieder gelöscht (sog.
                „Session-Cookies“), teilweise verbleiben diese Cookies länger
                auf deinem Endgerät und ermöglichen das Speichern von
                Seiteneinstellungen (sog. „persistente Cookies“). Im letzteren
                Fall kannst du die Speicherdauer der Übersicht zu den
                Cookie-Einstellungen deines Webbrowsers entnehmen.
              </p>

              <p className="mt-4 leading-8">
                Sofern durch einzelne von uns eingesetzte Cookies auch
                personenbezogene Daten verarbeitet werden, erfolgt die
                Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur
                Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO
                im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1
                lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der
                bestmöglichen Funktionalität der Website sowie einer
                kundenfreundlichen und effektiven Ausgestaltung des
                Seitenbesuchs.
              </p>

              <p className="mt-4 leading-8">
                Du kannst deinen Browser so einstellen, dass du über das Setzen
                von Cookies informiert wirst und einzeln über deren Annahme
                entscheiden oder die Annahme von Cookies für bestimmte Fälle
                oder generell ausschließen kannst.
              </p>

              <p className="mt-4 leading-8">
                Bitte beachte, dass bei Nichtannahme von Cookies die
                Funktionalität unserer Website eingeschränkt sein kann.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                5) Kontaktaufnahme
              </h2>

              <p className="mt-4 leading-8">
                Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular
                oder E-Mail) werden – ausschließlich zum Zweck der Bearbeitung
                und Beantwortung deines Anliegens und nur im dafür
                erforderlichen Umfang – personenbezogene Daten verarbeitet.
              </p>

              <p className="mt-4 leading-8">
                Rechtsgrundlage für die Verarbeitung dieser Daten ist unser
                berechtigtes Interesse an der Beantwortung deines Anliegens
                gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt deine Kontaktierung auf
                einen Vertrag ab, so ist zusätzliche Rechtsgrundlage für die
                Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Deine Daten werden
                gelöscht, wenn sich aus den Umständen entnehmen lässt, dass der
                betroffene Sachverhalt abschließend geklärt ist und sofern
                keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                6) Datenverarbeitung bei Eröffnung eines Kundenkontos
              </h2>

              <p className="mt-4 leading-8">
                Gemäß Art. 6 Abs. 1 lit. b DSGVO werden personenbezogene Daten
                im jeweils erforderlichen Umfang weiterhin erhoben und
                verarbeitet, wenn du uns diese bei der Eröffnung eines
                Kundenkontos mitteilst. Welche Daten für die Kontoeröffnung
                erforderlich sind, entnimmst du der Eingabemaske des
                entsprechenden Formulars auf unserer Website.
              </p>

              <p className="mt-4 leading-8">
                Eine Löschung deines Kundenkontos ist jederzeit möglich und
                kann durch eine Nachricht an die o.g. Adresse des
                Verantwortlichen erfolgen. Nach Löschung deines Kundenkontos
                werden deine Daten gelöscht, sofern alle darüber geschlossenen
                Verträge vollständig abgewickelt sind, keine gesetzlichen
                Aufbewahrungsfristen entgegenstehen und unsererseits kein
                berechtigtes Interesse an der Weiterspeicherung fortbesteht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                7) Datenverarbeitung zur Bestellabwicklung
              </h2>

              <p className="mt-4 leading-8">
                7.1 Soweit für die Vertragsabwicklung zu Liefer- und
                Zahlungszwecken erforderlich, werden die von uns erhobenen
                personenbezogenen Daten gemäß Art. 6 Abs. 1 lit. b DSGVO an das
                beauftragte Transportunternehmen und das beauftragte
                Kreditinstitut weitergegeben.
              </p>

              <p className="mt-4 leading-8">
                Sofern wir Dir auf Grundlage eines entsprechenden Vertrages
                Aktualisierungen für Waren mit digitalen Elementen oder für
                digitale Produkte schulden, verarbeiten wir die von Dir bei
                der Bestellung übermittelten Kontaktdaten (Name, Anschrift,
                Mailadresse), um Dich im Rahmen unserer gesetzlichen
                Informationspflichten gemäß Art. 6 Abs. 1 lit. c DSGVO auf
                geeignetem Kommunikationsweg (etwa postalisch oder per Mail)
                über anstehende Aktualisierungen im gesetzlich vorgesehenen
                Zeitraum persönlich zu informieren. Deine Kontaktdaten werden
                hierbei streng zweckgebunden für Mitteilungen über von uns
                geschuldete Aktualisierungen verwendet und zu diesem Zweck
                durch uns nur insoweit verarbeitet, wie dies für die jeweilige
                Information erforderlich ist.
              </p>

              <p className="mt-4 leading-8">
                Zur Abwicklung Deiner Bestellung arbeiten wir ferner mit dem /
                den nachstehenden Dienstleister(n) zusammen, die uns ganz oder
                teilweise bei der Durchführung geschlossener Verträge
                unterstützen. An diese Dienstleister werden nach Maßgabe der
                folgenden Informationen gewisse personenbezogene Daten
                übermittelt.
              </p>

              <p className="mt-4 font-semibold leading-8">
                7.2 Verwendung von Paymentdienstleistern (Zahlungsdiensten)
              </p>

              <p className="mt-4 leading-8">Stripe</p>

              <p className="mt-4 leading-8">
                Auf dieser Website stehen eine oder mehrere
                Online-Zahlungsarten des folgenden Anbieters zur Verfügung:
                Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand
                Canal Dock, Dublin, Irland.
              </p>

              <p className="mt-4 leading-8">
                Bei Auswahl einer Zahlungsart des Anbieters werden an diesen
                deine im Rahmen des Bestellvorgangs mitgeteilten Zahlungsdaten
                (darunter Name, Anschrift, Bank- und Zahlkarteninformationen,
                Währung und Transaktionsnummer) sowie Informationen über den
                Inhalt deiner Bestellung gemäß Art. 6 Abs. 1 lit. b DSGVO
                weitergegeben. Die Weitergabe deiner Daten erfolgt in diesem
                Falle ausschließlich zum Zweck der Zahlungsabwicklung mit dem
                Anbieter und nur insoweit, als sie hierfür erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                8) Seitenfunktionalitäten
              </h2>

              <p className="mt-4 leading-8">Supabase</p>

              <p className="mt-4 leading-8">
                Auf unserer Website nutzen wir zur Verifizierung von Anmelde-
                und Login-Versuchen für geschützte Seitenbereiche den Dienst
                des folgenden Anbieters: Supabase, Inc., 548 Market St, San
                Francisco, CA 94104, USA.
              </p>

              <p className="mt-4 leading-8">
                Ausschließlich auf Basis unseres berechtigten Interesses an der
                Wahrung der Struktur- und Datensicherheit unserer Website
                werden deine Anmeldedaten (E-Mail, Nutzername und Passwort)
                gemäß Art. 6 Abs. 1 lit. f DSGVO an den Anbieter zur
                Authentifizierung übermittelt, um über die Freigabe des
                Anmeldeversuchs zu entscheiden.
              </p>

              <p className="mt-4 leading-8">
                Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
                geschlossen, der die Daten unserer Seitenbesucher schützt und
                eine Weitergabe an Dritte untersagt.
              </p>

              <p className="mt-4 leading-8">
                Für die Übermittlung von Daten in die USA beruft sich der
                Anbieter auf Standardvertragsklauseln der Europäischen
                Kommission, welche die Einhaltung des europäischen
                Datenschutzniveaus sicherstellen sollen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                9) Rechte des Betroffenen
              </h2>

              <p className="mt-4 leading-8">
                9.1 Das geltende Datenschutzrecht gewährt dir gegenüber uns als
                Verantwortlichen hinsichtlich der Verarbeitung deiner
                personenbezogenen Daten die nachstehenden Betroffenenrechte
                (Auskunfts- und Interventionsrechte), wobei für die jeweiligen
                Ausübungsvoraussetzungen auf die angeführte Rechtsgrundlage
                verwiesen wird:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-8">
                <li>Auskunftsrecht gemäß Art. 15 DSGVO;</li>
                <li>Recht auf Berichtigung gemäß Art. 16 DSGVO;</li>
                <li>Recht auf Löschung gemäß Art. 17 DSGVO;</li>
                <li>
                  Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO;
                </li>
                <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO;</li>
                <li>
                  Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO;
                </li>
                <li>
                  Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs.
                  3 DSGVO;
                </li>
                <li>Recht auf Beschwerde gemäß Art. 77 DSGVO.</li>
              </ul>

              <p className="mt-6 font-bold leading-8 text-[#F5E9D8]">
                9.2 WIDERSPRUCHSRECHT
              </p>

              <p className="mt-4 leading-8 uppercase">
                Wenn wir im Rahmen einer Interessenabwägung deine
                personenbezogenen Daten aufgrund unseres überwiegenden
                berechtigten Interesses verarbeiten, hast du das jederzeitige
                Recht, aus Gründen, die sich aus deiner besonderen Situation
                ergeben, gegen diese Verarbeitung mit Wirkung für die Zukunft
                Widerspruch einzulegen.
              </p>

              <p className="mt-4 leading-8 uppercase">
                Machst du von deinem Widerspruchsrecht Gebrauch, beenden wir die
                Verarbeitung der betroffenen Daten. Eine Weiterverarbeitung
                bleibt aber vorbehalten, wenn wir zwingende schutzwürdige
                Gründe für die Verarbeitung nachweisen können, die deine
                Interessen, Grundrechte und Grundfreiheiten überwiegen, oder
                wenn die Verarbeitung der Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen dient.
              </p>

              <p className="mt-4 leading-8 uppercase">
                Werden deine personenbezogenen Daten von uns verarbeitet, um
                Direktwerbung zu betreiben, hast du das Recht, jederzeit
                Widerspruch gegen die Verarbeitung dich betreffender
                personenbezogener Daten zum Zwecke derartiger Werbung
                einzulegen. Du kannst den Widerspruch wie oben beschrieben
                ausüben.
              </p>

              <p className="mt-4 leading-8 uppercase">
                Machst du von deinem Widerspruchsrecht Gebrauch, beenden wir die
                Verarbeitung der betroffenen Daten zu Direktwerbezwecken.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                10) Dauer der Speicherung personenbezogener Daten
              </h2>

              <p className="mt-4 leading-8">
                Die Dauer der Speicherung von personenbezogenen Daten bemisst
                sich anhand der jeweiligen Rechtsgrundlage, am Verarbeitungszweck
                und – sofern einschlägig – zusätzlich anhand der jeweiligen
                gesetzlichen Aufbewahrungsfrist (z.B. handels- und
                steuerrechtliche Aufbewahrungsfristen).
              </p>

              <p className="mt-4 leading-8">
                Bei der Verarbeitung von personenbezogenen Daten auf Grundlage
                einer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a
                DSGVO werden die betroffenen Daten so lange gespeichert, bis du
                deine Einwilligung widerrufst.
              </p>

              <p className="mt-4 leading-8">
                Existieren gesetzliche Aufbewahrungsfristen für Daten, die im
                Rahmen rechtsgeschäftlicher bzw. rechtsgeschäftsähnlicher
                Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO verarbeitet werden, werden diese Daten nach Ablauf der
                Aufbewahrungsfristen routinemäßig gelöscht, sofern sie nicht
                mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich
                sind und/oder unsererseits kein berechtigtes Interesse an der
                Weiterspeicherung fortbesteht.
              </p>

              <p className="mt-4 leading-8">
                Bei der Verarbeitung von personenbezogenen Daten auf Grundlage
                von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten so lange
                gespeichert, bis du dein Widerspruchsrecht nach Art. 21 Abs. 1
                DSGVO ausübst, es sei denn, wir können zwingende schutzwürdige
                Gründe für die Verarbeitung nachweisen, die deine Interessen,
                Rechte und Freiheiten überwiegen, oder die Verarbeitung dient
                der Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen.
              </p>

              <p className="mt-4 leading-8">
                Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der
                Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                werden diese Daten so lange gespeichert, bis du dein
                Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO ausübst.
              </p>

              <p className="mt-4 leading-8">
                Sofern sich aus den sonstigen Informationen dieser Erklärung
                über spezifische Verarbeitungssituationen nichts anderes ergibt,
                werden gespeicherte personenbezogene Daten im Übrigen dann
                gelöscht, wenn sie für die Zwecke, für die sie erhoben oder auf
                sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
              </p>
            </section>

            <div className="border-t border-[#3A2B22] pt-8 text-xs text-[#6F6257]">
              <div>© IT-Recht Kanzlei</div>
              <div className="mt-2">Stand: 29.08.2026, 19:38:40</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}