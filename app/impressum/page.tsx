import Link from "next/link";

export const metadata = {
  title: "Impressum | Samjah Music",
  description: "Impressum von Samjah Music",
};

export default function ImpressumPage() {
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
            Impressum
          </h1>

          <div className="mt-12 space-y-10 text-[#BFAE98]">
            <section>
              <div className="leading-8">
                Benjamin Brändle
                <br />
                Samjah Music
                <br />
                Fliederweg 36
                <br />
                74821 Mosbach
                <br />
                Deutschland
                <br />
                <br />
                Tel.:{" "}
                <a
                  href="tel:+4917620561899"
                  className="text-[#D89A3C] hover:text-[#E9B65A]"
                >
                  017620561899
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:smjhlofi@gmail.com"
                  className="text-[#D89A3C] hover:text-[#E9B65A]"
                >
                  smjhlofi@gmail.com
                </a>
                <br />
                <br />
                Umsatzsteuerbefreit (Kleinunternehmerregelung)
              </div>
            </section>

            <section>
              <p className="leading-8">
                Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle weder verpflichtet noch
                bereit.
              </p>
            </section>

            <div className="border-t border-[#3A2B22] pt-8 text-xs text-[#6F6257]">
              Stand: 29.08.2026, 19:39:05
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}