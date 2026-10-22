import Header from "@/components/Header";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <h1>
            Storie di motori
            <br />
            Notizie e cultura automobilistica
          </h1>
          <p>
            Modena Motori fa conoscere la cultura e la tradizione automobilistica
            italiana.
          </p>
        </section>

        <section className="stats" id="chi-siamo">
          <p>
            Seguito da appassionati e operatori attivi nell’automotive, la linea
            editoriale del canale è offrire contenuti professionali e di qualità.
          </p>
          <h2>Modena Motori è presente sui principali social</h2>
          <Socials />
        </section>

        <section id="contatti">
          <div className="c-inner">
            <h2>Contatti</h2>
            <p>Marco Amendola</p>
            <p>
              <a href="tel:+393351479180">335 1479180</a>
            </p>
            <p>
              <a href="mailto:marco@inmediapress.it">marco@inmediapress.it</a>
            </p>
          </div>
          <footer className="legal">
            <p>Testata registrata, Trib. Mo 12-2026</p>
            <p>In elenco AGCOM n. 197/25/CONS</p>
          </footer>
        </section>
      </main>
    </>
  );
}
