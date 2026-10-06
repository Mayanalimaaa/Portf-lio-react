import { useEffect, useState } from 'react'
import './App.css'
import fotoMayana from './assets/foto-mayana.jpg'
import curriculo from './assets/curriculo-ti-may.pdf'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'

    document.body.appendChild(cursor)

    const moveCursor = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cursor.remove()
    }
  }, [])

  return (
    <main className={darkMode ? 'dark-mode' : ''}>

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <a href="#" className="logo">
          M<span>.</span>L
        </a>

        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>

          <a
            href={curriculo}
            target="_blank"
            rel="noreferrer"
          >
            Currículo
          </a>

          <a href="#contato">Contato</a>
        </div>

        <a
          href="https://wa.me/5545991322449"
          target="_blank"
          rel="noreferrer"
          className="nav-button"
        >
          Vamos conversar
        </a>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Alternar modo claro e escuro"
        >
          {darkMode ? '☀' : '☾'}
        </button>
      </nav>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">
        <div className="hero-content">
          <p className="hero-intro">
            Olá, eu sou a Mayana
          </p>

          <h1>
            Desenvolvedora
            <br />
            <span>Front-End</span>
          </h1>

          <p className="hero-description">
            Estudante de Sistemas para Internet, apaixonada por tecnologia,
            interfaces e por transformar ideias em experiências digitais.
          </p>

          <div className="hero-buttons">
            <a
              href="#sobre"
              className="primary-button"
            >
              Conheça meu trabalho
            </a>

            <a
              href="#contato"
              className="secondary-button"
            >
              Entre em contato
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <div className="photo-placeholder">
              <img
                src={fotoMayana}
                alt="Mayana Lima"
              />
            </div>
          </div>

        </div>
      </section>



     
     <section className="tech-marquee">
  <div className="tech-track">

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
      />
      <span>HTML5</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
      />
      <span>CSS3</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
      />
      <span>JavaScript</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
      />
      <span>React</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
      />
      <span>TypeScript</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git"
      />
      <span>Git</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
      />
      <span>GitHub</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
      />
      <span>Figma</span>
    </div>


    {/* REPETIÇÃO PARA O LOOP INFINITO */}

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
      />
      <span>HTML5</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
      />
      <span>CSS3</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
      />
      <span>JavaScript</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
      />
      <span>React</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
      />
      <span>TypeScript</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git"
      />
      <span>Git</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
      />
      <span>GitHub</span>
    </div>

    <div className="tech-card">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
      />
      <span>Figma</span>
    </div>

  </div>
</section>




      {/* =========================
          SOBRE
      ========================= */}

      <section
        className="about"
        id="sobre"
      >
        <div className="section-label">
          01 — SOBRE MIM
        </div>

        <div className="about-content">
          <h2>
            Tecnologia, criatividade
            <br />
            e vontade de <span>aprender.</span>
          </h2>

          <div className="about-text">
            <p>
              Sou estudante de Sistemas para Internet e também estou em
              formação no Técnico em Desenvolvimento de Sistemas.
            </p>

            <p>
              Estou construindo minha trajetória na tecnologia através de
              estudos, prática e novos desafios. Meu foco está no
              desenvolvimento Front-End e na criação de interfaces modernas,
              funcionais e intuitivas.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          HABILIDADES
      ========================= */}

      <section
        className="skills"
        id="habilidades"
      >
        <div className="section-label">
          02 — APRENDIZADOS
        </div>

        <h2>
          O que estou
          <br />
          <span>aprendendo</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <strong>01</strong>

            <h3>HTML & CSS</h3>

            <p>
              Estrutura, estilos, responsividade e criação de interfaces.
            </p>
          </div>

          <div className="skill-card">
            <strong>02</strong>

            <h3>JavaScript</h3>

            <p>
              Interatividade, lógica e desenvolvimento para a web.
            </p>
          </div>

          <div className="skill-card">
            <strong>03</strong>

            <h3>React</h3>

            <p>
              Componentes, interfaces e aplicações modernas.
            </p>
          </div>

          <div className="skill-card">
            <strong>04</strong>

            <h3>TypeScript</h3>

            <p>
              Desenvolvimento mais organizado, seguro e escalável.
            </p>
          </div>

        </div>
      </section>

      {/* =========================
          PROJETOS
      ========================= */}

      <section
        className="projects"
        id="projetos"
      >
        <div className="section-label">
          03 — PROJETOS
        </div>

        <div className="projects-header">
          <h2>
            Projetos que estou
            <br />
            <span>construindo.</span>
          </h2>

          <p>
            Alguns dos projetos que desenvolvi durante meus estudos e
            minha evolução na área de tecnologia.
          </p>
        </div>

        <div className="projects-grid">
          <div className="projects-coming">
            <span>EM BREVE</span>

            <h3>
              Novos projetos
              <br />
              estão chegando.
            </h3>

            <p>
              Estou desenvolvendo novos projetos para colocar em prática
              meus conhecimentos e continuar evoluindo na área de tecnologia.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CONTATO
      ========================= */}

      <section
        className="contact"
        id="contato"
      >
        <div className="section-label">
          04 — CONTATO
        </div>

        <h2>
          Vamos criar algo
          <br />
          <span>incrível juntos?</span>
        </h2>

        <p>
          Estou sempre aberta a aprender, conhecer novas pessoas e
          oportunidades na área de tecnologia.
        </p>

        <a
          href="https://wa.me/5545991322449"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          Falar pelo WhatsApp ↗
        </a>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer>
        <p>© 2026 Mayana Lima</p>

        <div>
          <a
            href="https://github.com/Mayanalimaaa"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/mayanalima/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://instagram.com/mayyy_dev"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>

    </main>
  )
}

export default App