import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Distributed Task Queue',
    description: 'High-performance message queue system built with Spring Boot and Redis.',
    highlights: [
      'Sub-millisecond latency for task distribution',
      'Horizontal scaling to 100k+ messages/sec',
      'Dead-letter queue with retry logic',
    ],
    technologies: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL'],
    link: 'https://github.com',
  },
  {
    id: '2',
    title: 'Embedded IoT Gateway',
    description: 'Firmware for ESP8266-based IoT gateway with real-time sensor aggregation.',
    highlights: [
      'C firmware with <500ms sensor polling',
      'MQTT protocol implementation',
      'Over-the-air update capability',
    ],
    technologies: ['C', 'ESP8266', 'MQTT', 'Embedded Linux'],
    link: 'https://github.com',
  },
  {
    id: '3',
    title: 'API Gateway Service',
    description: 'Rate-limiting and request routing service for microservices architecture.',
    highlights: [
      'Token bucket algorithm for rate limiting',
      'Request context propagation',
      'Comprehensive metrics collection',
    ],
    technologies: ['Node.js', 'TypeScript', 'Redis', 'Prometheus'],
    link: 'https://github.com',
  },
  {
    id: '4',
    title: 'System Monitoring Dashboard',
    description: 'Real-time infrastructure monitoring dashboard with anomaly detection.',
    highlights: [
      'Live metrics streaming with WebSocket',
      'Anomaly detection using statistical methods',
      'Alert routing to multiple channels',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
    link: 'https://github.com',
  },
  {
    id: '5',
    title: 'Database Migration Tool',
    description: 'Zero-downtime migration framework for large PostgreSQL databases.',
    highlights: [
      'Shadow writing for validation',
      'Incremental data replication',
      'Automatic rollback on errors',
    ],
    technologies: ['Java', 'PostgreSQL', 'Kubernetes', 'Docker'],
    link: 'https://github.com',
  },
  {
    id: '6',
    title: 'Performance Profiler',
    description: 'Low-overhead JVM profiler for production monitoring and debugging.',
    highlights: [
      '<2% CPU overhead in sampling mode',
      'Flamegraph generation',
      'Thread contention analysis',
    ],
    technologies: ['Java', 'JVM Internals', 'C++', 'Linux'],
    link: 'https://github.com',
  },
];

export function Projects() {
  return (
    <section className="bg-arch-bg border-t border-arch-border" id="projects">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-space-mono font-bold mb-12 text-arch-text-primary">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="card-bordered p-6 flex flex-col h-full">
              <h3 className="text-lg font-space-mono font-bold text-arch-text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-sm font-inter text-arch-text-secondary mb-4 flex-grow">
                {project.description}
              </p>

              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs font-ibm-plex text-arch-text-secondary flex items-start">
                    <span className="mr-2 text-arch-accent">›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-4 pb-4 border-t border-arch-border">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-jetbrains text-arch-text-secondary/60 bg-arch-bg px-2 py-1 border border-arch-border rounded-arch"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-ibm-plex text-sm text-arch-accent hover:text-arch-text-primary transition-colors duration-150"
              >
                View Repository
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
