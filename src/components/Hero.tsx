export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-arch-bg grid-pattern flex flex-col">
      <nav className="section-container pt-12">
        <div className="flex gap-8 justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="button-ghost text-sm"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="button-ghost text-sm"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="button-ghost text-sm"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('interests')}
            className="button-ghost text-sm"
          >
            Interests
          </button>
        </div>
      </nav>

      <div className="section-container flex items-center justify-center flex-1">
        <div className="max-w-3xl text-center">
          <div className="label-uppercase mb-6">Software Engineer</div>
          <h1 className="text-5xl md:text-6xl font-space-mono font-bold leading-tight text-arch-text-primary mb-6">
            Engineering reliable systems.
          </h1>
          <p className="text-lg text-arch-text-secondary font-inter leading-relaxed mb-8">
            Backend engineering, embedded firmware, and scalable system design. I build systems that behave predictably under load.
          </p>

          <div className="flex gap-4 items-center justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="button-primary"
            >
              View Projects
            </button>
            <button className="button-ghost">Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}
