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
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                Angaben gemäß § 5 DDG
              </h2>

              <p className="mt-4 leading-8">
                Benjamin Brändle
                <br />
                Fliederweg 36
                <br />
                74821 Mosbach
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#F5E9D8]">
                Kontakt
              </h2>

              <p className="mt-4 leading-8">
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
                Verantwortlich für den Inhalt
              </h2>

              <p className="mt-4 leading-8">
                Benjamin Brändle
                <br />
                Fliederweg 36
                <br />
                74821 Mosbach
                <br />
                Deutschland
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
