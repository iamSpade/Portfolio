export function About() {
  return (
    <section className="bg-arch-bg border-t border-arch-border" id="about">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-space-mono font-bold mb-12 text-arch-text-primary">About</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-arch-text-secondary font-inter leading-relaxed">
              I design systems that behave predictably under load. With experience across backend architecture and embedded development, I focus on clarity, observability, and durable engineering practices.
            </p>
            <p className="text-arch-text-secondary font-inter leading-relaxed">
              My work spans from distributed systems to firmware optimization, with emphasis on clean interfaces and maintainable code.
            </p>
            <p className="text-arch-text-secondary font-inter leading-relaxed">
              When not coding, I explore competitive programming and contribute to open-source infrastructure projects.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="label-uppercase mb-3">Location</p>
              <p className="font-ibm-plex text-arch-text-secondary">San Francisco, CA</p>
            </div>

            <div>
              <p className="label-uppercase mb-3">Currently Exploring</p>
              <ul className="font-ibm-plex text-arch-text-secondary space-y-1">
                <li>Distributed systems resilience</li>
                <li>Embedded systems optimization</li>
                <li>Developer tooling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
