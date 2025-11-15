export function Skills() {
  const skillCategories = [
    {
      title: 'Core Development',
      skills: ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'Next.js', 'Python'],
    },
    {
      title: 'Systems & Embedded',
      skills: ['C', 'Embedded Linux', 'ESP8266', 'Arduino', 'Low-level debugging', 'Hardware protocols'],
    },
    {
      title: 'Infrastructure',
      skills: ['Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Linux', 'Git'],
    },
  ];

  return (
    <section className="bg-arch-bg border-t border-arch-border" id="skills">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-space-mono font-bold mb-12 text-arch-text-primary">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="border border-arch-border bg-arch-surface/50 p-6 rounded-arch">
              <h3 className="label-uppercase mb-6">{category.title}</h3>
              <ul className="font-ibm-plex text-arch-text-secondary space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
