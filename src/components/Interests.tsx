export function Interests() {
  const interests = [
    'Distributed systems architecture',
    'Embedded systems optimization',
    'IoT protocol design',
    'Backend performance tuning',
    'Competitive programming',
    'System design interviews',
    'Low-level debugging techniques',
    'Database internals',
  ];

  return (
    <section className="bg-arch-bg border-t border-arch-border" id="interests">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-space-mono font-bold mb-12 text-arch-text-primary">Interests</h2>

        <div className="grid md:grid-cols-2 max-w-3xl gap-x-8 gap-y-4">
          {interests.map((interest, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-arch-accent font-space-mono mt-0.5">›</span>
              <p className="font-ibm-plex text-arch-text-secondary">{interest}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
