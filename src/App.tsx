import { useEffect, useState } from "react";
import ledacoImage from "./assets/ledaco-bokning.png";
import emineImage from "./assets/emine.png";
import tallkodaImage from "./assets/tallkoda.png";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Ledaco Bokningssystem",
    description:
      "Säljsida för Ledacos digitala bokningssystem, framtagen för att presentera tjänsten tydligt och leda besökaren vidare till bokningslösningen.",
    tags: ["Astro", "Tailwind CSS"],
    href: "https://bokning.ledaco.se/",
    image: ledacoImage,
  },
  {
    title: "E-mine",
    description:
      "Vidareutveckling av E-mines webbplats i Webflow, genomförd i samarbete med E-mine och Hatten av Kommunikation. Arbetet omfattade nya sidor, innehållssektioner och löpande förbättringar av webbplatsen.",
    tags: ["Webflow"],
    href: "https://www.emine.se/",
    image: emineImage,
  },
  {
    title: "Tallkoda",
    description:
      "Företagswebbplats för Tallkoda, utvecklad från grunden för att presentera företagets tjänster, kompetens och genomförda projekt i en sammanhållen digital profil.",
    tags: ["React", "TypeScript"],
    href: "",
    image: tallkodaImage,
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      className="arrow-icon"
    >
      <path
        d="M4 10h11M11 6l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="check-icon"
    >
      <path
        d="m5 12 4 4L19 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Hoppa till huvudinnehåll
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#top"
            className="brand"
            aria-label="Tallkoda – tillbaka till startsidan"
          >
            <img
              src="/tallkoda-logo.png"
              alt="Tallkoda – webbutveckling"
              className="header-logo"
            />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="sr-only">
              {menuOpen ? "Stäng meny" : "Öppna meny"}
            </span>

            <span aria-hidden="true" className="menu-icon">
              <span />
              <span />
            </span>
          </button>

          <nav
            id="main-navigation"
            className={`main-navigation ${menuOpen ? "menu-open" : ""}`}
            aria-label="Huvudmeny"
          >
            <a href="#tjanster" onClick={closeMenu}>
              Tjänster
            </a>

            <a href="#teknik" onClick={closeMenu}>
              Teknik
            </a>

            <a href="#projekt" onClick={closeMenu}>
              Projekt
            </a>

            <a href="#om" onClick={closeMenu}>
              Om Tallkoda
            </a>

            <a className="nav-cta" href="#kontakt" onClick={closeMenu}>
              Kontakta oss
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero-decoration" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-content" data-reveal>
              <p className="eyebrow">Webbutveckling från Åhus</p>

              <h1 id="hero-heading">
                Digitala lösningar
                <span>som får företag att växa.</span>
              </h1>

              <p className="hero-lead">
                Tallkoda är ett webbutvecklingsföretag med rötter i Åhus. Vi
                skapar moderna, snabba och tillgängliga webbplatser för företag
                som vill ha en genomtänkt och professionell närvaro på webben.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#kontakt">
                  Diskutera ditt projekt
                  <ArrowIcon />
                </a>

                <a className="text-link" href="#projekt">
                  Se vad vi bygger
                </a>
              </div>

              <ul className="hero-points" aria-label="Fördelar med Tallkoda">
                <li>
                  <CheckIcon />
                  Tillgängligt
                </li>
                <li>
                  <CheckIcon />
                  Responsivt
                </li>
                <li>
                  <CheckIcon />
                  Genomtänkt
                </li>
              </ul>
            </div>

            {/* Hero card removed
            <aside
              className="hero-card"
              aria-label="Tallkodas arbetssätt"
              data-reveal
            >
              <div className="hero-card-top">
                <span className="status-dot" aria-hidden="true" />
                <span>Webbutveckling med helhetsperspektiv</span>
              </div>

              <div className="hero-card-content">
                <p className="card-number">01</p>

                <h2>Från idé till fungerande produkt</h2>

                <p>
                  Struktur, användarupplevelse, kod, tillgänglighet och
                  prestanda behöver växa tillsammans.
                </p>
              </div>

              <div className="tree-lines" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </aside>
            */}
          </div>

          <div className="hero-bottom-line" aria-hidden="true" />
        </section>

        <section
          className="intro-section section"
          aria-labelledby="intro-heading"
        >
          <div className="container intro-grid">
            <div data-reveal>
              <p className="eyebrow">Varför Tallkoda?</p>

              <h2 id="intro-heading" className="section-title">
                En hemsida ska inte bara finnas.
                <span>Den ska fylla ett syfte.</span>
              </h2>
            </div>

            <div className="intro-copy" data-reveal>
              <p>
                En bra webbplats ska skapa förtroende, hjälpa besökaren att
                hitta rätt och samtidigt fungera lika bra under ytan som på
                skärmen.
              </p>

              <p>
                Tallkoda kombinerar modern utveckling med ett strukturerat och
                analytiskt arbetssätt. Resultatet är digitala lösningar byggda
                för människor, verksamheten och framtiden.
              </p>

              <a className="text-link arrow-link" href="#tjanster">
                Så kan vi hjälpa dig
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section
          className="services-section section"
          id="tjanster"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Tjänster</p>
                <h2 id="services-heading" className="section-title">
                  Webben, från rot till krona.
                </h2>
              </div>

              <p>
                Vi bygger lösningar som fungerar idag utan att stå i vägen för
                morgondagens behov.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card" data-reveal>
                <p className="card-index"></p>

                <div>
                  <h3>Webbplatser</h3>
                  <p>
                    Moderna och genomtänkta webbplatser med fokus på varumärke
                    och användarupplevelse.
                  </p>
                </div>

                <ul>
                  <li>Responsiv design</li>
                  <li>SEO-optimerad</li>
                  <li>Tillgänglighet</li>
                  <li>Prestanda</li>
                </ul>
              </article>

              <article className="service-card" data-reveal>
                <p className="card-index"></p>

                <div>
                  <h3>Webbapplikationer</h3>
                  <p>
                    Interaktiva lösningar när verksamheten behöver mer än en
                    traditionell webbplats.
                  </p>
                </div>

                <ul>
                  <li>Frontend & backend</li>
                  <li>API-integrationer</li>
                  <li>Databaser</li>
                  <li></li>
                </ul>
              </article>

              <article className="service-card" data-reveal>
                <p className="card-index"></p>

                <div>
                  <h3>Vidareutveckling</h3>
                  <p>
                    En befintlig lösning behöver inte byggas om från grunden. Vi
                    förbättrar struktur, kod och användarupplevelse stegvis.
                  </p>
                </div>

                <ul>
                  <li>Modernisering</li>
                  <li>WCAG</li>
                  <li>Optimering</li>
                  <li></li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section
          className="values-section section"
          aria-labelledby="values-heading"
        >
          <div className="container">
            <div className="values-layout">
              <div className="values-intro" data-reveal>
                <p className="eyebrow eyebrow-light">
                  Det viktiga sitter djupare
                </p>

                <h2 id="values-heading">
                  Bra kod syns inte alltid.
                  <span>Skillnaden märks.</span>
                </h2>

                <p>
                  Teknikval är viktiga, men de är bara en del av helheten.
                  Tallkoda lägger lika stor vikt vid struktur, användaren och
                  det som händer efter lanseringen.
                </p>
              </div>

              <div className="values-list">
                <article data-reveal>
                  <p></p>
                  <div>
                    <h3>Tillgänglighet från början</h3>
                    <p>
                      Semantisk HTML, tangentbordsnavigering, tydliga kontraster
                      och en struktur som fungerar för fler.
                    </p>
                  </div>
                </article>

                <article data-reveal>
                  <p></p>
                  <div>
                    <h3>Prestanda med mening</h3>
                    <p>
                      Snabbare webb ger en bättre upplevelse och minskar onödiga
                      hinder mellan besökaren och innehållet.
                    </p>
                  </div>
                </article>

                <article data-reveal>
                  <p></p>
                  <div>
                    <h3>Kod byggd för att hålla</h3>
                    <p>
                      Tydlig struktur och hållbara lösningar gör fortsatt
                      utveckling enklare när verksamheten växer.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          className="technology-section section"
          id="teknik"
          aria-labelledby="technology-heading"
        >
          <div className="container technology-layout">
            <div className="technology-heading" data-reveal>
              <p className="eyebrow">Teknik & kompetens</p>

              <h2 id="technology-heading" className="section-title">
                Rätt verktyg för rätt problem.
              </h2>

              <p>
                Vi väljer inte teknik för att den är trendig. Vi väljer den
                efter vad lösningen faktiskt behöver.
              </p>

              <div className="tech-highlight">
                <span>JavaScript</span>
                <span>React</span>
                <span>Vue</span>
                <span>Angular</span>
                <span>TypeScript</span>
                <span>.NET</span>
                <span>Wordpress</span>
                <span>Webflow</span>
                <span>Astro</span>
              </div>
            </div>

            <div className="accordion" data-reveal>
              <details open>
                <summary>
                  <span>
                    <span className="accordion-number"></span>
                    Frontend
                  </span>

                  <span className="accordion-plus" aria-hidden="true" />
                </summary>

                <div className="accordion-content">
                  <p>
                    Moderna och responsiva gränssnitt med komponentbaserad
                    arkitektur och tydligt fokus på användarupplevelsen.
                  </p>

                  <ul className="tag-list">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Vue</li>
                    <li>Angular</li>
                    <li>WordPress</li>
                    <li>Webflow</li>
                    <li>Astro</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </details>

              <details>
                <summary>
                  <span>
                    <span className="accordion-number"></span>
                    Backend & data
                  </span>

                  <span className="accordion-plus" aria-hidden="true" />
                </summary>

                <div className="accordion-content">
                  <p>
                    Backendutveckling och integrationer för lösningar som
                    behöver kommunicera med databaser, tjänster och externa
                    system.
                  </p>

                  <ul className="tag-list">
                    <li>C#</li>
                    <li>.NET</li>
                    <li>REST API</li>
                    <li>MySQL</li>
                    <li>Swagger</li>
                    <li>Datahantering</li>
                  </ul>
                </div>
              </details>

              <details>
                <summary>
                  <span>
                    <span className="accordion-number"></span>
                    Kvalitet & tillgänglighet
                  </span>

                  <span className="accordion-plus" aria-hidden="true" />
                </summary>

                <div className="accordion-content">
                  <p>
                    Tekniken ska fungera för riktiga människor. Därför är
                    kvalitet, testning, WCAG och semantik en naturlig del av
                    utvecklingen.
                  </p>

                  <ul className="tag-list">
                    <li>WCAG</li>
                    <li>Semantisk HTML</li>
                    <li>Testning</li>
                    <li>SEO</li>
                    <li>Prestanda</li>
                    <li>Responsivitet</li>
                  </ul>
                </div>
              </details>

              <details>
                <summary>
                  <span>
                    <span className="accordion-number"></span>
                    Verktyg & arbetsflöde
                  </span>

                  <span className="accordion-plus" aria-hidden="true" />
                </summary>

                <div className="accordion-content">
                  <p>
                    Strukturerade utvecklingsflöden gör det enklare att
                    samarbeta, testa, vidareutveckla och leverera med kvalitet.
                  </p>

                  <ul className="tag-list">
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Docker</li>
                    <li>Agilt</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section
          className="projects-section section"
          id="projekt"
          aria-labelledby="projects-heading"
        >
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Utvalda projekt</p>

                <h2 id="projects-heading" className="section-title">
                  Projekt vi byggt eller arbetar med just nu.
                </h2>
              </div>

              <p>
                Ett urval av webbplatser och digitala lösningar som Tallkoda har
                utvecklat eller vidareutvecklat.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article
                  className="project-card"
                  key={project.title}
                  data-reveal
                >
                  <div className="project-visual">
                    <img
                      src={project.image}
                      alt={`Skärmbild av ${project.title}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="project-info">
                    <p className="project-label">Projekt</p>
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <ul className="project-tags" aria-label="Tekniker">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>

                    {project.href && (
                      <a
                        className="text-link arrow-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Besök projektet
                        <ArrowIcon />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="om">
          <div className="container about-grid">
            <div className="about-image" aria-hidden="true" data-reveal>
              <div className="pine-shape">
                <span />
                <span />
                <span />
              </div>

              <p>Åhus · Skåne</p>
            </div>

            <div className="about-content" data-reveal>
              <p className="eyebrow">Om Tallkoda</p>

              <h2 className="section-title">
                Teknik med ett analytiskt perspektiv.
              </h2>

              <p className="about-lead">
                Tallkoda AB är ett webbutvecklingsföretag i Åhus, strax utanför
                Kristianstad, som hjälper företag och organisationer med moderna
                webbplatser, webbapplikationer och digitala lösningar.
              </p>

              <p>
                Bakom Tallkoda finns erfarenhet av både frontend- och
                backendutveckling, kombinerad med en analytisk bakgrund där
                kvalitet, struktur och problemlösning alltid har varit centralt.
              </p>

              <p>
                Det präglar hur vi arbetar: först förstå verksamheten och
                användaren, därefter välja rätt teknik och bygga en lösning som
                är snabb, tillgänglig och enkel att vidareutveckla.
              </p>

              <div className="about-statements">
                <div>
                  <strong>Nära samarbete</strong>
                  <span>Direkt kontakt genom hela projektet</span>
                </div>

                <div>
                  <strong>Byggt för att hålla</strong>
                  <span>
                    Strukturerad kod och lösningar som kan utvecklas vidare
                  </span>
                </div>

                <div>
                  <strong>Helheten i fokus</strong>
                  <span>
                    Design, teknik, prestanda och tillgänglighet i samma lösning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="process-section section"
          aria-labelledby="process-heading"
        >
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Arbetssätt</p>

                <h2 id="process-heading" className="section-title">
                  Från första idé till färdig lösning.
                </h2>
              </div>
            </div>

            <ol className="process-list">
              <li data-reveal>
                <span>01</span>
                <h3>Förstå</h3>
                <p>
                  Vi börjar med verksamheten, användaren och det faktiska
                  problemet.
                </p>
              </li>

              <li data-reveal>
                <span>02</span>
                <h3>Strukturera</h3>
                <p>
                  Innehåll, teknik och användarflöden får en tydlig struktur
                  innan detaljerna tar över.
                </p>
              </li>

              <li data-reveal>
                <span>03</span>
                <h3>Bygga</h3>
                <p>
                  Lösningen utvecklas responsivt, semantiskt och med
                  långsiktighet i åtanke.
                </p>
              </li>

              <li data-reveal>
                <span>04</span>
                <h3>Förfina</h3>
                <p>
                  Testning, tillgänglighet och prestanda är en del av
                  leveransen, inte en eftertanke.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="contact-section"
          id="kontakt"
          aria-labelledby="contact-heading"
        >
          <div className="container contact-layout">
            <div data-reveal>
              <p className="eyebrow eyebrow-light">Har du något på gång?</p>

              <h2 id="contact-heading">
                Vi planterar gärna
                <span>nästa idé tillsammans.</span>
              </h2>
            </div>

            <div className="contact-content" data-reveal>
              <p>
                Behöver ditt företag en ny webbplats, en smartare digital
                lösning eller hjälp att förbättra det ni redan har?
              </p>

              <a
                className="button button-light"
                href="mailto:kontakt@tallkoda.se"
              >
                kontakt@tallkoda.se
                <ArrowIcon />
              </a>

              <p className="contact-note">
                Berätta gärna kort vad du vill bygga, så tar vi det därifrån.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <img
                src="/tallkoda-logo.png"
                alt="Tallkoda – webbutveckling"
                className="footer-logo"
              />

              <p>
                Webbutveckling från Åhus.
                <br />
                Genomtänkt från grunden.
              </p>
            </div>

            <div className="footer-column">
              <h2>Utforska</h2>

              <nav aria-label="Sidfotsmeny">
                <a href="#tjanster">Tjänster</a>
                <a href="#teknik">Teknik</a>
                <a href="#projekt">Projekt</a>
                <a href="#om">Om Tallkoda</a>
              </nav>
            </div>

            <div className="footer-column">
              <h2>Kontakt</h2>

              <address>
                <a href="mailto:kontakt@tallkoda.se">kontakt@tallkoda.se</a>
                <span>Org.nr 559596-3157</span>
                <span>Godkänd för F-skatt</span>
              </address>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Tallkoda AB. Alla rättigheter
              förbehållna.
            </p>

            <div>
              <a href="/integritet">Integritet</a>
              <a href="/cookies">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
